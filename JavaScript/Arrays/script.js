const ar1 = [1, 2, 3, 4, 5];
let ar2 = [1, 2, 3, 4, 5];

console.log(ar1);
console.log(ar2);

ar1[0] = 20;
ar2 = [1, 2, 3, 4, 5, 6, 7];

console.log(ar1);
console.log(ar2);

ar1[3] = 30;
ar2 = 10;

console.log(ar1);
console.log(ar2);

const ch1 = ["abcd", "defg", "hijk"];
console.log(ch1);

const arr = ["Apple", "2kg", "Himachal", 20, 99.1, true];

for (var i=0; i<arr.length, i++) {
    console.log(arr);
}

console.log(arr[2]);    // Himichal
console.log(arr.at(-4));    //Himichal

arr.push("Delhi")
console.log(arr);

arr.pop()
console.log(arr);

let abc = arr.filter((item) => item != "Himachal")