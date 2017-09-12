// function repeatIt(count, func) {
//     for (let i = 1; i <= count; i++)
//         func(i);
// }


// let starsFunc = function (i) {
//     console.log("**".repeat(i))
// };
// // repeatIt(3, starsFunc)
// repeatIt(3, function (x) {
//     console.log( x);
// });

//IIFE

// (function (count) {
//     for (let i = 1; i <= count; i++)
//         console.log('+'.repeat(i));
// })(4);


//CLOSURE

// let f = (function (z,op) {
//     let x = 0;
//
//     return function(z,op) {
//         if(op==='-'){
//             x-=z
//         }
//         else {
//             x+=z
//         }
//
//         // x++
//         console.log(x);
//     }
// })();
// f(4,'-');
// f(4,'-');
// f(4,'+');
// f(4,'-');

// function oi(x) {
//     x=x||244
//     console.log(x)
// }
// x=0
// oi(x)
// ////244
// x=3
// oi(x)
// //3


// function isAdult(age) {
//     return age && age > 17 ;
// }
// console.log(isAdult(18))////true
// console.log(isAdult(10))////false

// let nameSpace= {
//     add:function (num1,num2) {
//
//         return num2+num1
//     }
// }
//
// console.log(nameSpace.add(20,30))////50

// //MAP
// let myArray=[1,2,3,4,5] ;
// myArray=myArray.map(element => element*9)
// console.log(myArray)
// //[ 8, 16, 24, 32, 40 ]
//
// let myArray2=[1,2,3,4,5] ;
// myArray2=myArray2.map(element => element>2)
// console.log(myArray2)
// //[ false, false, true, true, true ]


////FIND
// let myArray=[1,2,3,4,5]
// console.log(myArray.find(element => element >3))
////4

//FINDINDEX
// let myArray=[1,2,3,4,5]
// console.log(myArray.findIndex(element => element >3))
//3

// //EVERY
// let myArray = [1, 2, 3, 4, 5]
// console.log(myArray.every(element => element > 3))
// //false

// SOME
// let myArray = [1, 2, 3, 4, 5]
// console.log(myArray.some(element => element > 3))
// //true

//FILTER
// let myArray=[1,2,3,4,5]
// console.log(myArray.filter(element => element >3))
//[ 4, 5 ]

//SHIFT
// let myArray=[1,2,3,4,5]
// myArray.shift()
// console.log(myArray)
//[ 2, 3, 4, 5 ]

// //CONCAT
// var arr1 ='ss'
// var arr2= 'rr'
// console.log(arr1.concat(arr2))
// //[ 1, 3, 4, 6, 2, 9 ]

// INCLUDES
// let myArray=[1,2,3,4,5]
// console.log(myArray.includes(2))
//true

//REDUCE
// let myArray = [1, 2, 3, 4, 5]
// console.log(myArray.reduce((prev, curr) => prev + curr))
//15

// //Array.prototype
// let myArray=[1,2,3,4,5]
// Array.prototype.mitko=function () {
//     for (var i = 0; i < myArray.length; i++) {
//         this[i]=this[i]+9
//     }
// }
// myArray.mitko()
// console.log(myArray)

// //CLASS
// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
//     get area() {
//         return this.calcArea();
//     }
//     calcArea() {
//         return this.height * this.width;
//     }
// }
// const square = new Rectangle(10, 10);
// console.log(square.area);
// //100


// document.getElementById('test').innerHTML=aa

// var bar = true;
// console.log(bar + 0);         //true
// console.log(bar + "xyz");       // truexyz
// console.log(bar + true+true);   //     3
// console.log(bar + false);       // 1


// // OBJECTS\GET KEYS/GET VALUES
// let aa = {
//     a: 1,
//     b: 2,
//     c: 3
// }
//
// for (w in aa) {
//     console.log(aa[w])///1,2,3
// }
// for (w in aa) {
//     console.log(w)///a,b,c
// }


// //SORT ARR OF OBJECTS BY VALUES
// arr.sort((a, b) => a.value.localeCompare(b.value));
// //if value is not string
// arr.sort((a, b) => a.value.toString().localeCompare(b.value))

