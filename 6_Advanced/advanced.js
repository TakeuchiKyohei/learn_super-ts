var uill = {
    name: "Quill",
    role: "Frontend Engineer",
    follower: 1000,
};
var uil = {
    name: "Quill",
    role: "Frontend Engineer",
    follower: 1000,
};
// 3つのtype guard
// 1: typeof
function toUpperCase(x) {
    if (typeof x === "string") {
        return x.toUpperCase();
    }
    return "";
}
function describeProfile(nomadWorker) {
    console.log(nomadWorker.name);
    if ("role" in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ("follower" in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
// 3: instanceof
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.speak = function () {
        console.log("Bow-wow");
    };
    return Dog;
}());
