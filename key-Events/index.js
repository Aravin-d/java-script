const myH1 = document.getElementById("myH1");
document.addEventListener("keypress", function(event){
    console.log(event);
    let key = event.key;
    myH1.textContent = key;
})