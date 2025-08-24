// prototypal behaviour in javascript
// by default JS is prototypal behaviur
// prototype for anything(in website) and under that also prototype agin and again untill it get null
// ex : write this in webconsole
// const arr = [1,2,3,4]
// arr
// ctrl h for history
// https:excalidraw.com for teaching
// in JS all is object
function multipleBy5(num){
    return num*5;
}
multipleBy5.power =2
console.log(multipleBy5(3));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);//it give  empty object 

function createUser(uname,prise){
    this.uname =uname;//first this is the this inside method and after equal is the parameter 
    this.prise=prise;
}
// in console we get many prototype (which are like function ) we acess them using dot '.'
// we also can create our these type of fi=unction 
createUser.prototype.increment =function(){
    this.prise++;//it sat who call me 
}

createUser.prototype.printMe = function(){
    console.log(`prise is ${this.prise}`)
}
const chai =new createUser('chai',10);
const tea = createUser('tea',250);
// we give them same function(which is a nonpremetive data type means it give direct reference so which data it tack) means we do operation in same function 2 time
//  now so=lution comes use this 
// chai.prototype.printMe() //we don't do as like js 
// handle it in baground
chai.printMe()//it dont work because we have to tall the chai explicitly that is have some proto we do it using "new"



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


