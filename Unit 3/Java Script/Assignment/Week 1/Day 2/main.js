function product(name,category,image,price,gender){
    this.name = name;
    this.category = category;
    this.image = image;
    this.price = price;
    this.gender = gender;
}

let arr = [];

function submitProduct(e){
    event.preventDefault();
    let form = document.getElementById("form");
    let name = form.name.value;
    let category = form.category.value;
    let image = form.image.value;
    let price = form.price.value;
    let gender = form.gender.value;

    let p = new product(name,category,image,price,gender);
    arr.push(p);

    localStorage.setItem("products",JSON.stringify(arr));
}