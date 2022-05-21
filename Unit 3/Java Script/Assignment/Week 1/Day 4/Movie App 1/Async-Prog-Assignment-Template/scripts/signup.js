document.querySelector("form").addEventListener("submit", detailSub);

var detailArr = JSON.parse(localStorage.getItem("detailList")) || [];

function detailSub(){
    event.preventDefault();

    let detailobj = {
        name: document.getElementById("name").value,
        number: document.getElementById("number").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    }

    if(document.getElementById("name").value != null && document.getElementById("number").value != null && document.getElementById("email").value && document.getElementById("password").value !=null){
        detailArr.push(detailobj);
        localStorage.setItem("detailList",JSON.stringify(detailArr))
        window.location.href = "login.html"
    }
    else{
        alert("Please fill all the values");
    }

}