// Add the coffee to local storage with key "coffee"
// https://masai-mock-api.herokuapp.com/coffee/menu

let menu = document.querySelector("#menu");
let coffee = JSON.parse(localStorage.getItem("coffee"));

async function masaiCoffee() {
  let url = `https://masai-mock-api.herokuapp.com/coffee/menu`;

  let res = await fetch(url);

  let Data = await res.json();

  console.log(Data.menu.data);
  append(Data.menu.data)

}

masaiCoffee();

function append(data){
  data.forEach(function(el){
    let box = document.createElement("div");

    let image = document.createElement("img");
    image.src = el.image;

    let name = document.createElement("h3");
    name.innerText = el.title;

    let price = document.createElement("p");
    price.innerText = el.price;

    let button = document.createElement("button");
    button.innerText = "Add to Bucket";
    button.setAttribute("id","add_to_bucket")
    button.addEventListener("click",function(){
      addToBucket(el);
    })

    box.append(image,name,price,button);

    menu.append(box);
  })
}

let arr = coffee || [];

function addToBucket(el){
  arr.push(el);

  localStorage.setItem("coffee",JSON.stringify(arr));
  window.location.reload();
}

function count(){
    console.log(coffee.length);
    let countnum = document.querySelector("#coffee_count");

    countnum.append(coffee.length)
}

count();