<template>
   <div id="home">
       <h2 class="home-admin">Dear administrator：{{this.user}}</h2>
       <h2>&nbsp;&nbsp;&nbsp;welcome your arrival，I hope you enjoy your work</h2>
   </div>
</template>

<script>
    export default {
        name: "home",
        data(){
            return{
                user:''
            }
        },
        mounted(){
            let user = localStorage.getItem("user");
            this.user = user
        }
    }
</script>

<style scoped>
.home-admin{
    color: #606266;
    margin: 30px 20px;
}
#home:nth-child(2){
    color: #909399;
    margin: 0 40px;
}
</style>