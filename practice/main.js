// 1. 재선언
// let variable = 1;

// let variable = 2;

// console.log(`variance`, variance);

// 2. 재할당
// var a = 1;
// a = 2;

// let b = 2;
// b = 4;

// const c = 3;
// c = 4;

// console.log(`c`, c);

// 3. 초기화 필요
// let a = 1;
// let f;
// var b;
// const c = 3;
// c = 3;

// 4. 호이스팅

// console.log(`a`, a);
// var a = 1;
// a 가 선언되긴 하였지만, 할당되지 않은 상태

// console.log(`b`, b);
// let b = 2;

// {
//   function sayHi() {
//     console.log("Hi!");
//   }
// }

// sayHi();

// {
//   let sayHello = function () {
//     console.log("Hello!");
//   };
// }

// sayHello();

// 5. scope (block scope, function scope)
// block - for, if, while, function ...
// function - function

// for (let i = 0; i < 10; i++) {
//   var a = 1;
// }
// console.log(`a`, a);

// for (let i = 0; i < 10; i++) {
//   let b = 1;
// }
// console.log(`b`, b);

// function addTwoNums(a, b) {
//   var c = a;
//   let d = b;
//   return c + d;
// }
// addTwoNums(2, 3);
// // console.log(`c`, c);
// console.log(`d`, d);

// 6. 참조 자료형
// const a = { fist: 1, second: 2 };
// const b = a;
// b.second = 5;
// console.log(`a`, a);
// console.log(`b`, b);

// // a = { a: 4, b: 6 }; // error
// a.third = 3;
// console.log(`a`, a);

// let a = true;
// console.log(`typeof a`, typeof a);

// let euijin = {
//   age: 25,
//   sex: "Male",
// };
// // (key : value)  => property
// console.log(`euijin.age`, euijin.age);
// // 객체명.key => value값 호출
// euijin.math = 100;

// console.log(`euijin`, euijin);

// delete euijin.age;

// console.log(`euijin`, euijin);

// const arr = [1, 2, 3];

// arr.push(4, 5);
// console.log(`arr`, arr);
// arr.pop();
// arr.pop();
// arr.pop();
// console.log(`arr`, arr);

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const counter = document.querySelector(".counter");

plus.addEventListener("click", function () {
  counter.innerText = Number(counter.innerText) + 1;
});

minus.addEventListener("click", function () {
  counter.innerText = Number(counter.innerText) - 1;
});
