//object literals

const mySym = Symbol("key1")

const JsUser ={
    name: "Deepanshu",
    "full name": "Deepanshu yadav",
    [mySym]: "myKey1",
    age: 18,
    location: "Delhi",
    email: "abc@mgail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

JsUser.email = "Deepanshu@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "Deepanshu@microsoft.com"

console.log(JsUser);

  