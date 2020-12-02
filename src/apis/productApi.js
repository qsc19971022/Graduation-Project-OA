const {baseUrl} = require ('../commons/config');
const productUrl = `${baseUrl}/products/list`;
const productEditUrl = `${baseUrl}/admin/product/edit`;
const productAddUrl = `${baseUrl}/admin/product/add`;
export default {
    // 产品列表
    productList(cb){
        fetch(productUrl , {
            method:"GET",
            headers:{
                "Content-Type":"application/json;charset=UTF-8"
            },
        }).then(res=>res.json().then(cb));
    },
    // 编辑产品
    productEdit(name,product,cb) {
        fetch(productEditUrl , {
            method : "POST",
            headers : {
                "Content-Type":"application/json;charset=UTF-8"
            },
            body : JSON.stringify({
                name : name ,
                product_name : product.product_name ,
                product_rate : product.product_rate ,
                product_trade : product.product_trade ,
                risk_level : product.risk_level ,
                produce : product.produce
            })
        }).then(res => res.json().then(cb));
    },
    // 添加产品
    productAdd(product,cb) {
        fetch(productAddUrl , {
            method : "POST",
            headers : {
                "Content-Type":"application/json;charset=UTF-8"
            },
            body : JSON.stringify({
                product_name : product.product_name ,
                product_rate : product.product_rate ,
                product_trade : product.product_trade ,
                risk_level : product.risk_level ,
                produce : product.produce
                }
            )
        }).then(res => res.json().then(cb));
    }
}