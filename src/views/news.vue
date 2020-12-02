<template>
    <el-table
            :data="tableData"
            border
            style="width: 100%">
        <el-table-column
                fixed
                prop="date"
                label="日期"
                width="150">
        </el-table-column>
        <el-table-column
                prop="name"
                label="姓名"
                width="120">
        </el-table-column>
        <el-table-column
                prop="province"
                label="省份"
                width="120">
        </el-table-column>
        <el-table-column
                prop="city"
                label="市区"
                width="120">
        </el-table-column>
        <el-table-column
                prop="address"
                label="地址"
                width="300">
        </el-table-column>
        <el-table-column
                prop="zip"
                label="邮编"
                width="120">
        </el-table-column>
        <el-table-column
                fixed="right"
                label="操作"
                width="100">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
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
</template>

<script>
    export default {
        methods: {
            handleClick(row) {
                console.log(row);
            }
        },

        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1517 弄',
                    zip: 200333
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1519 弄',
                    zip: 200333
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333
                }]
            }
        }
    }
</script>