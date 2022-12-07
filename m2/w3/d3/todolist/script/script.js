import {Task} from './modules/Task.js';

let tasks = [];

if(JSON.parse(localStorage.getItem(`task`))){
    tasks = JSON.parse(localStorage.getItem(`task`));
    for(let i of tasks){
        let task = new Task(i.description);
        task.writeTask();
    }
}

let puls = document.querySelector('#input-button');
puls.addEventListener('click', function(){
    let inputTask = document.querySelector('#task-text');
    let task = new Task(inputTask.value);
    inputTask.value = '';

    task.writeTask();
    tasks.push(task);
    
    localStorage.setItem(`task`, JSON.stringify(tasks));
})