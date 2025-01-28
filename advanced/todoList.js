/**
 * Problem:
 * Write a program to manage a to-do list.
 * The program should support adding tasks, removing tasks, and displaying all tasks.
 *
 * Your task:
 * Implement the functions `addTask`, `removeTask`, and `showTasks` to manage the to-do list.
 *
 * Example:
 * addTask("Buy groceries") should add a new task.
 * removeTask("Buy groceries") should remove the task.
 * showTasks() should return a list of all current tasks.
 */

// Write your solution here

let tasks = [];

function addTask(task) {
    tasks.push(task);
    console.log(`Task added: ${task}`);
}
function removeTask(task){
    const index = tasks.indexOf(task);
    if (index !== -1) {
        tasks.splice(index, 1);
        console.log(`Task removed: ${task}`);
    } else {
        console.log(`Task not found: ${task}`);
    }
}

function showTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available.");
    } else {
        tasks.forEach(task => {
            console.log(`- ${task}`);
        });
    }
}


module.exports = { addTask, removeTask, showTasks };
