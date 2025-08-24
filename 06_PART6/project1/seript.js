// | Location         | Works Immediately? | Needs DOM Ready Check?     | Recommended             |
// | ---------------- | ------------------ | -------------------------- | ----------------------- |
// | Before `</body>` | ✅ Yes              | ❌ No                       | ✅ Yes                   |
// | Inside `<head>`  | ❌ No               | ✅ Yes (`DOMContentLoaded`) | ⚠️ Only if needed early |

// generate random hex colors

const randomColor = function () {
  const hex = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// only this randomColor gives the whole function not run it
// console.log(randomColor());
let intervalId;
const startChangingColor = function () {
  // intervalId= setInterval(changeBgColor,1000)
  // good practice
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
  // document.querySelector('body').style.backgroundColor =randomColor();
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  // more professional
  intervalId = null;
  document.body.style.backgroundColor = "white";
};

// document.querySelector('#stop').addEventListener('click', startChangingColor());
// ❌ This calls the function immediately as the JS file runs.
// It runs before any click happens.

//  This is the correct way to assign event listeners.
document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
