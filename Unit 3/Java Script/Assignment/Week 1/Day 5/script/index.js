document.querySelector("#form").addEventListener("submit",stuDetail);

    stuArr = JSON.parse(localStorage.getItem("stuList")) || [];

    function stuDetail(){
        event.preventDefault();

        let stuObj = {
            name: form.name.value,
            course: form.course.value,
            unit: form.unit.value,
            image: form.imageurl.value,
            batch: form.batch.value,
        };
        
        stuArr.push(stuObj);
        localStorage.setItem("stuList",JSON.stringify(stuArr));
    }
