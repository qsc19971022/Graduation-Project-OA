<template>
    <div id="admin">
        <el-table
                :data="adminList"
                style="width: 100%"
                height="540px"
                max-height="540">
            <el-table-column
                    fixed
                    prop="name"
                    label="管理员"
                    width="300">
            </el-table-column>
            <el-table-column
                    prop="user"
                    label="账号"
                    width="300">
            </el-table-column>
            <el-table-column
                    prop="pwd"
                    label="密码"
                    width="300">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="200">
                <template slot-scope="scope">
                    <el-button
                            @click.native.prevent="deleteRow(scope.$index, adminList)"
                            type="text"
                            size="small">
                        移除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <div id="admin-add">
            <el-dialog title="新增管理" :visible.sync="dialogTagVisible">
                <el-form :label-position="labelPosition" label-width="80px">
                    <el-form-item class="input-father" label="管理员">
                        <el-input class="input-item" v-model="newAdmin.name"></el-input>
                    </el-form-item>
                    <el-form-item class="input-father" label="账号">
                        <el-input class="input-item" v-model="newAdmin.user"></el-input>
                    </el-form-item>
                    <el-form-item class="input-father" label="密码">
                        <el-input class="input-item" v-model="newAdmin.pwd"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogTagVisible = false">取 消</el-button>
                    <el-button type="primary" @click="add">确 定</el-button>
                </div>
            </el-dialog>
        </div>
        <el-button type="primary" @click="dialogTagVisible = true" id="admin-add-btn" size="medium" icon="el-icon-edit">新增</el-button>
    </div>
</template>

<script>
    import adminApi from "@/apis/adminApi";
    export default {
        methods: {
            deleteRow(index, rows) {
                let user = rows[index].user;
                adminApi.delAdmin(user,(cb) => {
                    this.$message(cb.msg);
                    rows.splice(index, 1);
                })
            },
            getList(){
                adminApi.getAdminList(cb => {
                    this.adminList = cb;
                })
            },
            add(){
                adminApi.setAdmin(this.newAdmin.name,this.newAdmin.user,this.newAdmin.pwd,(cb) => {
                    this.$message(cb.msg);
                    this.dialogTagVisible = false;
                })
            }
        },
        data() {
            return {
                adminList : [],
                labelPosition : 'right',
                dialogTagVisible: false,
                newAdmin : {
                    name : '',
                    user : '',
                    pwd : ''
                }
            }
        },
        mounted(){
            this.getList();
        },
        updated(){
            this.getList();
        }
    }
</script>
<style scoped>
    #admin{
        margin: 20px;
    }
    #admin-add-btn{
        margin-top: 12px;
    }
</style>