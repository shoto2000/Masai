let user = JSON.parse(localStorage.getItem("user"));

  let purchase = JSON.parse(localStorage.getItem("purchase"));

  let walletA = document.querySelector("#wallet_balance");

  let container = document.querySelector("#purchased_vouchers");

  function appendWallet(){
    let h3 = document.createElement("h3");
    h3.innerHTML = user.wallet;
    h3.setAttribute("id","balance")

    walletA.append(h3);
  }

  appendWallet();

  function append(data){
    data.forEach(function(el){
      let box = document.createElement("div");
      box.setAttribute("class","voucher");

      let image = document.createElement("img");
      image.src = el.image;

      let name = document.createElement("h3");
      name.innerText = el.name;

      let price = document.createElement("h3");
      price.innerText = el.price;

      box.append(image,name,price);

      container.append(box);
    })
  }

  append(purchase);