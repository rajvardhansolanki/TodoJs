let taskArray = [];

const taskAddButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");

const addTask = () => {
    let task = taskInput.value.trim();
    if (task) {
        taskArray.push(task);
        console.log(taskArray);
        taskInput.value = "";
    }
}

taskAddButton.addEventListener("click", (e) => {
    e.preventDefault();
    addTask();
});
