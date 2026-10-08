let a=10;
let b=20;
let c="10";
let d="20";

console.log(a == b); //false

console.log(a == c); //

console.log(a === c);

console.log(a != b);

console.log(a !== c);


console.log(a > b ? "Hello" : "Bye");

if(a > b) {
    console.log("Hello");
}
else {
    console.log("Bye");
}

// for loop
for ( var i=0; i<5; i++) {
    console.log("We are learning JavaScript", i + 1);
}

//while loop
var i = 0;
while (i <= 5) {
    console.log("We are learning JavaScript", i + 1);
    i++;
}