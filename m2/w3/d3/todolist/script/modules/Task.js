export class Task {
    constructor(description){
        this.description = description;
    }

    get button(){
        let button = document.createElement("button");
        button.classList.add("btn","btn-danger", "rounded-circle", "position-static");
        button.innerHTML = `<i class="bi bi-x-lg"></i>`;

        button.style.zIndex = '1000';

        this.addEvent(button);
        return button;
    }

    writeTask(){
        let container = document.querySelector('#todo-fare');
        let div = document.createElement("div");

        div.innerHTML = `<p class="d-flex m-0 align-items-center">${this.description}</p>`;
        div.classList.add('container-fluid','d-flex','justify-content-between', 'p-3' ,'border', 'border-dark', 'rounded-4', 'my-2');
        //this.taskCompleted(div);
        div.append(this.button);
        container.append(div);
    }

    
    taskCompleted(task){
        task.addEventListener('click', function(){
            let cont = document.querySelector('#todo-fatte');

            task.style.backgroundColor= '#00FF00';
            task.style.textDecoration = 'line-through';

            cont.append(task);
        })    
    }
    

    addEvent(bottone){
        bottone.addEventListener("click",function(){
            bottone.parentElement.remove();
        })
    }
}