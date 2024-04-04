// Example

// CREATE AN ELEMENT
const newListItem = document.createElement("li");

// add attribute
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";
newListItem.style.fontSize = "2rem";

// APPEND TO DOM
//document.body.append(newListItem);

//APPEND TO FRUITS BOX
//document.getElementById("fruits").prepend(newListItem);

//APPEND BETWEEN APPLE AND ORANGE

// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem, orange);

// BEFORE BANANA
const banana =  document.getElementById("banana");
document.getElementById("fruits").insertBefore(newListItem, banana)