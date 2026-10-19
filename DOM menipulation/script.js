const headingText = document.getElementById("heading").innerText;
const paraText = document.getElementById("studentMessage").TextContent;
const btnLabel = document.getElementById("courseButton").innerHTML;

console.log(headingText.innerHTML);
console.log(paraText.innerText);
console.log(btnLabel.TextContent);

headingText.innerHTML = "Raj Vardhan";
paraText.innerText = "Rupesh";
btnLabel.TextContent = "Saurabh";


function UpdateMyName() {
    const myName = document.getElementById("myName").
    paraText.innerText = "Welcome to your Learning Portal"
}