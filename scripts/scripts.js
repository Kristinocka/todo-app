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
    appForm.appendChild(appInput);
    container.appendChild(appForm)
};


const addTodo = (container,text) => {
    const todo = {
        text,
        checked: false,
        id: Date.now()
    };
    console.log(todo)
    container.push(todo)
};

document.addEventListener("DOMContentLoaded", function () {
    const appContainer = document.querySelector('.app-container');
    setTitle(appContainer, 'My TODO List');
    setInput(appContainer, 'What do you want to do..', 'appInput')

    let todoList = [];
    const appForm = document.querySelector('#appInput-form');
    const appInput = document.querySelector('#appInput');
    console.log(appInput);
    console.log(appForm);
    appForm.addEventListener('submit', function () {
        console.log(appInput.value);
        addTodo(todoList,appInput.value)
    });

    console.log(todoList)

});
