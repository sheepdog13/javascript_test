const todoInput = document.querySelector("#todo");

const todoAddBtn = document.querySelector("#add_todo");

const todoBoard = document.querySelector("#todo-board");

todoAddBtn.addEventListener("click",addTodo);

function addTodo() {
    const text = todoInput.value;

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const textNode = document.createTextNode(text);
    
    const button = document.createElement("button");

    li.appendChild(checkbox);
    li.appendChild(textNode);
    li.appendChild(button);

    todoBoard.append(li);
    todoInput.value = "";
    button.innerHTML = "X";

    checkbox.addEventListener("click", todoCheck);

    button.addEventListener("click", todoDelete);

}

function todoCheck(e) {
    const li = e.target.parentNode;
    if (e.target.checked) 
        li.style.color = "lightgray";
    else 
        li.style.color = "black";
}


function todoDelete(e) {
    const li = e.target.parentNode;
    li.remove();
}






