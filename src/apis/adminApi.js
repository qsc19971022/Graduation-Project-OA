import {baseUrl} from "@/commons/config";
const adminListUrL = `${baseUrl}/admin/list`;
const adminAdd = `${baseUrl}/admin/add`;
const delAdmin = `${baseUrl}/admin/del`;
export default {
    getAdminList(cb){
        fetch(adminListUrL ,{
            method : 'POST' ,
            headers : {
                "Content-Type":"application/json;charset=UTF-8"
            }
        }).then(res => res.json().then(cb));
    },
    setAdmin(name,user,pwd,cb){
        fetch(adminAdd , {
            method : "POST" ,
            headers : {
                "Content-Type":"application/json;charset=UTF-8"
            },
            body : JSON.stringify({
                name : name,
                user : user,
                pwd : pwd
            })
        }).then(res => res.json().then(cb));
    },
    delAdmin(user,cb){
        fetch(delAdmin , {
            method : "POST" ,
            headers : {
                "Content-Type":"application/json;charset=UTF-8"
            },
            body : JSON.stringify({
                user
            })
        }).then(res => res.json().then(cb));
    }
}