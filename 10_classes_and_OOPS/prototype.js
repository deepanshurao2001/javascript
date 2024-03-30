//let myName = "Deepanshu       "

//console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    siderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.siderman}`);
    }

}

Object.prototype.hitesh = function (){
    console.log(`Hitesh is present in all object`);
}

//heroPower.hitesh()

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
//heroPower.heyHitesh()


//inheritance
const User = {
    name: "chai",
    email: "abc@gmail.com"
}


const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

console.log(TASupport.isAvailable)

Teacher.__proto__ = User

console.log(Teacher.name);


// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher) // TeacherSupport can access Teachers property

//console.log(Teacher.isAvailable);  result undefined
console.log(TeachingSupport.makeVideo);// result true means TeacherSupport can access Teachers property


let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);

}

anotherUsername.trueLength()
"Hello     ".trueLength()