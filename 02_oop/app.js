// 1) Class Definition
// class Device {
//   name = "Lg";
//   price = 12000;
// }
// let d1 = new Device();
// let d2 = new Device();
// type d1 and d2 in browser console to see output
// 2) Constructor
var Bottle = /** @class */ (function () {
    function Bottle(name, size) {
        this.name = name;
        this.size = size;
    }
    return Bottle;
}());
var b1 = new Bottle("Jojo", "small");
var b2 = new Bottle("Momo", "small");
var b3 = new Bottle("koko", "large");
