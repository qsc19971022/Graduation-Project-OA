<template>
   <div id="customer">
       <el-table
               :data="customerList"
               border
               v-loading="loading"
               row-click=“handleEdit”
               style="width: 100%">
           <el-table-column
                   fixed
                   prop="user"
                   label="用户名"
                   width="150">
           </el-table-column>
           <el-table-column
                   prop="pwd"
                   label="密码"
                   width="120">
           </el-table-column>
           <el-table-column
                   prop="money"
                   label="总资产"
                   width="120">
           </el-table-column>
           <el-table-column
                   prop="name"
                   label="用户名"
                   width="120">
           </el-table-column>
           <el-table-column
                   prop="user_money"
                   label="余额宝"
                   width="300">
           </el-table-column>
           <el-table-column
                   prop="paypwd"
                   label="支付密码"
                   width="120">
           </el-table-column>
           <el-table-column
                   fixed="right"
                   label="操作"
                   width="160">
               <template slot-scope="scope">
                   <el-button @click="handleClick(scope.row,'查看')" type="text" size="small">详细查看</el-button>
                   <el-button @click="handleClick(scope.row,'编辑')" type="text" size="small">编辑</el-button>
               </template>
           </el-table-column>
       </el-table>
       <div id="customer-dialog">
           <el-dialog title="用户信息"  :visible.sync="dialogFormVisible">
               <el-form :label-position="labelPosition" :disabled = "form" label-width="80px" :model="customer">
                   <el-form-item class="input-father" label="用户名">
                       <el-input class="input-item" v-model="customer.user"></el-input>
                   </el-form-item>
                   <el-form-item class="input-father" label="密码">
                       <el-input class="input-item" v-model="customer.pwd"></el-input>
                   </el-form-item>
                   <el-form-item class="input-father" label="账户余额">
                       <el-input class="input-item" v-model="customer.money"></el-input>
                   </el-form-item>
                   <el-form-item class="input-father" label="余额宝">
                       <el-input class="input-item" v-model="customer.user_money"></el-input>
                   </el-form-item>
               </el-form>
               <div slot="footer" class="dialog-footer">
                   <el-button @click="dialogFormVisible = false">取 消</el-button>
                   <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
               </div>
           </el-dialog>
       </div>
   </div>
</template>

<script>
    import customerApi from "@/apis/customerApi";
    export default {
        methods: {
            handleClick(row,flag) {
                if (flag == '查看') {
                    this.customer = row;
                    this.dialogFormVisible = true;
                } else {
                    this.customer = row;
                    this.dialogFormVisible = true;
                    this.form = false;
                }
            },
        },
        data() {
            return {
                customerList: [],
                dialogFormVisible: false,
                labelPosition: 'right',
                customer:'',
                form : true,
                loading: true
            }
        },
        mounted(){
                customerApi.customerList(cb => {
                    this.customerList = cb;
                    this.loading = false;
                })
        }
    }
</script>
<style scoped>
    #customer{
        margin: 20px;
    }
    .input-item{
        width: 260px;
    }
    .input-father{}
</style>