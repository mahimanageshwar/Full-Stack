const shownAssBtn = document.getElementById("showAssignmentNotification");

const shownAttBtn = document.getElementById("showAttendenceNotification");

const stopAssBtn = document.getElementById("stopAssignmentNotification");

const assPara = document.getElementById("AssignmentNotification");

const attPara = document.getElementById("AttendenceNotification");

function ShownAssingment() {
    assPara.textContent = "Your assignment deadline is approaching!";
}

shownAssBtn.addEventListener("click", ShownAssingment);

shownAttBtn.addEventListener("click", () => {
    attPara.textContent = "Please check your attendence status!";
});

shownAttBtn.addEventListener("click", () => {
   shownAssBtn.removeEventListener("click", ShownAssingment);
});


const parent = document.getElementById("outer");

const child = document.getElementById("inner");

parent.addEventListener('click', () => {
    console.log("parent clicked");
});

child.addEventListener("click", () => {
    console.log("child clicked");
});