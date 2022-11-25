//js per creare gli articoli nel main

{
    fetch('assets/json/article.json').then(result => result.json()).then(function (data) {
        let articleContainer = document.querySelector('.content');
        for (let i of data.article) {
            let article = document.createElement('article');
            let span = document.createElement('span');
            let div = document.createElement('div');
            let img = document.createElement('img');
            let h4 = document.createElement('h4');
            let h2 = document.createElement('h2');
            let date = document.createElement('p');

            span.textContent = i.id;
            h4.textContent = i.name;
            h2.textContent = i.descriptio;
            img.src = `assets/imgs/image${i.id}.png`;
            img.alt = i.name;
            date.textContent = i.date;

            div.append(span);
            div.append(img);
            div.append(h4);
            article.append(div);
            article.append(h2);
            article.append(date);

            articleContainer.append(article);
        }
    });
}