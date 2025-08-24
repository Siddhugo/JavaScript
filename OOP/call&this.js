// 8hr 4min
// example

function SetUserName(username){
    //complex BD calls 
    this.username = username;
    console.log("called");
    
    // return username;
}

function createUser(username,email,passwd) {
        // SetUserName(username);
        SetUserName.call(this,username)//alone this don't work
        // because it store the context in it's own "this" and it get removed after execution completerd so we have to store this execution in other place
        // we solve or give the above function(setusername) current function(create user) "this" now the function SetuserName store the context in createUser's "this" key

        // ** wao now this good 
        this.email =email;
        this.passwd =passwd;
}

const chai = new createUser("chai","chai@facebook",'123456');
console.log(chai);//=>createUser { email: 'chai@facebook', passwd: '123456' }
// why username not comming :=> beacause the function call (actually call hapens but after execytion the execution context get removed from the stack so we loos it's all variable so we dont get tha value of username  )doe's not happens just give reference although we give the parenthisis (); to call it inside the function do this :-- we have to call it exlesitely ".call" [it holds the refrence after execution contedxt getr deleted we also get this we don't loos this username]

 