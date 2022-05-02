let tasks = Object.entries(localStorage);

console.log(JSON.parse(tasks[0][1]).task.taskDescription);

//for loop .. 0 until length of array !