// TASK LIST

// Setting up variables for our HTML elements using DOM selection
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button"); // Complex CSS query
const tasklist = document.getElementById("tasklist");
const taskInput = document.getElementById("taskInput");
const dueDateInput = document.getElementById("dueDateInput");
const estimatedTimeInput = document.getElementById("estimatedTimeInput");
const priorityInput = document.getElementById("priorityInput");





// Event listener for Button click
// This could also be form.addEventListener("submit", function() {...} )
button.addEventListener("click", function (event) {
    event.preventDefault(); // Not as necessary for button, but needed for form submit

    let task = taskInput.value // Task name value

    let date = (new Date()).toLocaleDateString('en-GB'); // Due date value

    let time = estimatedTimeInput.value; // Estimated time value

    let priority = priorityInput.value; // Priority value


    // Call the addTask() function using
    addTask(task, date, time, priority, false);

    // Log out the newly populated taskList everytime the button has been pressed
    console.log(taskList);
})

// Create an empty array to store our tasks
var taskList = [];

function addTask(taskDescription, dueDate, estimatedTime, priorityRating, checked) {
    let task = {
        id: Date.now(),
        taskDescription,
        dueDate,
        estimatedTime,
        priorityRating,
        checked
    };

    // Add the task to our array of tasks
    taskList.push(task);

    // Separate the DOM manipulation from the object creation logic
    renderTask(task);
}


// Function to display the item on the page
function renderTask(task) {
    let item = document.createElement("ul");
    item.classList.add("tasks");
    item.setAttribute('date-id', task.id)
    item.innerHTML = "<p>" + "<li class=task_description>" + task.taskDescription + task.priorityRating + "</li>" + "<li class=task_due>" + task.dueDate + "</li>" + "<li class=task_time>" + task.estimatedTime + "</li>" + "<li class=task_priority>" + "<p>";
    tasklist.appendChild(item);


    // Setup delete button DOM elements

    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Delete");
    delButton.appendChild(delButtonText);

    let checkbox = document.createElement('input');
    checkbox.classList.add("done")
    checkbox.type = "checkbox";

    item.appendChild(checkbox);
    item.appendChild(delButton); // Adds a delete button to every task


    // Listen for when the 
    delButton.addEventListener("click", function (event) {
        
        event.preventDefault();

        let id = event.target.parentElement.getAttribute('data-id');

        let index = taskListArray.findIndex(task => task.id === Number(id));
        removeItemFromArray(taskListArray, index)
        item.remove();
        // Remove the task item from the page when button clicked
        // Because we used 'let' to define the item, this will always delete the right element
    })



    // Clear the value of the input once the task has been added to the page
    form.reset();
}


function removeItemFromArray(arr, index) {
    if (index > -1) {
        arr.splice(index, 1)
    }
    return arr;
}
