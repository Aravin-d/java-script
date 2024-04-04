//idselector returns an element or null

// const heading = document.getElementById("my-heading");
// heading.style.backgroundColor = "green";
// heading.style.textAlign = "center";

//classselector returns html collection

// const fruits = document.getElementsByClassName("fruits");
// console.log(fruits);
// fruits[0].style.backgroundColor = "yellow";

//tagname selector returns html collection

// const h4Elements = document.getElementsByTagName("h4");
// const listItems = document.getElementsByTagName("li");

// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor = "yellow";
// }

// for(let listItem of listItems){
//     listItem.style.backgroundColor = "lightgreen";
// }

// Array.from(listItems).forEach(listItem => {
//     listItem.style.color = "white";
// })


//query selector retuens first matching element or null works like classname selector. it can select a tag or a classname

// const element =  document.querySelector(".fruits");
// element.style.backgroundColor = "yellow";

//query selector all returns a nodelist. a nodelist is like html collection but it has buil-in-methods works like queryselector;

const fruits = document.querySelectorAll(".fruits");
console.log(fruits);

fruits.forEach( fruit => {
    fruit.style.backgroundColor = "yellow";
})