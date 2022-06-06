let user = JSON.parse(localStorage.getItem("user"));

let walletA = document.querySelector("#wallet_balance");

let container = document.querySelector("#voucher_list");

function appendWallet() {
    let h3 = document.createElement("h3");
    h3.innerHTML = user.wallet;

    walletA.append(h3);
}

appendWallet();

let url = "https://masai-vouchers-api.herokuapp.com/api/vouchers";

async function Voucher() {
    let res = await fetch(url);

    let data = await res.json();

    append(data[0].vouchers);
}

Voucher();

function append(data) {
    data.forEach(function (el) {
        let box = document.createElement("div");
        box.setAttribute("class", "voucher");

        let image = document.createElement("img");
        image.src = el.image;

        let name = document.createElement("h3");
        name.innerText = el.name;

        let price = document.createElement("h3");
        price.innerText = el.price;

        let button = document.createElement("button");
        button.innerText = "Buy"
        button.setAttribute("class", "buy_voucher");
        button.addEventListener("click", function () {
            buyVoucher(el)
        })

        box.append(image, name, price, button);

        container.append(box);
    })
}

let purchaseArr = JSON.parse(localStorage.getItem("purchase")) || [];

function buyVoucher(el) {
    if (el.price <= user.wallet) {
        alert("Hurray! purchase successful");
        user.wallet = user.wallet - el.price;

        localStorage.setItem("user", JSON.stringify(user));

        purchaseArr.push(el);

        localStorage.setItem("purchase", JSON.stringify(purchaseArr));
    }
    else {
        alert("Sorry! insufficient balance");
    }
    window.location.reload();
}
