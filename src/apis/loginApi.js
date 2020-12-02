import {baseUrl} from '../commons/config';
const loginUrl =`${baseUrl}/user/login`;
export default {
    checkLogin(user,pwd,cb){
        fetch(loginUrl , {
            method:"POST",
            headers:{
                "Content-Type":"application/json;charset=UTF-8"
            },
            body:JSON.stringify({
                user: user,
                pwd: pwd
            })
        }).then(res=>res.json().then(cb));
    }
}