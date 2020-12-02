import {baseUrl} from "@/commons/config";
const infoApi = `${baseUrl}/news/list`;
const infoAddApi = `${baseUrl}/news/add`;
const infoEditApi = `${baseUrl}/news/edit`;
export default {
    getNewsList(cb){
        fetch(infoApi , {
            method : "Get" ,
            headers : {
                "Content-Type":"application/json;charset=UTF-8"
            }
        }).then(res => res.json().then(cb));
    },
    getNewsAdd(info,cb){
        fetch(infoAddApi , {
            method : "POST",
            headers : {
                "Content-Type":"application/json;charset=UTF-8"
            },
            body : JSON.stringify({
                new1 : info.new1 ,
                new2 : info.new2
            })
        }).then(res => res.json().then(cb));
    },
    getNewsEdit(new1,new2,info,cb){
        fetch(infoEditApi , {
            method : "POST",
            headers : {
                "Content-Type":"application/json;charset=UTF-8"
            },
            body : JSON.stringify({
                new1 : info.new1 ,
                new2 : info.new2 ,
                info : info ,
            })
        }).then(res => res.json().then(cb));
    }
}
