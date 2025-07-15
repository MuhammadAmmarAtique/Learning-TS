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
