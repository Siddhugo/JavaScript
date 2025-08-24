const user = {
  username: "siddhu",
  loginCount: 10,
  signedIn: true,
  getUserDetails: function () {
    console.log("got user details from db");
    console.log(`Username:${this.username}`);
    console.log(this);
  },
};
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);


// constructor functiopn
// const pronisOne =new Promise();//new helps to create new context

function User(username,loginCount,isLoggedIn){
    this.username =username;//first one is Users and next one is which i pass through functon
    this.isLoggedIn=isLoggedIn;
    this.loginCount=loginCount;
    // also write method here
    return this;//it return by default implecitly ; so if we don't write this return key word it don't effect 
}
// const userOne = User('siddhu',8,true);
// const userTwo =User("newuser",11,false);
// console.log(userOne);//user tow overwrite value of userOne
// but we dont expect it so we use class ,constructor  add "new" keyword 
// it provide a new instance(= empty object)
const userOne =new User('siddhu',8,true);
const userTwo =new User("newuser",11,false);
// console.log(userOne);//now probkem is resolve
// 4 step new key word =>1.new object(empty) created called instance
// 2.a constructore function is called 3.all argument(methods and properties ) in ject inside "this" key word  
console.log(userOne.constructor);//=>[Function: User]
// also instance of
console.log(userOne instanceof Object) ; //=> true
console.log(userOne instanceof User) ; //=> true

