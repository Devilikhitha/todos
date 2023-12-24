

const tasksArray = [];
let editTask = null;

function addItem() {
    const inputElement = document.querySelector('.text-input');
    const inputValue = inputElement.value.trim();

    if (inputValue === '') {
        return;
    }

    if (editTask !== null) {
        tasksArray[editTask.index].content = inputValue;
        tasksArray[editTask.index].editing = false;
        editTask = null;
    } else {
        const newItem = { content: inputValue, completed: false, editing: false };
        tasksArray.push(newItem);
    }

    inputElement.value = '';
    const activeFilter = document.querySelector('input[name="filter"]:checked').value;
    showItems(activeFilter);
    updateAddToListButtonText();
}

function handleDone(index) {
    tasksArray[index].completed = !tasksArray[index].completed;
    tasksArray[index].doneButtonText = tasksArray[index].completed ? 'Undo' : 'Done';
    tasksArray[index].editButtonText = tasksArray[index].completed ? 'Delete' : 'Edit';

    const activeFilter = document.querySelector('input[name="filter"]:checked').value;
    showItems(activeFilter);
    updateAddToListButtonText();
}

function handleEditOrDelete(index) {
    tasksArray[index].completed ? handleDelete(index) : handleEdit(index);
    const activeFilter = document.querySelector('input[name="filter"]:checked').value;
    showItems(activeFilter);
    updateAddToListButtonText();
}

function handleDelete(index) {
    tasksArray.splice(index, 1);
    showItems();
    updateAddToListButtonText();
}

function handleEdit(index) {
    const inputElement = document.querySelector('.text-input');
    inputElement.value = tasksArray[index].content;
    editTask = { index: index };
    showItems();
    updateAddToListButtonText();
}

function showItems(filter) {
    const itemsContainer = document.querySelector('.displayed-items-container');
    itemsContainer.innerHTML = '';

    tasksArray.forEach((item, i) => {
        if ((filter === 'completed' && !item.completed) || (filter === 'notcompleted' && item.completed)) {
            return;
        }

        const listItem = document.createElement('li');
        const textSpan = document.createElement('span');
        textSpan.textContent = item.content;
        textSpan.style.textDecoration = item.completed ? 'line-through' : 'none';

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');

        const doneButton = document.createElement('button');
        doneButton.textContent = item.doneButtonText || 'Done';
        doneButton.classList.add('done');
        doneButton.addEventListener('click', () => handleDone(i));

        const editButton = document.createElement('button');
        editButton.textContent = item.editButtonText || 'Edit';
        editButton.classList.add('edit');
        editButton.addEventListener('click', () => handleEditOrDelete(i));

        listItem.appendChild(textSpan);
        buttonContainer.appendChild(doneButton);
        buttonContainer.appendChild(editButton);
        listItem.appendChild(buttonContainer);
        itemsContainer.appendChild(listItem);
    });
}

function updateAddToListButtonText() {
    const addToDoListButton = document.querySelector('.save-button');
    addToDoListButton.textContent = editTask !== null ? 'Save Edit' : 'Add to List';
}

function filterItems(filter) {
    showItems(filter);
}

document.querySelector('.save-button').addEventListener('click', addItem);
document.querySelector('.filter-container').addEventListener('click', (event) => {
    if (event.target.matches('input[type="radio"]')) {
        filterItems(event.target.value);
    }
});

showItems();












































// let tasksArray = [];
// let editTask = null;

// function addItem() {
//     const inputElement = document.querySelector('.text-input');
//     const inputValue = inputElement.value.trim();

//     if (inputValue === '') {
//         return;
//     }

//     if (editTask !== null) {
//         tasksArray[editTask.index].content = inputValue;
//         tasksArray[editTask.index].editing = false;
//         editTask = null;
//     } else {
//         const newItem = { content: inputValue, completed: false, editing: false };
//         tasksArray.push(newItem);
//     }

//     inputElement.value = '';
//     showItems(getActiveFilter());
//     updateAddToListButtonText();
// }

// function handleDone(index) {
//     tasksArray[index].completed = !tasksArray[index].completed;

//     if (tasksArray[index].completed) {
//         tasksArray[index].doneButtonText = 'Undone';
//         tasksArray[index].editButtonText = 'Delete';
//     } else {
//         tasksArray[index].doneButtonText = 'Done';
//         tasksArray[index].editButtonText = 'Edit';
//     }

//     showItems(getActiveFilter());
//     updateAddToListButtonText();
// }

// function handleEditOrDelete(index) {
//     if (tasksArray[index].completed) {
//         handleDelete(index);
//     } else {
//         handleEdit(index);
//     }

//     showItems(getActiveFilter());
//     updateAddToListButtonText();
// }

// function handleDelete(index) {
//     tasksArray.splice(index, 1);
//     showItems();
//     updateAddToListButtonText();
// }

// function handleEdit(index) {
//     const inputElement = document.querySelector('.text-input');
//     inputElement.value = tasksArray[index].content;
//     editTask = { index: index };
//     showItems();
//     updateAddToListButtonText();
// }

// function showItems(filter) {
//     const itemsContainer = document.querySelector('.displayed-items-container');
//     itemsContainer.innerHTML = '';

//     tasksArray.forEach((item, i) => {
//         if (filter === 'completed' && !item.completed) {
//             return;
//         }

//         if (filter === 'notcompleted' && item.completed) {
//             return;
//         }

//         const listItem = document.createElement('li');
//         const textSpan = document.createElement('span');
//         textSpan.textContent = item.content;

//         if (item.completed) {
//             textSpan.style.textDecoration = 'line-through';
//         }

//         const buttonContainer = document.createElement('div');
//         buttonContainer.classList.add('button-container');

//         const doneButton = document.createElement('button');
//         doneButton.textContent = item.completed ? 'Undone' : 'Done';
//         doneButton.classList.add('done');
//         doneButton.addEventListener('click', () => handleDone(i));

//         const editButton = document.createElement('button');
//         editButton.textContent = item.completed ? 'Delete' : 'Edit';
//         editButton.classList.add('edit');
//         editButton.addEventListener('click', () => handleEditOrDelete(i));

//         listItem.appendChild(textSpan);
//         buttonContainer.appendChild(doneButton);
//         buttonContainer.appendChild(editButton);
//         listItem.appendChild(buttonContainer);
//         itemsContainer.appendChild(listItem);
//     });
// }

// function updateAddToListButtonText() {
//     const addToDoListButton = document.querySelector('.save-button');
//     addToDoListButton.textContent = editTask !== null ? 'Save to List' : 'Add to List';
// }

// function filterItems(filter) {
//     showItems(filter);
// }

// function getActiveFilter() {
//     return document.querySelector('input[name="filter"]:checked').value;
// }

// function initializeListeners() {
//     document.querySelector('.save-button').addEventListener('click', addItem);
//     document.querySelectorAll('input[name="filter"]').forEach((radio) => {
//         radio.addEventListener('click', () => filterItems(getActiveFilter()));
//     });
// }

// showItems(getActiveFilter());
// initializeListeners();
