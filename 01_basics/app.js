// 0) How to run Typescript file (2 ways)
// 1- ts-node nameOfTypescriptFile  (it will directly run typescript file)
// 2- tsc nameOfTypescriptFile (compile ts file to js file then run js file)
//  tsc -watch (For automatically compiling ts file to js file)
// 1) Basic Types (2)
// a)Primitive
// b)Reference
// 2) Primitive Types
// a) implicit
// let a = 12;
// let b = "ammar";
// let c = true;
// b) explicit
// let e: null = null;
// let d: undefined = undefined;
// 3) Arrays
// let arr = [1, 2, 3];
// let arr2 = [123, "ammar"];
// let arr3 = [1, { age: 21, father: "atiq" }];
// 4) Tuples
// let tupple: [string, number, boolean] = ["ammar", 24, true];
//  5) Enumerations
// enum StatusCode {
//   clientError = 400,
//   ServerError = 500
// }
// console.log(StatusCode.ServerError);
// 6) any, unknown, void, null, undefined, never
// a) any Type
// let a;
// a = 12
// a = "ammar"
// console.log(a.toUpperCase());
// b) unknown Type
// let a: unknown;
// a = 12;
// a = "ammar";
// if (typeof a === "string") {
//   console.log(a.toUpperCase());
// }
// c) void
// function abcd():void {
//     console.log("hi");
// }
// abcd()
// d+e) null & undefined (same  as JS)
// f) Never
// function test():never {
//     while (true) {
//         console.log("infinite");
//     }
// }
// test();
// console.log("hi");
// 7) Type Inference and Type Annotation
// let a = 12;  //inference
// let b:string = "ammar" //annotation
// function test(a:number, b: number):number { //Here paramters and return type is defined using "type annotations"
//     return 5
// }
// 8) Interfaces and Type Aliases
// a)Interface
// interface User {
//     name: string,
//     email : string,
//     password : string,
//     age : number,
// }
// function getUserData(obj:User):void {
//     console.log(`Hi my Name is ${obj.name} and mail address is ${obj.email} & I am ${obj.age} years old.`);
// }
// getUserData({
//     name:"Ammar",
//     email:"muhammadammaratiq@gmail.com",
//     password:"test123",
//     age: 24
// })
// Extending Interface
// interface Admin extends User{
//     admin: boolean
// }
// function DisplayAdminDetails(obj:Admin) {
//     console.log(obj.admin);
// }
// DisplayAdminDetails({
//     name:"Ammar",
//     email:"muhammadammaratiq@gmail.com",
//     password:"test123",
//     age: 24,
//     admin: false
// })
// d) Type Aliases
// type alllowedArguments = string | number | boolean;
// function Print(value: alllowedArguments) {
//   console.log(value);
// }
// Print("ammar");
// e) Union Type
var a;
// f)intersection type
// type one = {
// name: string
// }
// type two = one & {
//     age: number
// }
// function Test(paramter:two) {
//     console.log(`${paramter.name}, ${paramter.age}`);
// }
// Test({
//     name: "ammar",
//     age: 22
// })
