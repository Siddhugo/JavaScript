function generatenum(){
    const a = Math.floor(Math.random()*10+1);
    return a;
}

const form = document.querySelector('form');
// console.log(form);
let attampsval=10;
let attamps =document.querySelector('#attamps')
attamps.innerHTML =attampsval;
const num = generatenum();
console.log(num);
form.addEventListener('submit',function(e){
    
    e.preventDefault();
    const givennum = parseInt(document.querySelector('#num').value);
    console.log(givennum);
    if(givennum > 10 || givennum < 1 ){
        document.querySelector('h3').style.color ='#ff0000';
    }
    else{
    document.querySelector('body').style.color ='white';
    }
    const result =document.querySelector('#show-result');
    console.log(result);
    if(givennum === num){
        result.style.color='#00ff00';
        result.innerHTML ='Right Answer!!';
    }
    else{
         result.style.color='#ff0000';
         result.innerHTML ='Wrong Answer!!';
         attampsval--; 
         attamps.innerHTML =attampsval;
         if (attampsval <= 0) {
    result.innerHTML = 'Restarting Game...';

    // Do any work you need here before the page reloads
    // For example: showing an animation, saving data, etc.

    setTimeout(() => {
        location.reload(); // Refresh the page after 1 second
    }, 1000); // 1000 milliseconds = 1 second
}
    }
}) 


