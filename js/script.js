const slider = tns({
    container: '.carousel__inner',
    items: 1,
    controls: false,
    responsive: {
        992: {
            items: 1,
            nav: true
        },
        768: {
            items: 1
        },
        575: {
            items: 1
        },
        320: {
            items: 1
        },
    }
});

document.querySelector('.prev').addEventListener('click', function() {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function() {
    slider.goTo('next');
});