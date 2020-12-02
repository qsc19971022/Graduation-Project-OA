<template>
    <div id="index">
        <div id="index-left">
            <el-row class="tac">
                <el-col :span="12">
                    <h2 style="text-align: center;background-color: #409EFF;color: white;padding-top: 20px;box-sizing: border-box">钱夕夕</h2>
                    <el-menu
                            default-active="1"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                            background-color="#409EFF"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                        <el-menu-item @click="jump('home','首页')" index="1">
                            <i class="el-icon-s-home"></i>
                            <span slot="title">首页</span>
                        </el-menu-item>
                        <el-menu-item @click="jump('customer','用户管理')" index="2">
                            <i class="el-icon-user"></i>
                            <span slot="title">用户管理</span>
                        </el-menu-item>
                        <el-menu-item  @click="jump('newUser','新人礼包')" index="3">
                            <i class="el-icon-s-cooperation"></i>
                            <span slot="title">新人礼包</span>
                        </el-menu-item>
                        <el-menu-item @click="jump('info','资讯管理')" index="4">
                            <i class="el-icon-reading"></i>
                            <span slot="title">资讯管理</span>
                        </el-menu-item>
                        <el-menu-item @click="jump('admin','账号管理')" index="5">
                            <i class="el-icon-s-custom"></i>
                            <span slot="title">账户管理</span>
                        </el-menu-item>
                        <el-menu-item @click="jump('product','产品管理')" index="6">
                            <i class="el-icon-star-off"></i>
                            <span slot="title">产品管理</span>
                        </el-menu-item>
                        <el-menu-item index="7">
                            <i class="el-icon-setting"></i>
                            <span slot="title">系统设置</span>
                        </el-menu-item>
                        <el-menu-item @click="exit" index="8">
                            <i class="el-icon-switch-button"></i>
                            <span slot="title">退出</span>
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </div>
        <div id="index-right">
            <el-page-header @back="goBack" class="index-right-header" :content="title"></el-page-header>
            <router-view></router-view>
        </div>
        <div class="clear"></div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                title : '首页'
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            goBack() {
                console.log('go back');
            },
            jump(route,title){
                let user = localStorage.getItem("user");
                if (user){
                    let router = '/'+route;
                    this.$router.push(router);
                    this.title = title;
                }else {
                    this.$message('登录信息已过期，请重新登录');
                    this.$router.push('/login');
                }

            },
            exit(){
                window.localStorage.clear();
                this.$message('账号已退出');
                this.$router.push('/login');
            }
        },
        mounted(){
            document.body.style.backgroundColor="#fff";
            let conheight  = document.getElementsByClassName("el-menu-vertical-demo")[0];
            conheight.height=window.innerHeight+'px';
        }
    }
</script>

<style scoped>
#index{
    width: 100%;
    height: 100vh;
}
#index-left{
    width: 24%;
    float: left;
}
.el-menu-vertical-demo{
    height: 100vh;
    width: 100%;
    padding-top: 30px;
    box-sizing: border-box;
}
#index-right{
    width: 76%;
    float: right;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    height: 700px;
    margin-top: 50px;
    position: relative;
    left: -80px;
}
.index-right-header{
    padding: 20px 20px;
    box-sizing: border-box;
    border-bottom: 2px solid #eee;
}
</style>