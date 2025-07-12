"use strict";
// 0) How to run Typescript file (2 ways)
// 1- ts-node nameOfTypescriptFile  (it will directly run typescript file)
// 2- tsc nameOfTypescriptFile (compile ts file to js file then run js file)
//  tsc -watch (For automatically compiling ts file to js file)
// 1) Basic Types (2)
// a)Primitive
// b)Reference
// 2) Primitive Types
// a) implicit
let a = 12;
let b = "ammar";
let c = true;
// b) explicit
let e = null;
let d = undefined;
// 3) Arrays
let arr = [1, 2, 3];
let arr2 = [123, "ammar"];
let arr3 = [1, { age: 21, father: "atiq" }];
// 4) Tuples
let tupple = ["ammar", 24, true];
//  5) Enumerations
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["clientError"] = 400] = "clientError";
    StatusCode[StatusCode["ServerError"] = 500] = "ServerError";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.ServerError);
