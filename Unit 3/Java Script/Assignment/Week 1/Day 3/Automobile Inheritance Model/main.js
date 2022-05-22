function product(name){
    this.name = name;
    this.brand="TATA-R&D";
    this.color="red";
    this.type="4*4";
    this.engine="toyota";
    this.dealer="LEO motors"
}
let one = new product("XUV500");
console.log(one);

const products={
    name: "Scorpio",
    brand:"TATA-R&D",
    color:"red",
    type:"4*4",
    engine:"toyota",
    seller:"LEO motors",

};

let two = Object.create(products);
two.name = "Thar";
console.log(two)