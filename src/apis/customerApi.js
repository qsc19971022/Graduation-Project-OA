import {baseUrl} from '../commons/config';
const customerUrl = `${baseUrl}/admin/customer`;
export default {
    customerList(cb){
        fetch(customerUrl , {
            method:"POST",
            headers:{
                "Content-Type":"application/json;charset=UTF-8"
            },
        }).then(res=>res.json().then(cb));
    }
}