const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    // Prevent form from submitting & refreshing the page
    e.preventDefault();

    // Convert input values (string → integer)
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#result');

    // Validation for height
    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please enter a valid height: ${height}`;
    }
    // Validation for weight
    else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please enter a valid weight: ${weight}`;
    }
    // If both inputs are valid → calculate BMI
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<h1>BMI: ${bmi}</h1>`;
    }
});
