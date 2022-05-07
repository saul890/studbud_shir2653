import '../public/libraries/jkanban.min.js'
//const tasklist = document.getElementById("tasklist");
//let tasks = Object.entries(localStorage);
//console.log(JSON.parse(tasks[0][1]).task.taskDescription);
//for (let i = 0; i < tasks; i++) {
 //   console.log(JSON.parse(tasks[i][i]).task.taskDescription);
  //}
//for loop .. 0 until length of array !


// Loop through local storage and render all tasks 
for (var i = 0; i <= localStorage.length - 1; i++) {
    key = localStorage.key(i);
    getFromLocalStorage(key)
}

/*
function function1() {
    var ul = document.getElementById("tasklist");
    var firstRow = document.getElementById("toDo");
    ul.appendChild(document.createTextNode("Four"));
    firstRow.appendChild(ul);
  }
*/

function renderTask(task) {
    let item = document.createElement("ul");
    item.classList.add("tasks");
    item.setAttribute('date-id', task.id)
    item.innerHTML = "<p>" + "<li class=task_description>" + task.taskDescription + task.priorityRating + "</li>" + "<li class=task_due>" + task.dueDate + "</li>" + "<li class=task_time>" + task.estimatedTime + "</li>" + "<li class=task_priority>" + "<p>";
    kanban_container.appendChild(item);
}

function getFromLocalStorage(taskId) {
    task = JSON.parse(window.localStorage.getItem(taskId));
      renderTask(task);
  }



 
  // Kanban library code from jkanban
var kanban = new jKanban({
    element          : '#kanban_container',                                           // selector of the kanban container
    gutter           : '15px',                                       // gutter of the board
    widthBoard       : '250px',                                      // width of the board
    responsivePercentage: false,                                    // if it is true I use percentage in the width of the boards and it is not necessary gutter and widthBoard
    dragItems        : true,                                         // if false, all items are not draggable
    boards           : [
        { id: 'toDo', title: "To Do", item: [], color: "#178bff", order: 1},
        { id: 'inProgress', title: "In Progress", item: [], color: "#3dd66b", order: 2},
        { id: 'done', title: "Done", item: [], color: "#3dd66b", order: 3}
    ],                                           // json of boards
    dragBoards       : false,                                         // the boards are draggable, if false only item can be dragged
    itemAddOptions: {
        enabled: false,                                              // add a button to board for easy item creation
        content: '+',                                                // text or html content of the board button   
        class: 'kanban-title-button btn btn-default btn-xs',         // default class of the button
        footer: false                                                // position the button on footer
    },    
    itemHandleOptions: {
        enabled             : false,                                 // if board item handle is enabled or not
        handleClass         : "item_handle",                         // css class for your custom item handle
        customCssHandler    : "drag_handler",                        // when customHandler is undefined, jKanban will use this property to set main handler class
        customCssIconHandler: "drag_handler_icon",                   // when customHandler is undefined, jKanban will use this property to set main icon handler class. If you want, you can use font icon libraries here
        customHandler       : "<span class='item_handle'>+</span> %title% "  // your entirely customized handler. Use %title% to position item title 
                                                                             // any key's value included in item collection can be replaced with %key%
    },
    click            : function (el) {},                             // callback when any board's item are clicked
    context          : function (el, event) {},                      // callback when any board's item are right clicked
    dragEl           : function (el, source) {},                     // callback when any board's item are dragged
    dragendEl        : function (el) {},                             // callback when any board's item stop drag
    dropEl           : function (el, target, source, sibling) {},    // callback when any board's item drop in a board
    dragBoard        : function (el, source) {},                     // callback when any board stop drag
    dragendBoard     : function (el) {},                             // callback when any board stop drag
    buttonClick      : function(el, boardId) {},                     // callback when the board's button is clicked
    propagationHandlers: [],                                         // the specified callback does not cancel the browser event. possible values: "click", "context"
});



