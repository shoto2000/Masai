// What is Inheritance?
// Eyes color in your family
// Height
// Baldness
// Parents Property
// HomoSapians ------->  Monkey

// Why Inheritance?

// Cat family :- Tiger, Lion, Panther, Leapord, Cheetah

// const cat = {
//     name: "cat",
//     legs: 4,
//     fur: true,
//     tail : true,
//     type: "animal",
// };

// LONG METHOD
// const tiger = {
//     name: "tiger",
//     legs: 4,
//     fur: true,
//     tail : true,
//     type: "animal",
// };

// const lion = {
//     name: "lion",
//     legs: 4,
//     fur: true,
//     tail : true,
//     type: "animal",
// };

// const tiger = Object.create(cat);
// tiger.name = "tiger";
// console.log(tiger);

// const student = {
//     batch: "web 18",
//     institute: "Masai School",
//     unit: 3,
//     course: "FSWD",
// };

// const s1 = Object.create(student,{name:{value:"sanjay"}});
// // s1.name = "sanjay";

// console.log(s1);

// -------------------------------------------------

// Nike product (brand, logo, seller) --- from flipkart

// const nike = {
//     name: "shoes",
//     brand: "nike",
//     color: "white",
//     number: 8
// }

// const nike1 = Object.create(nike,{name:{value:"sneakers"}});
// console.log(nike1);

// const nike2 = Object.create(nike,{number:{value:7}})
// console.log(nike2);

// --------------------------------------------------

// Constructor function
// Create a constructor function to create a blueprint

// function product(type){
//     this.type = type;
//     this.brand = "nike";
//     this.logo = "URL";
//     this.seller = "flipkart";
// }

// product.prototype.discount = function(){
//     console.log("50% discount");
// };

// product.prototype.changeType = function(type){
//     this.type = type;
// };

// product.prototype.price = 1000;

// Call, Apply -----> Temporary
// Prototype -------> Permanent

// function discount(){
//     console.log("50% discount");
// };

// let p1 = new product("shoes");
// let p2 = new product("sneakers");

// p1.discount = function(){
//     console.log("50% discount");
// };

// p1.discount();
// console.log(p1);
// p1.changeType("T-shirt");
// console.log(p1);
// console.log(p2)

// -----------------------------------------------

// let arr = [1,2,3];
// console.log(arr);

// let arr2 = new Array(1,2,3);
// console.log(arr2);

// function myArray(a,b,c){  NOT DYNAMIC
//     this[0] = a;
//     this[1] = b;
//     this[2] = c;
// }

// function myArray(){
//     // arguments
//     // console.log(arguments);

//     // Just remember this code(copy & paste)
//     // -------------------------------------
//     // -------------------------------------

//     Object.defineProperty(this,"length", {
//         value : 0,
//         writable: true,
//         enumerable: false,
//     });

//     // -------------------------------------
//     // -------------------------------------


//     this.length = arguments.length;

//     for(let i=0;i<arguments.length;i++){
//         this[i] = arguments[i];
//     }
// }

// let arr3 = new myArray(1,2,3,4,5,6);
// console.log(Object.values(arr3));


// myArray.prototype.pus = function(value){
//     this[this.length] = value;
//     this.length++
// }

// myArray.prototype.pup = function(){
//     delete this[this.length - 1];
//     this.length--
// }

// myArray.prototype.prnt = function(){
//     console.log(Object.values(this));
// };
// // arr3.pus(6);
// // console.log(Object.values(arr3));

// arr3.prnt();
// arr3.pup();
// arr3.pus(7);
// arr3.pus(8);
// arr3.prnt();
// console.log(Object.values(arr3));

let grandfather = {
    heigth: "tall",
}

let father = Object.create(grandfather);

let son = Object.create(father);

son.name = "Babu Bhaiya"
console.log(son);