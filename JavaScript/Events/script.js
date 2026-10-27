function showAlert() {
    alert ("Click me Button clicked using HTML Events")
}

document.getElementById("clickButton").
addEventListener("click", showAlert2);

function showAlert2() {
    alert("Click me Button clicked using JS Events")
}

document.getElementById("box").addEventListener("click", () => {
    document.getElementById("box").innerText = "The Box Was Clicked";
});


document.getElementById("nameSubmit").addEventListener("click", () => {
    console.log(document.getElementById("fullName").value.trim());
});

