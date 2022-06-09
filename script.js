
/* Slide */

var counter = 1;
setInterval(function(){
document.getElementById('radio' + counter).checked = true;
counter++;
if(counter > 4){
counter = 1;
}
}, 6000);

/* Efeito mostrar as imagens ao rolar a página pela primeira vez*/

$(window).on("load scroll", function(){
    var threshold = 30; // porcentagem da altura visível do elemento que aparecer na tela para iniciar a animação
     $(".mostrar").each(function(){
         var el = $(this);
         var eleHeight = el.outerHeight(); // altura da div
         var eleTopo = el.offset().top; // distancia da div ao topo do documento
         var scrlTopo = $(window).scrollTop(); // quanto foi rolada a janela
         var distance = eleTopo-scrlTopo; // distancia da div ao topo da janela
         var altJanela = window.innerHeight; // altura da janela
         if(distance <= altJanela-(eleHeight/(threshold/10))) {
             el.animate({ 'opacity': 1 }, 1200); // 1200 = 1,2 segundo da animação. Quanto menor, mais rápido
         }
     });
 });

/* Menu Hamburguer Mobile */

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');   
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);


/* Initialize Swiper - carrossel das sections*/

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
  });





