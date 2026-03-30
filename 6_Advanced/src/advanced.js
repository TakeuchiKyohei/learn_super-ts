"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var quill = {
    name: "Quill",
    role: "Frontend Engineer",
    follower: 1000,
};
var uil = {
    name: "Quill",
    role: "Frontend Engineer",
    follower: 1000,
};
function toUpperCase(x) {
    if (typeof x === "string") {
        return x.toUpperCase();
    }
    return x;
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
        this.kind = "dog";
    }
    Dog.prototype.speak = function () {
        console.log("Bow-wow");
    };
    return Dog;
}());
var Bird = /** @class */ (function () {
    function Bird() {
        this.kind = "bird";
    }
    Bird.prototype.speak = function () {
        console.log("tweeetttt");
    };
    Bird.prototype.fly = function () {
        console.log("Flying");
    };
    return Bird;
}());
function havePet(pet) {
    pet.speak();
    // タグ付きユニオン
    switch (pet.kind) {
        case "dog":
            pet.speak();
            break;
        case "bird":
            pet.speak();
            pet.fly();
            break;
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
}
// 型アサーション 例：HTMLの要素を取得する際など
var input = document.getElementById("input"); // リアクトとかを使う場合は紛らわしいのでasを使った方がいいかも
var input2 = document.getElementById("input2");
input.value = "Hello";
var designer = {
    name: "Quill",
};
designer.name.toUpperCase();
designer.bar; // あたかもあるように振る舞うことができる
var downloadedData = {
    id: 1,
};
console.log((_b = (_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first); // ?をつけることでエラーを回避できる
