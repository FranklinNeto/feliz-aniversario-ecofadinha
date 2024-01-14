
/* JavaScript para lidar com a scrollbar durante a transição */
var cartao = document.querySelector('.card');

cartao.addEventListener('transitionstart', function() {
    document.body.classList.add('ocultar-scrollbar');
});

cartao.addEventListener('transitionend', function() {
    document.body.classList.remove('ocultar-scrollbar');
});
