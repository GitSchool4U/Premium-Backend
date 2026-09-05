// ✅ let, var, const
// ✅ words v/s built-in keywords
// ✅ datatypes (typeof)
// ✅ primitive vs reference type
// ✅ operators (logical OR, AND, NOT)
// ✅ truthy, falsy
// ✅ Optional Chaining & Nullish Coalescing
// ✅ conditionals
// ✅ loops
// ✅ functions
// ✅ parameters & arguments
// ✅ array (push, pop, shift, unshift, map, filter)
// ✅ object
// ✅ string
// ✅ sync async (async await) // 3-4 hrs: promise, callback, callback hell, async await
// ✅ spread & rest operator
// ✅ destructuring


// let, var, const - variable
// data store karne ke liye variable role me aata hai
// dabase - rahul ke profile ka data 
// let profilename; // varialbe decalaration
// profilename = 'manas kumar lal' //initialization
// profilename = 'rahul'
// console.log(profilename)

// var pname = 'manas';
// console.log(pname)

// const pname = 'manas'
// console.log(pname)

// const valueOfPi = 3.14;
// console.log(valueOfPi)
// valueOfPi = 6.45;
// console.log(valueOfPi)
// var alpha;

// console.log(alpha)
// alpha = 2;
// console.log(alpha)

// let alpha = 2;
// let alpha;
// console.log(alpha)


// console.log(alpha)
// const alpha = 2

// let me redeclaration nahi kar skte hai, let hoist nahi hota hai
// var me redeclaration kar skte hai, var hoist hota hai
// const me redeclaration bhi nahi kar skte aur initialization bhi nahi kar skte, ye ek constant variablew hai, no hoisting possible.

// let, var, const, for, while, function, map, if, else


// datatypes
// let a = 12
// let b = null;
// let c = undefined;

// function greet(){
//     console.log("heey hello")
// }

// console.log(typeof [])
// console.log(typeof {})
// console.log(typeof greet)



// let a = 15;
// let b = a;
// console.log(a, b)
// b = 20;
// console.log(a, b)


// let arr = [1, 2];
// let newArr = arr;
// console.log(arr, newArr);
// newArr.push(10)
// console.log(arr, newArr);


// let a = 15;
// let b = 16;
// let sum = a + b;
// console.log(sum)


// console.log(true && true)
// console.log(true && false)
// console.log(false && false)
// console.log(true || true)
// console.log(true || false)
// console.log(false || false)
// console.log(!false)
// console.log(!true)

// let a = 10;
// let b = 20;
// let c = 20;
// if (a < b && b == c) {
//     console.log('shi data hai')
// }


// falsy : 0, -0, 0n, false, NaN, null, undefined, ''
//  truthy : falsy ko chorkar sab: [], {}, 'slkdjf', true, 123


// let obj = null;

// console.log(obj?.name)

// let databaseWalaValue = 'manas';
// let pName = databaseWalaValue ?? 'Unknown User';

// console.log(pName)


// conditionals
// if, elseif, else

// let age = 19;
// if(age>=18){
//     console.log("drive kar skte ho...")
// }else{
//     console.log("drive nahi kar skte ho...")
// }

// let marks = 67;
// if (marks >= 90) {
//     console.log("Grade A")
// } else if (marks >= 80) {
//     console.log("Grade B")
// } else if (marks >= 70) {
//     console.log("Grade C")
// } else if (marks >= 60) {
//     console.log("Grade D")
// }else{
//     console.log("fail")
// }

// for(i=1;i<=100;i++){
//     console.log(i)
// }

// let i = 1;
// while (i <= 10) {
//     console.log(`2 * ${i} = ${2*i}`);
//     i++;
// }

// let name = 'manas';
// console.log(`hello my name is ${name + 'i'}`)

// function is nothing but a machine




// function printTable(num) {
//     let i = 1;
//     while (i <= 10) {
//         console.log(`${num} * ${i} = ${num * i}`);
//         i++;
//     }
// }


// printTable(3)
// printTable(4)

// // function declaration
// function printTable() {

// }

// // function expression
// let printTable = function () {

// }

// // fat arrow function
// let printTable = () => {

// }


// let numArray = [4,5,6];
// console.log(numArray)
// numArray.push(10)
// console.log(numArray)
// numArray.pop()
// console.log(numArray)
// numArray.unshift(15)
// console.log(numArray)
// numArray.shift()
// console.log(numArray)

// let arr = [1,5,8,10,15];
// let outputArr = arr.map((element, index)=>{
//     return element*2;
// })
// console.log(outputArr)



// let mapArr = arr.map((element)=>{
//     return element%2 == 0
// })
// let filterArr = arr.filter((element)=>{
//     return element%2 == 0
// })
// console.log(mapArr, filterArr)


// let arr = ['manas', 'shyam', 'ghanshyam', 'puneet']

// let obj = {
//     'full name': 'manas kumar lal',
//     age: 23,
//     city: 'bhagalpur',
// }

// let keyname = 'age'
// console.log(obj[keyname])



// let str1 = 'hello how are you 1';
// let str2 = "hello how are you 2";
// let str3 = `hello how are you 3 ${str2}`
// console.log(str1)
// console.log(str2)
// console.log(str3)

// console.log(str1.toUpperCase())


// let arr1 = [1,2,3,4,5,6]
// // console.log(...arr)
// let arr2 = arr1;
// let arr3 = [...arr1]

// // arr2.push(10)
// arr3.push(10)

// console.log(arr1)
// console.log(arr2)
// console.log(arr3)

// function print(...arr){
//     let sum = 0;
//     arr.map((elem)=>{
//         sum = sum + elem
//     })
//     console.log(sum)
// }

// print(1,2,3,4,5,6,7,8,9,10,11, 15, 90)


// let thisIsUsersProfile = {
//     name: 'manas kumar lal',
//     age: 23
// };

// let {name, age} = thisIsUsersProfile

// console.log(name, age)

// let yeHamarArrayHai = ['manas', 'rahul','puneet'];
// let [firstUser, secondUser, thirdUser] = yeHamarArrayHai;
// console.log(firstUser, secondUser, thirdUser)



// console.log('1st line')
// console.log('2nd line')
// console.log('3rd line')
// console.log('4rth line')


// asynchronous programming: multiple task ek sath run kar paaye
// console.log('1st line')

// setTimeout(() => {
//     console.log('2nd line')
// }, 3000);

// console.log('3rd line')

// setTimeout(() => {
//     console.log('4rth line')
// }, 5000);


// jab bhi database se kuch data fetch karoge... ya server ko request karoge to data aane me ya response aane me time lagega... kitna time lagega nahi pata


// static ui run kar jaayega
// dynamic ui jo ki data pe dependent hai wo wait karega data aane ka, tab tak loading dikhayega


// kuch line ok code fatafatafat run kar jayega..
// lekin kuch line of code data aane ka wait karega,,, ham wait karwayenge

// promise --> resolve, reject

// async function fetchData() {
//     const data = await fetch('https://jsonplaceholder.typicode.com/posts');
//     console.log(data)
// }

// console.log("data ye raha: ");
// fetchData()
// console.log('hello how are you')