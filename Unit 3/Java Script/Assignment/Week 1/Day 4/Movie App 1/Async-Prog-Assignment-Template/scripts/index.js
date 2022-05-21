let arr = [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GDGkkIzY4geIv5DllF2D9AHaDt%26pid%3DApi&f=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ED3O2gzsG1tbDK8axbKusgHaEo%26pid%3DApi&f=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.jsiaZlS4s12vrcDW1HuDgAHaEK%26pid%3DApi&f=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.R6PtllEUNDZXnx3dk46HlAHaDZ%26pid%3DApi&f=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.9qLOOhfegVK8R6y8qJGrcQHaED%26pid%3DApi&f=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.c9LGDyOpDmPHN2WA_0g6SgHaEK%26pid%3DApi&f=1"
]

localStorage.setItem("movieImg", JSON.stringify(arr));

let images = JSON.parse(localStorage.getItem("movieImg"));
console.log(images)


let i = 0;
let id;
let container = document.getElementById("slideshow");

id = setInterval(function () {
    if(i === images.length){
        i = 0;
    }
    container.innerHTML = null
    let image = images[i];
    console.log(image);

    let img = document.createElement("img");

    img.src = image;

    container.append(img);

    i++;

}, 3000);
