export class Users {
    constructor(obj){
        this.username = obj.username,
        this.firstName = obj.firstName,
        this.lastName = obj.lastName,
        this.gender = obj.gender,
        this.profileURL = obj.profileURL,
        this.email = obj.email
    }

    createCard(){//metodo per creare le carte
        let div = document.createElement('div');
        let userList = document.querySelector('#user-list');

        div.classList.add('card');
        
        div.innerHTML = `<div><img class="img" title='profile picture' src='./assets/${this.profileURL}'><p>${this.firstName} ${this.lastName}</p><p><a href='mailto:${this.email}'>${this.email}</a></p></div>`;

        this.expand(div,this);

        userList.append(div);
    }

    createExtendCard(){//metodo per creare la carta espansa
        let div = document.createElement('div');
        let extendCard = document.querySelector('#extend-card');
        let bg = document.querySelector('.bg');

        extendCard.innerHTML = '';//elimino eventualmente la carta precedente
        bg.style.display = 'block';
        
        div.classList.add('extend-card');
        
        div.innerHTML = `<img title='profile picture' src='./assets/${this.profileURL}'><p>Username: ${this.username}</p><div><p>First Name: ${this.firstName}<p>Last Name: ${this.lastName}</p></div><p>Gender: ${this.gender}</p><p>Email: <a href='mailto:${this.email}'>${this.email}</a></p>`;
        
        this.closeExtendCard(div,bg);
        extendCard.append(div);
    }

    closeExtendCard(element,bg){//aggiunta evento per chiudere la carta espansa clicando sul bg
        bg.addEventListener('click', function(){
            element.style.display = 'none';
            bg.style.display = 'none';
        })
    }

    expand(element, user){//aggiunta evento alla carta
        element.addEventListener('click', function(){
            user.createExtendCard();
        })
    }
}