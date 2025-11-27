let todoarr=[];

const nameInput = document.getElementById("name");
const descInput = document.getElementById("desc");
const button = document.getElementById("action-button");
button.addEventListener('click',check);

function check(){
    const name = nameInput.value.trim();
    const desc = descInput.value.trim();
    
    if (name === '' || desc === ''){
        alert("Please Enter value for both fields");
    }
    else{
        createTodo(name,desc);
    }
    displayTodo();
}

function createTodo(name,desc){
    const todo={
        name:name,
        desc:desc,
        time: new Date().toDateString(),
    };
    todoarr.unshift(todo);
    clear();
}

function clear() {
    nameInput.value = '';
    descInput.value = '';
}

function displayTodo() {
    listitems.innerHTML = '';
    
    todoarr.forEach((todo, index) => {
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';
        todoItem.innerHTML = `
            <h3>${todo.name}</h3>
            <p>${todo.desc}</p>
            <div class="timestamp">${todo.time}</div>
            <div class="button-group">
                <button class="edit-btn" onclick="editTodo(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
            </div>`; 
        listitems.appendChild(todoItem);
    });
}

function editTodo(index){
    document.getElementById("main-title").innerHTML="Edit To-Do activity";
    document.getElementById("name").value=todoarr[index].name;
    document.getElementById("desc").value=todoarr[index].desc;
    document.getElementById("action-button").innerHTML="Edit";

    deleteTodo(index);

    button.addEventListener('click',reset);
}

function deleteTodo(index){
    todoarr.splice(index, 1);

    displayTodo();
}

function reset(){
    document.getElementById("main-title").innerHTML="Create To-Do activity";
    document.getElementById("name").value='';
    document.getElementById("desc").value='';
    document.getElementById("action-button").innerHTML="Save";
}
