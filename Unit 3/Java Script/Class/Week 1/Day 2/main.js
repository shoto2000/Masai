// function func(){
//     console.log(this);
// }

// func();


// let obj = {
//     team : "csk",
//     result : "out",
//     print : function(){
//         console.log(this);
//     },
// };

// obj.print();

// this will always refer to an object
// this will refer either to global or window object or custom object which you created
// this always refer to its parent object

// function nikeproduct(n,b,p){
//     let obj = {}
//         obj.name = n;
//         obj.brand = b;
//         obj.price = p;
        
//         return obj;
// }

// console.log(nikeproduct("shoe","nike",100));

// function NikeProduct(n,b,p){
//         this.name = n;
//         this.brand = b;
//         this.price = p;
//         this.print = function(){
//             console.log(this)
//         }
// }

// let p1 = new NikeProduct("shoe","nike",1000);
// let p2 = new NikeProduct("sneakers","nike",2000);
// p2.print();
// p1.print();
// console.log(p1);
// console.log(p1.brand)

// What does New do?
// it returns the object and points this to the newly creeated object

// function product(name,brand,price){
//     this.name = name;
//     this.brand = brand;
//     this.price = price;
// }

// mould for creating object
// blueprint for object

// let arr = [];

// function submitProduct(e){
//     event.preventDefault();
//     let form = document.getElementById("products");
//     let name = form.name.value;
//     let brand = form.brand.value;
//     let price = form.price.value;

//     let p = new product(name,brand,price);
//     arr.push(p);

//     console.log(arr);
// }

// -----------------CALL, APPLY, BIND -------------------------

let bedroom1 = {
    name: "bedroom",
    purpose: "sleep",
    // food: function(food){
    //     console.log(`Serving ${food} in ${this.name}`); //String literal
    // },
};


let storeRoom = {
    name: "Store Room",
    purpose: "Store",
};

let livingRoom = {
    name: "Living Room",
    purpose: "Rest"
}

function food(food){
    console.log(`Serving ${food} in ${this.name}`)
};

// food.call(bedroom1, "Pizza");
// food.call(storeRoom, "Biryani");
// food.call(livingRoom, "Pasta");

// food.apply(bedroom1, ["Pizza"]);
// food.apply(storeRoom, ["Biryani"]);
// food.apply(livingRoom, ["Pasta"]);

let f1 = food.bind(bedroom1, "Pizza");
let f2 = food.bind(storeRoom, "Biryani");
let f3 = food.bind(livingRoom, "Pasta");

f1();
// bedroom1.food("Pizza");