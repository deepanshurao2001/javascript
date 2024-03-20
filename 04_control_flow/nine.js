const myNums = [1,2,3]

// const mytotal = myNums.reduce( function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)

const myTotal = myNums.reduce((acc, curr) => acc+curr,0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "jsCourse",
        price: 2999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data scientist",
        price: 12999
    },
]

const grandTotal = shoppingCart.reduce((acc,item) => acc + item.price,0)

console.log(grandTotal);