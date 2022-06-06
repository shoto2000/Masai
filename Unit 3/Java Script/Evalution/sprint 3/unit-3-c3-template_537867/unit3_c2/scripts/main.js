document.querySelector("form").addEventListener("submit",signUp);

  function signUp(){
    event.preventDefault();

    let userObj = {
      name: document.querySelector("#name").value,
      email: document.querySelector("#email").value,
      address: document.querySelector("#address").value,
      wallet: +document.querySelector("#amount").value,
    }

    localStorage.setItem("user",JSON.stringify(userObj));
    console.log(userObj);

    let purchase = [];
    localStorage.setItem("purchase",JSON.stringify(purchase));

    document.querySelector("form").reset();
  }