
  document.querySelector("form").addEventListener("submit", function(){
    event.preventDefault();

    setTimeout(myfunction1,0)
    
    function myfunction1() {
      alert("Your order is accepted")
    }
    
    setTimeout(myfunction2,3000);
    
    function myfunction2() {
      alert("Your order is being Prepared")
    }

    setTimeout(myfunction3,8000);
    
    function myfunction3() {
      alert("Your order is being packed")
    }

    setTimeout(myfunction4,10000);
    
    function myfunction4() {
      alert("Your order is out for delivery")
    }

    setTimeout(myfunction5,12000);
    
    function myfunction5() {
      alert("Order delivered")
    }
    
  });