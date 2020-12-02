<template>
    <div id="newUser">
        <el-table
                :data="productList"
                border
                max-height="540px"
                v-loading="loading"
                row-click=“handleEdit”
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="product_name"
                    label="产品名"
                    width="240">
            </el-table-column>
            <el-table-column
                    prop="product_rate"
                    label="收益率"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="product_trade"
                    label="产品周期"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="risk_level"
                    label="风险等级"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="produce"
                    label="适合人群"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="zip"
                    label="邮编"
                    width="120">
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
        <div id="newUser-dialog">
            <el-dialog title="用户信息"  :visible.sync="dialogFormVisible">
                <el-form :label-position="labelPosition" :disabled = "form" label-width="80px" :model="product">
                    <el-form-item class="input-father" label="产品名">
                        <el-input class="input-item" v-model="product.product_name"></el-input>
                    </el-form-item>
                    <el-form-item class="input-father" label="收益率">
                        <el-input class="input-item" v-model="product.product_rate"></el-input>
                    </el-form-item>
                    <el-form-item class="input-father" label="产品周期">
                        <el-input class="input-item" v-model="product.product_trade"></el-input>
                    </el-form-item>
                    <el-form-item class="input-father" label="风险等级">
                        <el-input class="input-item" v-model="product.risk_level"></el-input>
                    </el-form-item>
                    <el-form-item class="input-father" label="适合人群">
                        <el-input class="input-item" v-model="product.produce"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" id="edit" @click="dialogFormVisible = false">确 定</el-button>
                </div>
            </el-dialog>
        </div>
        <div id="newUser-add">
            <el-dialog title="新增产品" :visible.sync="dialogTagVisible">
                <el-form :label-position="labelPosition" label-width="80px">
                    <el-form-item class="input-father" label="产品名">
                        <el-input class="input-item" v-model="newProduct.product_name"></el-input>
                    </el-form-item>
                    <el-form-item class="input-father" label="收益率">
                        <el-input class="input-item" v-model="newProduct.product_rate"></el-input>
                    </el-form-item>
                    <el-form-item class="input-father" label="产品周期">
                        <el-input class="input-item" v-model="newProduct.product_trade"></el-input>
                    </el-form-item>
                    <el-form-item class="input-father" label="风险等级">
                        <el-input class="input-item" v-model="newProduct.risk_level"></el-input>
                    </el-form-item>
                    <el-form-item class="input-father" label="适合人群">
                        <el-input class="input-item" v-model="newProduct.produce"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogTagVisible = false">取 消</el-button>
                    <el-button type="primary" @click="add">确 定</el-button>
                </div>
            </el-dialog>
        </div>
        <el-button type="primary" @click="dialogTagVisible = true" id="newUser-add" size="medium" icon="el-icon-edit">新增</el-button>
    </div>
</template>

<script>
    import productApi from "@/apis/productApi";
    export default {
        methods: {
            handleClick(row,flag) {
                this.product = row;
                this.dialogFormVisible = true;
                localStorage.setItem('name',row.product_name);
                if (flag == '查看') {
                    this.form = true;
                } else {
                    this.form = false;
                    let edit = document.getElementById("edit");
                    let that = this;
                    edit.onclick = function () {
                        let name = localStorage.getItem("name");
                        console.log(that.product);
                        productApi.productEdit(name,that.product,(cb) => {
                            let msg = cb.msg;
                            that.$message(msg);
                        });
                    }
                }
            },
            list(){
                productApi.productList(data => {
                    this.productList = data;
                    this.loading = false;
                });
            },
            add(){
                productApi.productAdd(this.newProduct,(cb) => {
                    this.$message(cb.msg);
                    this.dialogTagVisible = false;
                })
            }
        },
        data() {
            return {
                productList: [],
                dialogFormVisible: false,
                dialogTagVisible: false,
                labelPosition: 'right',
                form : '',
                product : '',
                loading : true,
                newProduct : {
                    product_name : '',
                    product_rate : '',
                    product_trade : '',
                    risk_level : '',
                    produce : ''
                }
            }
        },
        mounted(){
            this.list();
        }
    }
</script>
<style scoped>
    #newUser{
        margin: 20px;
    }
    #newUser-add{
        margin-top: 12px;
    }
</style>