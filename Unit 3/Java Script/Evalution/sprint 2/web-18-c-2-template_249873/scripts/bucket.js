// On clicking remove button the item should be removed from DOM as well as localstorage.

let coffee = JSON.parse(localStorage.getItem("coffee"));
let totalamount = document.querySelector("#total_amount");
let bucket = document.querySelector("#bucket");

console.log(coffee);

let out = coffee.reduce(function (a, el) {
  return a + el.price;
}, 0)

console.log(out);

totalamount.append("Total: ",out)

append(coffee);

function append(data){
  data.forEach(function(el,i){
    let box = document.createElement("div");

  let image = document.createElement("img");
  image.src = el.image;

  let name = document.createElement("h3");
  name.innerText = el.title;

  let price = document.createElement("p");
  price.innerText = el.price;

  let button = document.createElement("button");
  button.innerText = "Remove";
  button.setAttribute("id","remove_coffee")
  button.addEventListener("click",function(){
    remove(el,i);
  })

  box.append(image,name,price,button);

  bucket.append(box);
  })
}

function remove(el,i){
  coffee.splice(i,1);

  localStorage.setItem("coffee",JSON.stringify(coffee));
  window.location.reload();
}

function check(){
  window.location.href = "checkout.html";
}


