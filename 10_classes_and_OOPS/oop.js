const user = {
    username: "Deepanshu",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        //console.log(username);  incorrect
        //console.log(this.username) correct
        console.log(this)
        return `Hello`
    }
}

//console.log(user.username)
//console.log(user.getUserDetails());
//console.log(this)

//const promiseOne = new Promise()
//const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChiaAurCode", 11, false)
//console.log(userOne.greeting())
//console.log(userOne.constructor)
//console.log(userOne)
//console.log(userTwo)

//console.log(userOne instanceof User);
//console.log(userOne instanceof Object);
//console.log(typeof User);
//console.log(typeof userOne);
//console.log(typeof new User("hitesh", 12, true));

