// Global Scope
// 1.

// var username="admin";
// function function1() {
//     console.log(username);  // output: undefined
//     var username="guest";
// }
// function1();  


// // 2.
// let status="online";
// function function2() {
//     status="offline";
//     let status="Inactive";
//     console.log(status);  // output: cannot access "status" before initialization.
// }
// function2();

// // 3.
// var title="Javascript";
// function function3() {
//     for (let i = 0; i < 1; i++) {
//         title = "Updated Inside Loop";
//         console.log("Inside loop:",title);
//     }
// }
//     console.log("Before function call:",title);
//     function3();
//     console.log("After function call:",title);



// // 4.
// var a = 10;
// var b = 20;
// function function4() {
//     var a = 30;
//     var b = 40;
//     console.log(a);  // output: 30
//     console.log(b);  // output: 40
// }
// function4();


// // FUNCTION SCOPE

// // 6.
// function function6() {
// let globalvar = 10;
// }
// console.log(globalvar); // output: global is not defined.
// function6();


// 7.
// function outer() {
//     let x ="outer";
//     function inner() {
//         let x="inner";
//         console.log("Inner Function:",x);  // output: inner
//     }
//     inner();
//     console.log("outer function:",x);  // output: outer
// }
// outer();


// // 8.
// function function8() {
//     console.log(gvar);   // output: undefined
//     var gvar = 10;
//     console.log(gvar);   // output: 10
// }
// function8();




// BLOCK SCOPE


// 11
// function function11() {
//     let secret = "hidden"
// }
// console.log(secret);          // output: secret is not defined.
// function11();


// 12.

// {
//     console.log(localvar);     // output: cannot access localvar before initialization.
//     let localvar = 10;
// }



// 13.
// let score=90;
// {
//     let score=70;
//     console.log(score);  // output: 70
// }
// console.log(score);      // output: 90


// 14.


// 15.

if(true) {
   var status="active";
   if(true) {
    let status="inactive";
   }
}
console.log(status);           // output: active 

// MIXED CONCEPT TASKS

// 16.
// var name = "Global";
// function function16() {
//     var name = "Function";
//     {
//         let name = "Block";
//         console.log(name);   // output: Block
//     }
//     console.log(name);       // output: Function
// }
// console.log(name);           // output: Global
// function16();


// 17.
// function function17() {
//     console.log(gvar);          // output: undefined
//     var gvar = 20;
// }
// function17();


// 18.
// function function18() {
  
//      if(true) {
//         let x = 10;
//      }
//      console.log(x);     // output: ReferenceError: x is not defined
// }
// function18();


// 19.
// if(true) {
//     var a = 1;
//     let b = 2;
// }
// console.log(a);  // output: 1
// console.log(b);  // output:  reference error b is not defined.


// 20.
// var id = 1;
// function function20() {
//     var id = 2;
//     if(true) {
//         let id = 3;
//         console.log(id); // output: 3
//     }
//     console.log(id);     // output: 2
// }
// console.log(id);         // output: 1
// function20();
