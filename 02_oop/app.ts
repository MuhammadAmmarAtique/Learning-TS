// 1) Class Definition

// class Device {
//   name = "Lg";
//   price = 12000;
// }

// let d1 = new Device();
// let d2 = new Device();

// type d1 and d2 in browser console to see output

// 2) Constructor

// 1) syntax one (short one)
// class Bottle {
//   constructor(public name: string, public size: string) {}
// }

// 1) syntax two (long one)
// class Bottle {
//   public name;
//   public size;

//   constructor(name: string, size: string) {
//     this.name = name;
//     this.size = size;
//   }
// }

// let b1 = new Bottle("Jojo", "small");
// let b2 = new Bottle("Momo", "small");
// let b3 = new Bottle("koko", "large");

// 3) Access Modifiers (3)
// class Parent {
//   public name;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// class Child extends Parent {
//   public age;
//   constructor(name: string, age: number) {
//     super(name);
//     this.age = age;
//   }

//   print() {
//     console.log(`Hi my name is ${this.name} and my age is ${this.age}`);
//   }
// }

// let c1 = new Child("ammar", 23);
// c1.print()

// 4)Readonly Properties

// class Vehicle {
//   public readonly name;
//   constructor( name:string) {
//     this.name = name;
//   }
// }

// let v1 = new Vehicle("Nissan Sunny")
// v1.name = "test" //gives err becasuse of readonly

// 5+6) Parameter + Optional Properties
// class House {
//   constructor( public society : string,  public city?: string  ) {
//   }
// }
// let h1 = new House("New City Phase 2", "Wah")

// 7)Getters and Setters

// class UserData {
//   constructor(public _name :string, public age: 22) {
//     this._name = _name;
//     this.age = age;
//   }

//   get name(){ //getters
//     return this._name;
//   }

//   set name(value: string){ //setter
//     this._name = value;
//   }
// }
// let u1 = new UserData("M Ammar Atiq", 22)

// 8) Static Members
// class ourHouse {
//     static houseNumber =  8;
//     static society =  "New City";

//     static Print(){
//         return `Hello g ki haal chaal aa sab theek aa ?`
//     }
// }
// console.log(ourHouse.houseNumber);
// console.log(ourHouse.society);
// console.log(ourHouse.Print());

// 9) Abstract classes and methods

// abstract class Animal {
//   abstract voice(): void;
//   animalMoves(): void {
//     console.log(`Animal is Moving.`);
//   }
// }
// class Cat extends Animal {
//   voice(): void {
//     console.log("Meow");
//   }
// }

// let catOne = new Cat()
// console.log(catOne.animalMoves());
// console.log(catOne.voice());

// 10) Functions
// a+b)Function types

// function Test(name: string, age: number, cb: ()=>void):void {
//     console.log(`${name}, ${age}`);
//     cb()
//     }

// Test("ammar", 21, ()=>{
//     console.log("Hi from Test function.");
// })

// // c) optional and default parameters
// function optional(Parameter1?:string,Parameter2: number = 12 ) {
//     console.log(`Hello ${Parameter1}, ${Parameter2}`);
// }
// optional("asdf")

// d)Rest and Spread Operator

// a)Rest operator
// function TestingRestOperator(...args:any[]){
// console.log(args);

// }
// TestingRestOperator(1,2,3,4,5,6,24,31,234,2,"sdf")

// b)Spread operator
// a) For Arrays
// let arr1= [12,2435,234]
// let arr2= ["asdf",2435,234]

// let arr3=[...arr1, ...arr2]
// console.log("arr3:", arr3);

// // b) For Objects
// let myobj1 = {
//     name: "ammar"
// }
// let myobj2={
//     age: 21
// }
// let myobj3={
//     ...myobj1,
//     ...myobj2
// }
// console.log("myobj3:", myobj3);

// e)Function Overloading

// 1- function overload signature
// function Test(a:number):number
// function Test(a: string, b:number):string

// 2- function body
// function Test(a:any, b?:number){
// if (typeof a === "number") {
//    return a
// }
// if (typeof a === "string" && typeof b === "number") {
//    return a
// }
// }

// let show = Test("test234", 1)
// console.log(show);

// 11) Generics
// a) Generic function

// 1-
// function genericFunction<G>(a: G, b: boolean, c: number) {
//   console.log(`${a},${b},${c}`);
// }

// genericFunction<string>(`false`, true, 123);
// genericFunction(`false`, true, 123); //type inference is happening here

// 2-
// function log<G>(parameter:G) {
//     console.log(parameter);
// }

// log(`sadfasd`)
// log(3123)

// b_Generic Interface

// interface I<G>{
//     name: string,
//     age :number,
//     ptanahi : G
// }
// function UseInterface(obj:I<boolean>) {
//     console.log(obj.name);
//     console.log(obj.age);
//     console.log(obj.ptanahi);
// }

// UseInterface({
//     name:`cancelAnimationFrame`,
//     age:22,
//     ptanahi: true
// })

// // c_Generic Classes

// class Test<G> {
//     constructor(public member: G) {
//     }
// }

// let t1 = <String>(`asdf`)
// let t2 = (true)
// console.log(t1, t2);

// 12)Modules
// 13) Type Assertion/Type Casting /non-null assertion operator
// 14) Type Guards (2) Type Guards -> Type Narrowing
// 1-type of narrowing

// function Test(val: string | number) {
//   if (typeof val === "number") {
//     console.log("number hai G");
//   }
//   if (typeof val === "string") {
//     console.log("string hai G");
//   }
// }

// Test("1");

// 2-instance of narrowing

// class Car {
//   constructor() {}
// }

// class Truck {
//   constructor() {}
// }

// let c1 = new Car();
// let t1 = new Truck();

// function Test(val: Car | Truck) {
//   if (val instanceof Car) {
//     console.log("Car hai G");
//   } else if (val instanceof Truck) {
//     console.log("Truck hai G");
//   }
// }

// Test(t1);
