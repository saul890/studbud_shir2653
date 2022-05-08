// TASK LIST


// Setting up variables for our HTML elements using DOM selection
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button"); // Complex CSS query
const tasklist = document.getElementById("tasklist");
const taskInput = document.getElementById("taskInput");
const dueDateInput = document.getElementById("dueDateInput");
const estimatedTimeInput = document.getElementById("estimatedTimeInput");
const priorityInput = document.getElementById("priorityInput");
const submitButton = document.getElementById("submit-button");


// Event listener for Button click
// This could also be form.addEventListener("submit", function() {...} )
submitButton.addEventListener("click", function (event) {
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

function addTask(title, dueDate, estimatedTime, priorityRating, checked) {
    var task = {
        id: Date.now(),
        title: title,
        dueDate: dueDate,
        estimatedTime: estimatedTime,
        priorityRating: priorityRating,
        checked: checked
    };

    // Add the task to our array of tasks
    taskList.push(task);
    

    window.localStorage.setItem(task.id, JSON.stringify({ 
        title: title,
        dueDate: dueDate,
        estimatedTime: estimatedTime,
        priorityRating: priorityRating,
        checked: checked }));

    // Separate the DOM manipulation from the object creation logic
    //addToLocalStorage(task);
    renderTask(task);
}

// when there are elements in the local storage, get them by index number
for (var i = 0; i <= localStorage.length - 1; i++) {
    key = localStorage.key(i);
    getFromLocalStorage(key)
}


// Render tasks from local storage
function getFromLocalStorage(taskId) {
    task = JSON.parse(window.localStorage.getItem(taskId));
      renderTask(task);
  }

function onlyGetFromLocalStorage(taskId) {
    task = JSON.parse(window.localStorage.getItem(taskId));
  }



// Function to display the item on the page
function renderTask(task) {
    let item = document.createElement("ul");
    item.classList.add("tasks");
    item.setAttribute('date-id', task.id)
    item.innerHTML = "<p>" + "<li class=task_title>" + task.title + task.priorityRating + "</li>" + "<li class=task_due>" + task.dueDate + "</li>" + "<li class=task_time>" + task.estimatedTime + "</li>" + "<li class=task_priority>" + "<p>";
    tasklist.appendChild(item);


    // Setup delete button DOM elements
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Remove Task");
    delButton.classList.add("del-button");
    delButton.appendChild(delButtonText);
    

    let checkbox = document.createElement('input');
    checkbox.classList.add("done")
    checkbox.type = "checkbox";

    item.appendChild(checkbox);
    item.appendChild(delButton); // Adds a delete button to every task


    // NOTHING HERE SAYS ANYTHING ABOUT DELETE BUTTON !
    // DELETE BUTTON SHOULD DELETE TASK FROM LOCAL STORAGE ! 
    delButton.addEventListener("click", function (event) {
        event.preventDefault();
        // this removes the item from the consoles array
        let id = event.target.parentElement.getAttribute('date-id');
        
        let index = taskList.findIndex(task => task.id === Number(id));


        // Removes items added recently but not the items that have been pulled from local storage
        window.localStorage.removeItem(id);
        
        removeItemFromArray(taskList, index);
        
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

