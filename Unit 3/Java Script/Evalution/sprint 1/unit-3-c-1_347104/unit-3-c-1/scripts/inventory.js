let proArr = JSON.parse(localStorage.getItem("products"));

function display(data){
    data.forEach(function(el,index){
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.image;

        let type = document.createElement("h3");
        type.innerText = el.type;

        let desc = document.createElement("h3");
        desc.innerText = el.desc;

        let price = document.createElement("h3");
        price.innerText = +(el.price);

        let button = document.createElement("button");
        button.setAttribute("id","remove_product");
        button.innerText = "Remove"
        button.addEventListener("click",function(){
            removeFun(el,index);
        })

        div.append(img,type,desc,price,button);

        document.querySelector("#all_products").append(div);
    })
}

display(proArr);

function showIndex(){
    window.location.href = "index.html";
}

function removeFun(el,index){
    proArr.splice(index,1);
    localStorage.setItem("products",JSON.stringify(proArr));
    window.location.reload();
}