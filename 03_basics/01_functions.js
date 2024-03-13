function  addTwoNumber(number1,number2){

    console.log(number1 + number2);

}

addTwoNumber(12,null)

function subtractTwoNumber(number1,number2){
    if(number1 >= number2){
        return `difference of numbers is ${number1 - number2}`
    }

    return number2 - number1
}

console.log(subtractTwoNumber(88,77));