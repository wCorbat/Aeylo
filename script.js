
/* Slide */
var counter = 1;
setInterval(function(){
document.getElementById('radio' + counter).checked = true;
counter++;
if(counter > 4){
counter = 1;
}
}, 6000);

/* Reveal 

window.sr = ScrollReveal({ reset: true });

sr.reveal('nav', { duration: 1000 });

sr.reveal('.slides, .destaques_container, .abstrato_container, .anime_container, .cartoon_container, .manga_container, .realista_container, .pintura_container, .tresd_container, .planos_container, .title-section-cards, .titulo-fim-de-secao',  { duration: 1000 });

*/

/* Menu Hamburguer Mobile */

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');   
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);


/* Initialize Swiper */

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
  });





