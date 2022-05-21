var value = "Tayyab"

localStorage.setItem("name2",value);

var myData = localStorage.getItem("name2");
console.log("myData",myData);

localStorage.removeItem("name2");