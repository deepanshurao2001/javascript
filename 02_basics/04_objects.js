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

const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "xyz@gmail.com"
    },
    {
        id: 1,
        email: "mno@gmail.com"
    }
]

console.log(users[0].email);
console.log(tinderUser);
//we can only display only keys of objects
console.log(Object.keys(tinderUser));
// we  can store the keys of above object in a seprate object
const keysOnly = Object.keys(tinderUser)

console.log(typeof keysOnly);

console.log(keysOnly);

