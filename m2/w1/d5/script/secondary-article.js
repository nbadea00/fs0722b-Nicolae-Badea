//Creazione e inserimento degli articoli secondari
{
    fetch('assets/json/secondary-article.json').then(result => result.json()).then(function (data) {
        let containerArticles = document.querySelector('.side-content');
        for (let i of data.article) {
            let article = document.createElement('article');
            let divUtente = document.createElement('div');
            let container = document.createElement('div');
            let user = document.createElement('h4');
            let imgLogo = document.createElement('img');
            let title = document.createElement('h2');
            let description = document.createElement('p');
            let bottom = document.createElement('div');
            let contInfoArt = document.createElement('div');
            let date = document.createElement('p');
            let category = document.createElement('span');
            let star = document.createElement('img');
            let bookmark = document.createElement('img');
            let img = document.createElement('img');


            imgLogo.src = `assets/imgs/image${Number(i.id)+6}.png`;//ho cambiato nome e formano alle immagini per automatizare
            user.textContent = i.name;

            title.textContent =i.title;
            description.textContent = i.description;

            date.textContent = i.date;
            category.textContent = i.type

            if(i.star)star.src= 'assets/imgs/svg/star.svg';
            bookmark.src= 'assets/imgs/svg/bookmark.svg';

            img.src= `assets/imgs/image_${Number(i.id)+6}.png`;//ho cambiato nome e formano alle immagini per automatizare

            divUtente.classList.add('user');
            bottom.classList.add('bottom');

            divUtente.append(imgLogo);
            divUtente.append(user);

            contInfoArt.append(date);
            contInfoArt.append(category);
            contInfoArt.append(star);

            bottom.append(contInfoArt);
            bottom.append(bookmark);

            container.append(divUtente);
            container.append(title);
            container.append(description);
            container.append(bottom);

            article.append(container);
            article.append(img);
            containerArticles.append(article);
        }
    });
}