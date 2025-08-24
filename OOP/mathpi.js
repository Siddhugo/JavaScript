const descripter= Object.getOwnPropertyDescriptor(Math,'PI')
console.log(Math.PI)
Math.PI =5;
console.log(Math.PI)//why it dont overwrite
console.log(descripter);
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
// we also can define object descripter

const chai ={
    name :'ginger chai',
    price : 250,
    isAvailable:true
}
console.log(Object.getOwnPropertyDescriptor(chai,'name'))
//  {
//   value: 'ginger chai',
//   writable: true,
//   enumerable: true,  // loppong happen
//   configurable: true
// }
Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: false,
    // doing it false it don't iteratable// price : 250   isAvailable : true
    // when true : name : ginger chai price : 250  isAvailable : true
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}

// price : 250
// isAvailable : true