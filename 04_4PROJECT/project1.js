// Select all elements with class 'box'
const boxes = document.querySelectorAll('.box');
console.log(boxes);

// Select body element (to change background color later)
const body = document.querySelector('body');

// Loop through all boxes
boxes.forEach(function (box) {
    // Add an event listener to each box
    // Here we are using "mouseover" → event fires when mouse hovers over the element
    box.addEventListener('mouseover', function (e) {
        console.log(e);          // Logs the entire event object
        console.log(e.target);   // Logs the exact element being hovered

        // Reset text color before applying background
        body.style.color = 'black';

        // Instead of multiple if statements, use switch
        // Compare against e.target.id (the ID of the hovered element)
        switch (e.target.id) {
            case 'red':
                body.style.backgroundColor = e.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id;
                break;
            case 'white':
                body.style.backgroundColor = e.target.id;
                break;
            case 'green':
                body.style.backgroundColor = e.target.id;
                break;
            case 'black':
                body.style.backgroundColor = e.target.id;
                body.style.color = 'white'; // Make text visible on black
                break;
            case 'purple':
                body.style.backgroundColor = e.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id;
                break;
        }
    });
});
