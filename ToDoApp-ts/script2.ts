interface item{
    name: string,
    desc: string,
    time: string
}

const todoarr :item[]=[];

const nameInput = document.getElementById("name") as HTMLInputElement;
const descInput = document.getElementById("desc") as HTMLInputElement;
const button = document.getElementById("action-button") as HTMLInputElement;
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

function createTodo(name: string, desc: string) :void {
    const todo = {
        name: name,
        desc: desc,
        time: new Date().toDateString(),
    };
    todoarr.unshift(todo);
    clear();
    console.log(todoarr);
}

function clear():void {
    nameInput.value = '';
    descInput.value = '';
}

function displayTodo() {
    const list = document.querySelector('#listitems') as HTMLDivElement;
    const t=<HTMLTemplateElement>document.querySelector("#list-item");
    list.innerHTML = '';
    let fragment = new DocumentFragment();
  
    todoarr.forEach((i:any,index:number) => {
        
        let clone = t.content.cloneNode(true) as DocumentFragment;
        let cn=(clone.querySelector('.item-name')as HTMLElement);
        if(cn){cn.textContent=i.name;}

        let cd=(clone.querySelector('.item-desc')as HTMLElement);
        if(cd){cd.textContent=i.desc}
        
        let ct=(clone.querySelector('.item-timestamp')as HTMLElement);
        if(ct){ct.textContent=i.time;}
        
        let ce=(clone.querySelector('.edit-btn')as HTMLButtonElement)
        if(ce){ce.onclick=function(){editTodo(index)};}
        
        let cdel=(clone.querySelector('.delete-btn')as HTMLButtonElement);
        if(cdel){cdel.onclick=function(){deleteTodo(index)};}
        
        list.append(clone);
    });
    list.appendChild(fragment);
}

function editTodo(index: number): void {
    (document.getElementById("main-title")as HTMLElement).innerHTML = "Edit To-Do activity";
    (document.getElementById("name")as HTMLInputElement).value = todoarr[index].name;
    (document.getElementById("desc")as HTMLInputElement).value = todoarr[index].desc;
    (document.getElementById("action-button")as HTMLElement).innerHTML = "Edit";

    deleteTodo(index);

    button.addEventListener('click', reset);
}

function deleteTodo(index: number) :void {
    todoarr.splice(index, 1);

    displayTodo();
}

function reset() {
    (document.getElementById("main-title")as HTMLElement).innerHTML = "Create To-Do activity";
    (document.getElementById("name")as HTMLInputElement).value = '';
    (document.getElementById("desc")as HTMLInputElement).value = '';
    (document.getElementById("action-button")as HTMLElement).innerHTML = "Save";
}

console.log("hkjdfi")