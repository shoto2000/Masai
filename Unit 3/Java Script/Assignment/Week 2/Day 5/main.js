let movies = document.querySelector("#container");

    async function oneFun() {
        let name = document.querySelector("#query").value;
        document.querySelector("#movies").innerHTML = null;

        try {
            const urls = `http://www.omdbapi.com/?s=${name}&apikey=18cbb47b`;

            let res = await fetch(urls);

            let data = await res.json();

            if(data.Search == null){
                movies.innerHTML = null;
                let image = document.createElement("img");
                image.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstambrose.us%2Fwp-content%2Fuploads%2F2018%2F01%2Fpage-not-found.gif&f=1&nofb=1"

                movies.append(image);
            }
            else{
                append(data.Search);
                console.log(data.Search);
            }
            // return data.Search;

        } catch(error) {
            console.log("error: ",error);
        }

    }

    function append(data){
        movies.innerHTML = null;
        data.forEach(function(el){
            let box = document.createElement("div");
            box.addEventListener("click",function(){
                newOpen(el)
            })

            let image = document.createElement("img");
            image.src = el.Poster;

            let h3 = document.createElement("h3");
            h3.innerText = el.Title;

            let p1 = document.createElement("p");
            p1.innerText = el.Year;

            let p2 = document.createElement("p");
            p2.innerText = el.Type

            let p3 = document.createElement("p");
            p3.innerText = `IMDB Rating: ${el.imdbID}`;

            box.append(image,h3,p1,p2,p3);

            movies.append(box);
        })
    }

    function newOpen(el){
        let a = el;
        localStorage.setItem("set",JSON.stringify(a));
        window.location.href = "new.html"
    }