import "./style.css";

const liste = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("form > input");
const span = document.querySelector("span");

const todos = [
    {
        text: "Maron. Combien sont-ils ?",
        done: false
    },
    {
        text: "J'ai grandi au 511 Kinderheim.",
        done: false
    }
];

form.addEventListener("submit", event => {
    event.preventDefault();
    const value = input.value;
    input.value = "";
    addTodo(value);
});


const afficherTodo = () => {
    const allTodos = todos.map((todo, index) => {
        return CreateTodoElement(todo, index);
    });
    liste.innerHTML = "";
    liste.append(...allTodos);
};

const CreateTodoElement = (todo, index) => {
    const onetodo = document.createElement("li");
    const buttonDelete = document.createElement("button");
    buttonDelete.innerHTML = "Supprimer";
    buttonDelete.addEventListener("click", event => {
        event.stopPropagation();
        deleteTodo(index);
    });
    onetodo.innerHTML = `<span class="todo ${todo.done ? "done" : ""}"></span>
    <p>${todo.text}</p>`;
    onetodo.append(buttonDelete);
    onetodo.addEventListener("click", event => {
        checkTodo(index);
    });
    return onetodo;
};

const addTodo = text => {
    todos.push({
        text,
        done:false
    });
    afficherTodo();
}

const deleteTodo = index => {
  todos.splice(index, 1);
  afficherTodo();
};

const checkTodo = index => {
    todos[index].done = !todos[index].done;
    afficherTodo();
}

afficherTodo();