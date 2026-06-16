let button = document.querySelector("button");
let input = document.querySelector(".input-place input");
let status = document.querySelector(".status");
button.addEventListener("click", addTask);
function addTask() {
    let task = input.value;
    if (task == "") {
        alert("Enter a task");
        return;
    }
    status.innerHTML +=
        '<div class="status-task">' +
        '<input type="checkbox">' +
        '<span>' + task + '</span>' +
        '</div>';
    input.value = "";
    addEvents();  
    updateCards();
}
function addEvents() {
    let tasks = document.querySelectorAll(".status-task");
    for (let i = 0; i < tasks.length; i++) {
        let checkbox = tasks[i].querySelector("input");
        checkbox.onchange = function () {
            updateCards();
        };
    }
}
function updateCards() {
    let tasks = document.querySelectorAll(".status-task");
    let active = 0;
    let complete = 0;
    for (let i = 0; i < tasks.length; i++) {
        let check = tasks[i].querySelector("input");
        if (check.checked == true) {
            complete++;
        }
        else {
            active++;
        }
    }
    document.querySelectorAll(".card h2")[0].innerHTML = active;
    document.querySelectorAll(".card h2")[1].innerHTML = complete;
    document.querySelectorAll(".card h2")[2].innerHTML = tasks.length;
}