const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDislay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }catch(err){
        display.value = "Error";
    } 
}