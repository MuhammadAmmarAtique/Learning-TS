// 1) Class Definition
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Parent = /** @class */ (function () {
    function Parent(name) {
        this.name = name;
    }
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    return Child;
}(Parent));
var c1 = new Child("ammar", 23);
