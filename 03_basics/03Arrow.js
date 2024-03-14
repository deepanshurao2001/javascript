const user = {
    username: "Deepanshu",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
}

user.welcomeMessage()
// const addTwo = (num1,num2) => {username: "Deepanshu"}

// const addTwo = (num1, num2) => [username = "Deepanshu" , age = 14]

// const addTwo = (num1, num2) => ({username: "Deepanshu"})

const addTwo = (num1, num2) => num1 + num2

console.log(addTwo(3, 4))

