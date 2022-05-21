let stuArr = JSON.parse(localStorage.getItem("stuList"));
    console.log(stuArr);

    function displayData(data) {
        document.querySelector("tbody").innerHTML = "";
        data.forEach(function (el, index) {
            var tr = document.createElement("tr");

            var td1 = document.createElement("td");
            td1.innerText = el.name;
            console.log(el.name);

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

            var td6 = document.createElement("td");
            td6.innerText = "Remove";
            td6.style.color = "red";
            td6.style.cursor = "pointer";
            td6.addEventListener("click", function () {
                removefun(el, index);
            });


            tr.append(td1, td2, td3, td4, td5, td6);

            document.querySelector("tbody").append(tr);
        });

        let trashArr = JSON.parse(localStorage.getItem("trash")) || [];

        function removefun(el, index) {
            trashArr.push(el);
            localStorage.setItem("trash", JSON.stringify(trashArr));
            stuArr.splice(index, 1);
            localStorage.setItem("stuList", JSON.stringify(stuArr));
            window.location.reload();
        }
    }


    displayData(stuArr);