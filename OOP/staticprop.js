class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
// any child or class can't inherit also ca
    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
console.log(hitesh.createId())//error for static function

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone.createId());