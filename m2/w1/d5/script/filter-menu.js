//js per creare il menu laterale


{
    let category = ['Programming','Data Science','Technology','Self Improvement','Writing','Relationship','Machine Learning','Productivity','Politics'];
    let containerCategory = document.querySelector('.categories');
    for(let i of category){
        let p = document.createElement('p');
        let a = document.createElement('a');

        p.classList.add('category');
        a.textContent = i;
        a.href = '#';
        a.title = i;
        p.append(a);
        containerCategory.append(p);
    }
}
{
    let category = ['Help','Status','Writers','Blog','Careers','Privacy','Terms','About','Text to speech'];
    let containerInfo = document.querySelector('.infos');
    for(let i of category){
        let p = document.createElement('p');
        let a = document.createElement('a');

        p.classList.add('info');
        a.textContent = i;
        a.href = '#';
        a.title = i;
        p.append(a);
        containerInfo.append(p);
    }
}