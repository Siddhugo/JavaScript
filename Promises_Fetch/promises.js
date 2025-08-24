/*
// FETCH
// promise is a object
// history StackoverFlow   :-  Que and BlueBird library
const promisOne = new Promise(function (resolve, reject) {
  //Do an async task
  //DB calls,Cryptograpgy,network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});
promisOne.then(function () {
  console.log("promise Consumed");
});

// *********************************
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Asinc 2 resolved");
});

// ****************************
const promisThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async 3");
    resolve({ username: "siddhu", email: "siddhu@google.com" });
  }, 1000);
});
promisThree.then(function (user) {
  console.log(user);
});

// ************************************
const promisFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "siddhu", pass: "123456" });
    } else {
      reject("ERROE: Something went Wrong");
    }
  }, 1000);
});

// const username =//we can't do this
promisFour
  .then((user) => {
    console.log(user);
    return user.username; //for geting this value use farthern ".then" it is called "CHAINING"
  })
  .then((usr) => {
    console.log(usr);
  })
  .catch(function (err) {
    console.log(err);
    // must use cache because we use reject so we must do something with that reject
  })
  .finally(function () {
    console.log("The promis is either resolve or rejected.");
  });

// ****************************************************
const promisFive = new Promise(function (reslv, rejct) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      reslv({ username: "JavaScript", pass: "123456" });
    } else {
      rejct("ERROE: JS went Wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
    // syanc awat doesn't handle error so we should add tey cache block
    try {
        const response = await promisFive;
        console.log(response); //up to this pportion works if error is false
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive();


// 

// async function getAllUsers() {
//     // erlier fetch is a library now it is a object  
//    try {
//     const response =await fetch('https://api.github.com/users/siddhugo') 
//     // console.log(response);//it works who=ne next two line is commented
//    const data = await response.json()//because it takes time so you have to add await here also
//    console.log(data);
//    } catch (error) {
//     console.log("E:",error);
//    } 
   
// }
// getAllUsers()

// this code execute first how :-  fetch logrocket"read from there"
// in js engine (we see in prev video) there have a saperate priority queue for fetch called prorityQueue,"microTaskQueue"
fetch('https://api.github.com/users/siddhugo')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
   console.log(err);
    
})

// 404 is a respons not reject(error) ; erroe comes when broser can't request
*/

// ================== PROMISE BASICS ==================
const promisOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 1 complete");
    resolve();
  }, 1000);
});

promisOne.then(function () {
  console.log("Promise 1 Consumed");
});

// ================== SHORT PROMISE ==================
new Promise(function (resolve) {
  setTimeout(function () {
    console.log("Async Task 2 complete");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise 2 Consumed");
});

// ================== PROMISE WITH DATA ==================
const promisThree = new Promise(function (resolve) {
  setTimeout(function () {
    console.log("Async Task 3");
    resolve({ username: "siddhu", email: "siddhu@google.com" });
  }, 1000);
});

promisThree.then(function (user) {
  console.log("Promise 3 resolved with:", user);
});

// ================== PROMISE WITH ERROR HANDLING ==================
const promisFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "siddhu", pass: "123456" });
    } else {
      reject("ERROR: Something went Wrong (Promise 4)");
    }
  }, 1000);
});

promisFour
  .then((user) => {
    console.log("Promise 4 resolved with:", user);
    return user.username; // chaining
  })
  .then((username) => {
    console.log("Chained username:", username);
  })
  .catch((err) => {
    console.log("Caught error:", err);
  })
  .finally(() => {
    console.log("Promise 4 finished (resolve or reject).");
  });

// ================== PROMISE WITH ASYNC/AWAIT ==================
const promisFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScript", pass: "123456" });
    } else {
      reject("ERROR: JS went Wrong (Promise 5)");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promisFive;
    console.log("Promise 5 resolved with:", response);
  } catch (error) {
    console.log("Caught error (async/await):", error);
  }
}
consumePromiseFive();

// ================== FETCH WITH ASYNC/AWAIT ==================
async function getAllUsers() {
  try {
    const response = await fetch("https://api.github.com/users/siddhugo");
    const data = await response.json();
    console.log("GitHub user (async/await):", data);
  } catch (error) {
    console.log("Fetch error:", error);
  }
}
getAllUsers();

// ================== FETCH WITH THEN/CATCH ==================
fetch("https://api.github.com/users/siddhugo")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("GitHub user (then/catch):", data);
  })
  .catch((err) => {
    console.log("Fetch error (then/catch):", err);
  });

// ✅ NOTE:
// fetch() rejects only on *network failure* (e.g., no internet).
// A 404/500 is still a valid response, you must check response.ok or status.
