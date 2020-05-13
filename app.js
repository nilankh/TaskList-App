// define Ui variable
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event Listeners
loadEventListeners();

// Load all even listeners
function loadEventListeners() {
    // add task event
    form.addEventListener('submit', addTask);
    // Remove task Event
    taskList.addEventListener('click', removeTask);
    // clear task event
    clearBtn.addEventListener('click', clearTasks);
}

// Add Task
function addTask(e){
    if(taskInput.value == ''){
        alert('Add a task');
    }
    
    // Create li element
    const li = document.createElement('li');
    // Addd Class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // create new link element
    const link = document.createElement('a');
    // Add Class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class = "fa fa-remove"></i>';
    // append the link to li
    li.appendChild(link);

    // append li to ul
    taskList.appendChild(li);

    // console.log(li);
    // Clear input
    taskInput.value = '';
    
    e.preventDefault();
}

// Remove Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you Sure?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
    
}

// clear tasks
// 1way to clearing tasks
// function clearTasks(){
//     taskList.innerHTML = '';
// }

// 2nd ways clearing tasks
function clearTasks(){
    // Faster
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    // https://jsperf.com/innerhtml-vs-removechild

}