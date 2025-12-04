var todoarr = [];
var nameInput = document.getElementById("name");
var descInput = document.getElementById("desc");
var button = document.getElementById("action-button");
button.addEventListener('click', check);
function check() {
    var name = nameInput.value.trim();
    var desc = descInput.value.trim();
    if (name === '' || desc === '') {
        alert("Please Enter value for both fields");
    }
    else {
        createTodo(name, desc);
    }
    displayTodo();
}
function createTodo(name, desc) {
    var todo = {
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
    var list = document.querySelector('#listitems');
    var t = document.querySelector("#list-item");
    list.innerHTML = '';
    var fragment = new DocumentFragment();
    todoarr.forEach(function (i, index) {
        var clone = t.content.cloneNode(true);
        var cn = clone.querySelector('.item-name');
        if (cn) {
            cn.textContent = i.name;
        }
        var cd = clone.querySelector('.item-desc');
        if (cd) {
            cd.textContent = i.desc;
        }
        var ct = clone.querySelector('.item-timestamp');
        if (ct) {
            ct.textContent = i.time;
        }
        var ce = clone.querySelector('.edit-btn');
        if (ce) {
            ce.onclick = function () { editTodo(index); };
        }
        var cdel = clone.querySelector('.delete-btn');
        if (cdel) {
            cdel.onclick = function () { deleteTodo(index); };
        }
        list.append(clone);
    });
    list.appendChild(fragment);
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
console.log("hkjdfi");
