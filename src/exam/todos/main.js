// 코드 구현
const todoInput = document.querySelector(".input-todo");
const todoList = document.querySelector(".todos");

const todos = [
    {
        id: 1,
        content: "HTML",
        completed: true
    },
    {
        id: 2,
        content: "CSS",
        completed: true
    },
    {
        id: 3,
        content: "Javascript",
        completed: false
    },
]

function loadMsg() {
    todoList.innerHTML = "로딩 중...";
    setTimeout(() => { loadTodoList(todos)}, 1000);
}

function loadTodoList(todos) {
    todoList.innerHTML = todos.map(todo => createHTMLElemnet(todo)).join('');
}

function createHTMLElemnet(todo) {
        return `<li>
            <label>
                <input type="checkbox" ${todo.completed ? "checked" : ""}> ${todo.content}
            </label>
                <span> X </span>
        </li>`
}

loadMsg();