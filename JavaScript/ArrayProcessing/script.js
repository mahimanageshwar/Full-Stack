const ary = ["Apple", 2.5, 99, "Himachal", "a"];

console.log("With For Each");

ary.forEach((element) => {
    if(typeof element === "number") {
        console.log(element);
    }
});

console.log("X =", x);


console.log("With Map");

ary.map((element) => {
    console.log(element);
});

console.log("X =", x);



const ar2 = ["Apple", 2.5, 99, "Himachal", "a"];

var F = ar2.filter((item) =>  item !== "99");

console.log("F =", F);


var F = ar2.filter((item) =>  item === "99");

console.log("F =", F);


var Fix = ar2.findIndex((item) =>  item === "99");

console.log("Fix =", Fix);



const ar3 = [2, 5, 1, 7, 3, 9, 4, 8];

var s = ar3.sort();

console.log("S = ", s);