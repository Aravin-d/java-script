const myBtn = document.getElementById("myBtn");
const myImg = document.getElementById("myImg");

myBtn.addEventListener("click", function(event){

    if(myImg.style.display === "none"){
        myImg.style.display = "block";
        myBtn.textContent = "Hide";
    }
    else{
        myImg.style.display = "none";
        myBtn.textContent = "show";
    }

});

