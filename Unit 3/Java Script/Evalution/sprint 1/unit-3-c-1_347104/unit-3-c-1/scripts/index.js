//store the products array in localstorage as "products"
document.querySelector("#products").addEventListener("submit",proDetail);

let proArr = JSON.parse(localStorage.getItem("products")) || [];


function proDetail(){
    event.preventDefault();
    if(products.type.value == "" || products.desc.value == "" || products.price.value == "" || products.image.value == ""){
        alert("please enter all the details");
    }
    else{
        let proObj = {
            type : products.type.value,
            desc : products.desc.value,
            price : products.price.value,
            image : products.image.value,
        };
    
        
        
        document.querySelector("#products").reset();
        
    
        proArr.push(proObj);
        localStorage.setItem("products",JSON.stringify(proArr));
    }    
}

function showPro(){
    window.location.href = "inventory.html"
}