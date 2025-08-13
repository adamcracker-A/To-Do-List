const taskInput = document.getElementById('task');

function Add() {
    const task = taskInput.value.trim();
    if (task === '') {
        alert('Please enter a task');
        return;
    }
    const ol = document.getElementById('taskList');
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = task;

    // Mark as completed button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✔';
    completeBtn.className = 'movebtn';
    completeBtn.onclick = function() {
        li.classList.toggle('completed');
    };

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'deletebtn';
    deleteBtn.onclick = function() {
        ol.removeChild(li);
    };

    // Move up button
    const upBtn = document.createElement('button');
    upBtn.textContent = '☝';
    upBtn.className = 'movebtn';
    upBtn.onclick = function() {
        if (li.previousElementSibling) {
            ol.insertBefore(li, li.previousElementSibling);
        }
    };

    // Move down button
    const downBtn = document.createElement('button');
    downBtn.textContent = '👇';
    downBtn.className = 'movebtn';
    downBtn.onclick = function() {
        if (li.nextElementSibling) {
            ol.insertBefore(li.nextElementSibling, li);
        }
    };

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    li.appendChild(upBtn);
    li.appendChild(downBtn);
    ol.appendChild(li);
    taskInput.value = '';
}