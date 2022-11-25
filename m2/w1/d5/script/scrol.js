//animazione del schroll sulla navbar

{
    document.addEventListener('scroll', function(){
        let posizion = window.scrollY;
        if(posizion >= 451){
            let nav = document.getElementsByTagName('nav');
            nav[0].classList.add('nav-scrol');
        }else{
            let nav = document.getElementsByTagName('nav');
            nav[0].classList.remove('nav-scrol');
        }
    });
}