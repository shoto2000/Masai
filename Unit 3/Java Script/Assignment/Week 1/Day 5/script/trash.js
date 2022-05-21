let stuArr = JSON.parse(localStorage.getItem("stuList"));

    let trash = JSON.parse(localStorage.getItem("trash"));

    function displayData(data) {
        document.querySelector("tbody").innerHTML = "";
        data.forEach(function (el) {
            var tr = document.createElement("tr");

            var td1 = document.createElement("td");
            td1.innerText = el.name;

            var td2 = document.createElement("td");
            td2.innerText = el.course;

            var td3 = document.createElement("td");
            td3.innerText = el.unit;

            var td4 = document.createElement("td");
            var image = document.createElement("img");
            image.src = el.image;
            td4.append(image);

            var td5 = document.createElement("td");
            td5.innerText = el.batch;

            tr.append(td1, td2, td3, td4, td5);

            document.querySelector("tbody").append(tr);
        });
    }

    displayData(trash);