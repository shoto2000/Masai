let c18 = 0;
    let c19 = 0;
    let c20 = 0;
    function countBatch(data){
        data.forEach(function(el){

            if(el.batch == "Web 18"){
                c18++;
            }
            else if(el.batch == "Web 19"){
                c19++;
            }
            else{
                c20++;
            }

        })
        document.querySelector("#bnav1").innerText = "Web 18 - "+(c18);
        document.querySelector("#bnav2").innerText = "Web 19 - "+(c19);
        document.querySelector("#bnav3").innerText = "Web 20 - "+(c20);
    }

    countBatch(stuArr);