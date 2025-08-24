let myName ='siddhu    ';
console.log(myName.length);

// console.log(myName.truelength);


let myhero =['a','b']
let heroPower ={
    a:'water',
    b:'fire',
    getSpiderPower:function(){
        console.log(`Spider power is ${this.a}`);
    }
}

// factory function : by default function to create 
// like Object use for creating new Object 

// we know every thing is a a object in js 
// if we want to create a property which i can use any ehere
Object.prototype.siddhu = function(){
    console.log(`siddhu is present in all objects`);
}
heroPower.siddhu()
myhero.siddhu()// wao in my array have function siddhu
// object is middle of all things

// now check if i only add a prooto in arr is object inherit it
Array.prototype.haySiddhu =function(){
    console.log(`siddhu say hii`);
}
myhero.haySiddhu()//ok it works in array
heroPower.haySiddhu() //heroPower.haySiddhu is not a function


// inheritance

const user={
    name:'siddhu',
    mail:'a.google.com'
}
const Teacher ={
    makeVIdeo: true
}
const TeachingSupport ={
    isAvailable : false
}
const TASupport ={
    makeAssignment : 'JS assignment',
    __proto__:TeachingSupport//can do in different way
}
Teacher.__proto__ =user;
// "Teacher inherits from user."
// If JavaScript cannot find a property in Teacher,
// it goes and looks inside user.

// Teacher → user → Object.prototype → null
// __proto__ is a reference to the object's prototype. It lets one object inherit properties/methods from another object.


// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)
// Set the prototype of childObject to be parentObject.
// Set the prototype of TeachingSupport to be Teacher.
// if dont found in child go to parent for prototype