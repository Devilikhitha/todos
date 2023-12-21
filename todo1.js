


// Container creation
let container = document.createElement("div");
container.classList.add("inputContainer");
document.body.appendChild(container);

// Input element
let inputEl = document.createElement("input");
inputEl.type = 'text';
inputEl.placeholder = 'What needs to be done?';
inputEl.classList.add("textBox");
container.appendChild(inputEl);

// Add button
let buttonEl = document.createElement("button");
buttonEl.innerText = "Add to List";
buttonEl.classList.add("saveButton");
buttonEl.addEventListener("click", function () {
    addTask(inputEl.value);
    inputEl.value = "";
});
container.appendChild(buttonEl);

// Radio buttons container
const radioContainer = document.createElement('div');
radioContainer.style.display = 'inline-block';

// Radio buttons
const allRadio = document.createElement('input');
allRadio.type = 'radio';
allRadio.name = 'status';
allRadio.value = 'all';
allRadio.id = 'all';
const allLabel = document.createElement('label');
allLabel.htmlFor = 'all';
allLabel.textContent = 'All';

const completedRadio = document.createElement('input');
completedRadio.type = 'radio';
completedRadio.name = 'status';
completedRadio.value = 'completed';
completedRadio.id = 'completed';
const completedLabel = document.createElement('label');
completedLabel.htmlFor = 'completed';
completedLabel.textContent = 'Completed';

const notCompletedRadio = document.createElement('input');
notCompletedRadio.type = 'radio';
notCompletedRadio.name = 'status';
notCompletedRadio.value = 'not_completed';
notCompletedRadio.id = 'not_completed';
const notCompletedLabel = document.createElement('label');
notCompletedLabel.htmlFor = 'not_completed';
notCompletedLabel.textContent = 'Not Completed';

// Appending radio buttons to container
radioContainer.appendChild(allRadio);
radioContainer.appendChild(allLabel);
radioContainer.appendChild(completedRadio);
radioContainer.appendChild(completedLabel);
radioContainer.appendChild(notCompletedRadio);
radioContainer.appendChild(notCompletedLabel);

// Appending radio button container to the main container
container.appendChild(radioContainer);

// Tasks container
let tasksContainer = document.createElement("div");
tasksContainer.classList.add("taskContainer");
container.appendChild(tasksContainer);

// Tasks heading
let tasksHeading = document.createElement("h1");
tasksHeading.innerText = "My Tasks";
tasksContainer.appendChild(tasksHeading);

// Array to store tasks
let tasks = [];

// Function to add a task
function addTask(taskContent) {
    if (taskContent.trim() !== '') {
        tasks.push({ content: taskContent, completed: false });
        renderTasks();
    } else {
        alert("Please enter a task before saving.");
    }
}

// Function to render tasks with filter options
function renderTasks(filter = 'all') {
    tasksContainer.innerHTML = '';
    tasksContainer.appendChild(tasksHeading);

    let filteredTasks = tasks;
    if (filter === 'completed') {
        filteredTasks = tasks.filter(task => task.completed);
    } else if (filter === 'not_completed') {
        filteredTasks = tasks.filter(task => !task.completed);
    }

    filteredTasks.forEach((task, index) => {
        let taskElement = document.createElement("div");
        taskElement.classList.add("task");

        let taskContentDiv = document.createElement("div");
        taskContentDiv.innerText = task.content;
        if (task.completed) {
            taskContentDiv.classList.add("strike");
        }
        taskElement.appendChild(taskContentDiv);

        let buttonContainer = document.createElement("div");

        let doneButton = document.createElement("button");
        doneButton.innerText = task.completed ? "Undo" : "Done";
        doneButton.classList.add("taskButton");
        doneButton.addEventListener("click", function () {
            tasks[index].completed = !tasks[index].completed;
            renderTasks(filter);
        });
        buttonContainer.appendChild(doneButton);

        let delButton = document.createElement("button");
        delButton.innerText = "Delete";
        delButton.classList.add("taskButton");
        delButton.style.display = task.completed ? 'inline-block' : 'none';
        delButton.addEventListener("click", function () {
            taskElement.remove();
            tasks.splice(index, 1);
            renderTasks(filter);
        });
        buttonContainer.appendChild(delButton);

        let editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.classList.add("taskButton");
        editButton.addEventListener("click", function () {
            inputEl.value = task.content;
            let originalContent = task.content;

            let saveEditButton = document.createElement("button");
            saveEditButton.innerText = "Save Edit";
            saveEditButton.classList.add("taskButton");

            saveEditButton.addEventListener('click', function () {
                task.content = inputEl.value;
                if (originalContent !== inputEl.value) {
                    renderTasks(filter);
                }

                // Clear input field and revert button back to "Add to List"
                inputEl.value = '';
                saveEditButton.replaceWith(buttonEl);
            });

            // Replace Add to List button with Save Edit button
            buttonEl.replaceWith(saveEditButton);

            renderTasks(filter);
        });
        buttonContainer.appendChild(editButton);

        if (task.completed) {
            editButton.style.display = "none";
        }

        taskElement.appendChild(buttonContainer);
        tasksContainer.appendChild(taskElement);
    });
}

// Adding event listeners for radio buttons
allRadio.addEventListener('change', function () {
    renderTasks('all');
});

completedRadio.addEventListener('change', function () {
    renderTasks('completed');
});

notCompletedRadio.addEventListener('change', function () {
    renderTasks('not_completed');
});

// Initial rendering
renderTasks();

console.log(tasks);


























// // Container creation
// let container = document.createElement("div");
// container.classList.add("inputContainer");
// document.body.appendChild(container);

// // Input element
// let inputEl = document.createElement("input");
// inputEl.type = 'text';
// inputEl.placeholder = 'What needs to be done?';
// inputEl.classList.add("textBox");
// container.appendChild(inputEl);

// // Add button
// let buttonEl = document.createElement("button");
// buttonEl.innerText = "Add to List";
// buttonEl.classList.add("saveButton");
// buttonEl.addEventListener("click", function () {
//     addTask(inputEl.value);
//     inputEl.value = "";
// });
// container.appendChild(buttonEl);

// // Radio buttons container
// const radioContainer = document.createElement('div');
// radioContainer.style.display = 'inline-block';

// // Radio buttons
// const allRadio = document.createElement('input');
// allRadio.type = 'radio';
// allRadio.name = 'status';
// allRadio.value = 'all';
// allRadio.id = 'all';
// const allLabel = document.createElement('label');
// allLabel.htmlFor = 'all';
// allLabel.textContent = 'All';

// const completedRadio = document.createElement('input');
// completedRadio.type = 'radio';
// completedRadio.name = 'status';
// completedRadio.value = 'completed';
// completedRadio.id = 'completed';
// const completedLabel = document.createElement('label');
// completedLabel.htmlFor = 'completed';
// completedLabel.textContent = 'Completed';

// const notCompletedRadio = document.createElement('input');
// notCompletedRadio.type = 'radio';
// notCompletedRadio.name = 'status';
// notCompletedRadio.value = 'not_completed';
// notCompletedRadio.id = 'not_completed';
// const notCompletedLabel = document.createElement('label');
// notCompletedLabel.htmlFor = 'not_completed';
// notCompletedLabel.textContent = 'Not Completed';

// // Appending radio buttons to container
// radioContainer.appendChild(allRadio);
// radioContainer.appendChild(allLabel);
// radioContainer.appendChild(completedRadio);
// radioContainer.appendChild(completedLabel);
// radioContainer.appendChild(notCompletedRadio);
// radioContainer.appendChild(notCompletedLabel);

// // Appending radio button container to the main container
// container.appendChild(radioContainer);

// // Tasks container
// let tasksContainer = document.createElement("div");
// tasksContainer.classList.add("taskContainer");
// container.appendChild(tasksContainer);

// // Tasks heading
// let tasksHeading = document.createElement("h1");
// tasksHeading.innerText = "My Tasks";
// tasksContainer.appendChild(tasksHeading);

// // Array to store tasks
// let tasks = [];

// // Function to add a task
// function addTask(taskContent) {
//     if (taskContent.trim() !== '') {
//         tasks.push({ content: taskContent, completed: false });
//         renderTasks();
//     } else {
//         alert("Please enter a task before saving.");
//     }
// }



// // ... (Previous code remains unchanged up to the rendering of tasks)

// // Function to render tasks
// function renderTasks() {
//     tasksContainer.innerHTML = '';
//     tasksContainer.appendChild(tasksHeading);

//     tasks.forEach((task, index) => {
//         let taskElement = document.createElement("div");
//         taskElement.classList.add("task");

//         let taskContentDiv = document.createElement("div");
//         taskContentDiv.innerText = task.content;
//         if (task.completed) {
//             taskContentDiv.classList.add("strike");
//         }
//         taskElement.appendChild(taskContentDiv);

//         let buttonContainer = document.createElement("div");

//         let doneButton = document.createElement("button");
//         doneButton.innerText = task.completed ? "Undo" : "Done";
//         doneButton.classList.add("taskButton");
//         doneButton.addEventListener("click", function () {
//             tasks[index].completed = !tasks[index].completed;
//             renderTasks();
//         });
//         buttonContainer.appendChild(doneButton);

//         let delButton = document.createElement("button");
//         delButton.innerText = "Delete";
//         delButton.classList.add("taskButton");
//         delButton.style.display = task.completed ? 'inline-block' : 'none';
//         delButton.addEventListener("click", function () {
//             taskElement.remove();
//             tasks.splice(index, 1);
//             renderTasks();
//         });
//         buttonContainer.appendChild(delButton);

//         let editButton = document.createElement("button");
//         editButton.innerText = "Edit";
//         editButton.classList.add("taskButton");
//         editButton.addEventListener("click", function () {
//             inputEl.value = task.content;
//             let originalContent = task.content;

//             let saveEditButton = document.createElement("button");
//             saveEditButton.innerText = "Save Edit";
//             saveEditButton.classList.add("taskButton");

//             saveEditButton.addEventListener('click', function () {
//                 task.content = inputEl.value;
//                 if (originalContent !== inputEl.value) {
//                     renderTasks();
//                 }

//                 // Clear input field and revert button back to "Add to List"
//                 inputEl.value = '';
//                 saveEditButton.replaceWith(buttonEl);
//             });

//             // Replace Add to List button with Save Edit button
//             buttonEl.replaceWith(saveEditButton);

//             renderTasks();
//         });
//         buttonContainer.appendChild(editButton);

//         if (task.completed) {
//             editButton.style.display = "none";
//         }

//         taskElement.appendChild(buttonContainer);
//         tasksContainer.appendChild(taskElement);
//     });
// }

// // Initial rendering
// renderTasks(); 


