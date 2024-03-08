// object singleton 
// const user = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isloggedIn = false

// console.log(tinderUser);

const regularUser ={
    email: "abc@gmail.com",
    fullName:{
        userfullname:{
            firstname: "Deepanshu",
            lastname: "Yadav"
        }
    }
} 

console.log(regularUser.fullName.userfullname.lastname,regularUser.fullName.userfullname.firstname);