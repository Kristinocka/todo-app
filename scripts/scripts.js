const setTitle = (container, title) => {
    const titleContainer = document.createElement('h3');
    titleContainer.innerHTML = title;
    container.appendChild(titleContainer)
};
const setInput = (container, placeholder, inputId) => {
    const appForm = document.createElement('form');
    appForm.setAttribute('id', `${inputId}-form`);
    const appInput = document.createElement('input');
    appInput.setAttribute('placeholder', placeholder);
    appInput.setAttribute('id', inputId);
    appInput.setAttribute('autocomplete', 'off')
    appForm.appendChild(appInput);
    container.appendChild(appForm)
};
const listContainer = (container, title, id) => {
    const box = document.createElement('ul');
    box.setAttribute('id', id);
    const boxTitle = document.createElement('h5');
    boxTitle.innerHTML = title;
    box.appendChild(boxTitle);
    container.appendChild(box);
};

const addTodo = (container,text) => {
    const todo = {
        text,
        checked: false,
        id: Date.now()
    };
    container.push(todo);

    const appTodo = document.querySelector('#appTodo');

    appTodo.insertAdjacentHTML('beforeend', `
    <li class="single-todo-item" data-key="${todo.id}">
      <input id="${todo.id}" type="checkbox"/>
      <label for="${todo.id}"></label>
      <span>${todo.text}</span>
      <button class="remove-todo ">X</button>
    </li>
  `);
};

document.addEventListener("DOMContentLoaded", function () {
    const appContainer = document.querySelector('.app-container');
    setTitle(appContainer, 'My todo List');
    setInput(appContainer, 'What do you want to do..', 'appInput');
    listContainer(appContainer, 'Still in progress:', 'appTodo');
    listContainer(appContainer, 'Done:', 'appDone');

    const todoList = [];
    const appForm = document.querySelector('#appInput-form');
    const appInput = document.querySelector('#appInput');
    appForm.addEventListener('submit', function (event) {
        event.preventDefault();
        addTodo(todoList,appInput.value);
        appInput.value = '';

    });

    console.log('todoList',todoList)

});
