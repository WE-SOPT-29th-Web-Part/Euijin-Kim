// 1. 재선언
// let variance = 1;

// let variance = 2;

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
// let a;
// var b;
// const c;

// 4. 호이스팅

// console.log(`a`, a);
// var a = 1;

// console.log(`b`, b);
// let b = 2;

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
// console.log(`c`, c);
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
