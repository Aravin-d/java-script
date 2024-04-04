let buttons = document.querySelectorAll(".myBtns");

// buttons.forEach(button => {
//     button.style.backgroundColor = "lightgreen";
//     button.textContent = "🙂"
// })



// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.style.backgroundColor = "tomato";
//     })
// })


// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
//     })
// })

// buttons.forEach(button => {
//     button.addEventListener("mouseleave", event => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
//     })
// })

// const newBtn = document.createElement("button"); //step 1 create element
// newBtn.textContent = "Button5"; //step 2 add properties and attributes
// newBtn.classList = "myBtns"; // step2
// document.body.appendChild(newBtn); // step 3 append to parent;


buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
    })
})