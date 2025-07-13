// 0) How to run Typescript file (2 ways)
// 1- ts-node nameOfTypescriptFile  (it will directly run typescript file)
// 2- tsc nameOfTypescriptFile (compile ts file to js file then run js file)
//  tsc -watch (For automatically compiling ts file to js file)
function getUserData(obj) {
    console.log("Hi my Name is ".concat(obj.name, " and mail address is ").concat(obj.email, " & I am ").concat(obj.age, " years old."));
}
getUserData({
    name: "Ammar",
    email: "muhammadammaratiq@gmail.com",
    password: "test123",
    age: 22,
    male: true
});
