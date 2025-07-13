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
