class User {
    constructor(email,password){
        this.email =email;
        this.password =password;
    }
    get password(){
        return this._password.toUpperCase()
        //
    }
    set password(val){
        // this.password =val;
        // RangeError: Maximum call stack size exceeded
        // because cunstructor and setter both are set the value(property) to passwd so there create arace b/w them and like recurssion we see this error for resolve this use another name
        this._password =val
    }
}

const siddhu =new User('siddhu',"abc")
console.log(siddhu.password);//ABC 
// who ask for the password he always get in upper case as we can modify
// store abc but give ABC
// getter and setter name must be same as the variable name
