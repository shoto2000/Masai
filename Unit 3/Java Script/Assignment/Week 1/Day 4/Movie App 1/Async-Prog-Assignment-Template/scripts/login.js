document.querySelector("form").addEventListener("submit", checkSub);

let detailArr = JSON.parse(localStorage.getItem("detailList"));

function checkSub(){
    event.preventDefault();

    checkArr = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    }

    let count = 0;

    detailArr.forEach(function(el){
        if(el.email == checkArr.email && el.password == checkArr.password){
            count++
        }
    });

    if(count == 0){
        alert("invalid Credentials");
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }
    else{
        window.location.href = "index.html";
    }
}