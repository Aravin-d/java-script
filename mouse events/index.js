const myBox = document.getElementById("myBox");
const myBtn = document.getElementById("myBtn"); 

function changeColor(event){
    console.log(event);
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH 😣"
}

myBox.addEventListener("click", changeColor)

myBox.addEventListener("mouseover", function(event){
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Please dont click me";
})

myBox.addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click me 🙂";
})

myBtn.addEventListener("click", function(){
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH 😣";
})