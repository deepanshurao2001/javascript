//Array

const myArr = [0,1,2,3,4,5]
console.log(typeof(myArr));
console.log(myArr);
console.log(typeof(myArr[0]));
console.log(myArr[0]);

let arr = ["spiderman","IRONMAN","THOR","CAPTAIN AMERICA"]
console.log(arr);
console.log(typeof(arr));
console.log(typeof(arr[0]));

const myArr2 = new Array("one","Two","Three")

//Array method

myArr2.push(3)
console.log(myArr2);
console.log(`type of third element in array is ${typeof(myArr2[2])} and type of forth in array is ${typeof(myArr2[3])}`);
myArr2.pop();
console.log(myArr2);