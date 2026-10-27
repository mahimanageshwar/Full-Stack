let text = document.querySelector("h1").innerText;

console.log(text + " Raj Vardhan");

function submit() 
{
    console.log("Submit Button Clicked");

    const nm = document.querySelector("#fullName").value;
    const em = document.querySelector("#Email").value;

    console.log("Full Name:", nm);
    console.log("Email:", em);
}


// for (var ) {
//     console.log(fieldName[i] + " : " + FormData[i])
// }

const coursediv = document.getElementById("course")

console.log(coursediv);