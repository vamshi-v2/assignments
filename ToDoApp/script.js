let todoarr = [];

const nameInput = document.getElementById("name");
const descInput = document.getElementById("desc");
const button = document.getElementById("action-button");
button.addEventListener('click', check);

function check() {
    const name = nameInput.value.trim();
    const desc = descInput.value.trim();

    if (name === '' || desc === '') {
        alert("Please Enter value for both fields");
    }
    else {
        createTodo(name, desc);
    }
    displayTodo();
}

function createTodo(name, desc) {
    const todo = {
        name: name,
        desc: desc,
        time: new Date().toDateString(),
    };
    todoarr.unshift(todo);
    clear();
    console.log(todoarr);
}

function clear() {
    nameInput.value = '';
    descInput.value = '';
}

function displayTodo() {
    const template = document.querySelector('#list-item');
    listitems.innerHTML = '';
  
    todoarr.forEach((i,index) => {
        let clone = template.content.cloneNode(true)
        clone.querySelector('.item-name').textContent = i.name;
        clone.querySelector('.item-desc').textContent = i.desc;
        clone.querySelector('.item-timestamp').textContent = i.time;
        clone.querySelector('.edit-btn').onclick=()=>editTodo(index);
        clone.querySelector('.delete-btn').onclick=()=>deleteTodo(index);
        listitems.append(clone);
    })
}

function editTodo(index) {
    document.getElementById("main-title").innerHTML = "Edit To-Do activity";
    document.getElementById("name").value = todoarr[index].name;
    document.getElementById("desc").value = todoarr[index].desc;
    document.getElementById("action-button").innerHTML = "Edit";

    deleteTodo(index);

    button.addEventListener('click', reset);
}

function deleteTodo(index) {
    todoarr.splice(index, 1);

    displayTodo();
}

function reset() {
    document.getElementById("main-title").innerHTML = "Create To-Do activity";
    document.getElementById("name").value = '';
    document.getElementById("desc").value = '';
    document.getElementById("action-button").innerHTML = "Save";
}
