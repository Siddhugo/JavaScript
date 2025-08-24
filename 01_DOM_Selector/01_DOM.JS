// **************** DOM SELECTORS ****************

// Document Object Model (DOM)
// console.dir(document) or console.log(window.document)
// console.log(window)

// Example:
// console.log(document.baseURI) 
// -> gives base URL of current page
// console.log(document.links) 
// -> returns all <a> links (HTMLCollection like array)

// Example page: https://en.wikipedia.org/wiki/Brendan_Eich
// document.getElementById("firstHeading") 
// -> selects <h1 id="firstHeading">
// document.getElementById("firstHeading").innerHTML = "<h1>Siddhu Boss</h1>"
// -> replaces the heading

// **************** Attribute Access ****************

// let title = document.getElementById("titel");
// title.id           // "titel"
// title.getAttribute("id") // "titel"
// title.className    // "heading"
// title.setAttribute("class", "test") 
// -> overrides the class with "test" (not adds extra)

// **************** Difference: innerText vs innerHTML vs textContent ****************
// Example:
// <h1 id="titel" class="heading"> 
//   Dom Learning on Chai or code <span style="display:none;">test text</span> 
// </h1>

// titel.innerText    -> "Dom Learning on Chai or code"
// titel.innerHTML    -> "Dom Learning on Chai or code <span style="display:none;">test text</span>"
// titel.textContent  -> "Dom Learning on Chai or code test text"

// **************** querySelector / querySelectorAll ****************

// querySelector returns the *first* matching element
// querySelectorAll returns *all* matches (NodeList)

// document.querySelector("h2")
// -> <h2>Lorem, ipsum dolor.</h2>

// document.querySelector("#titel")
// -> <h1 id="titel" class="heading">...</h1>

// document.querySelector(".heading")
// -> same as above

// document.querySelector('input[type="password"]')
// -> selects first password input if available

// Example with nested selection:
const myul = document.querySelector("ul");
const firstLi = myul.querySelector("li");
firstLi.style.backgroundColor = "green";
firstLi.innerText = "five";

// **************** NodeList vs HTMLCollection ****************

// querySelectorAll() -> NodeList (has forEach loop)
// Example:
const liList = document.querySelectorAll("li");
liList[0].style.color = "green"; // first element
liList.forEach(function (li) {
  li.style.backgroundColor = "yellow";
});

// getElementsByClassName() -> HTMLCollection (live collection, no forEach)
// Example:
const tempClassList = document.getElementsByClassName("list-item");
// Need to convert to array:
const arr = Array.from(tempClassList);
arr.forEach(function (li) {
  li.style.color = "orange";
  li.style.fontWeight = "bold";
});
