<template>
    <div id="info">
        <el-table
                :data="NewsList"
                height="540px"
                border
                style="width: 100%">
            <el-table-column
                    prop="new1"
                    label="资讯一"
                    width="450">
            </el-table-column>
            <el-table-column
                    prop="new2"
                    label="资讯二"
                    width="450">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="180">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row,'查看')" type="text" size="small">查看</el-button>
                    <el-button @click="handleClick(scope.row,'编辑')" type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div id="info-add">
            <el-dialog title="新增产品" :visible.sync="dialogTagVisible">
                <el-form :label-position="labelPosition" label-width="80px">
                    <el-form-item class="input-father" label="资讯一">
                        <el-input class="input-item" v-model="newInfo.new1"></el-input>
                    </el-form-item>
                    <el-form-item class="input-father" label="资讯二">
                        <el-input class="input-item" v-model="newInfo.new2"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogTagVisible = false">取 消</el-button>
                    <el-button type="primary" @click="add">确 定</el-button>
                </div>
            </el-dialog>
        </div>
        <div id="newUser-dialog">
            <el-dialog title="用户信息"  :visible.sync="dialogFormVisible">
                <el-form :label-position="labelPosition" :disabled = "form" label-width="80px" :model="info">
                    <el-form-item class="input-father" label="资讯一">
                        <el-input class="input-item" v-model="info.new1"></el-input>
                    </el-form-item>
                    <el-form-item class="input-father" label="资讯二">
                        <el-input class="input-item" v-model="info.new2"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" id="edit" @click="dialogFormVisible = false">确 定</el-button>
                </div>
            </el-dialog>
        </div>
        <el-button type="primary" @click="dialogTagVisible = true" id="info-add-btn" size="medium" icon="el-icon-edit">新增</el-button>
    </div>
</template>

<script>
    import infoAPI from "@/apis/infoAPI";
    export default {
        methods: {
            handleClick(row,flag) {
                let {new1,new2} = row.new1;
                this.info = row;
                console.log(row)
                this.dialogFormVisible = true;
                if (flag == '查看') {
                    this.form = true;
                } else {
                    this.form = false;
                    let edit = document.getElementById("edit");
                    let that = this;
                    edit.onclick = function () {
                        infoAPI.getNewsEdit(new1,new2,that.info,(cb) => {
                            let msg = cb.msg;
                            that.$message(msg);
                        });
                    }
                }
            },
            add(){
                infoAPI.getNewsAdd(this.newInfo,(cb) => {
                    this.$message(cb.msg);
                    this.dialogTagVisible = false;
                })
            }
        },

        data() {
            return {
                NewsList: [],
                dialogTagVisible: false,
                dialogFormVisible : false,
                labelPosition: 'right',
                info: '',
                newInfo : {
                    new1 : '',
                    new2 : ''
                },
                form : true
            }
        },
        mounted(){
            infoAPI.getNewsList(cb => {
                this.NewsList = cb;
            })
        }
    }
</script>
<style scoped>
    #info{
        margin: 20px;
    }
    #info-add-btn{
        margin-top: 12px;
    }
</style>