const header = document.querySelector('.header');
const site = document.querySelector('.site');
const cta = document.querySelector('.cta');

const imageCover = document.querySelector('.image-container').children[0];
const mainImageCover = document.querySelector('.image-container').children[1];

const links = Array.from(document.querySelectorAll('.link'));

function animate() {
    setTimeout(() => {
        header.classList.add('active');
        imageCover.style.animation = 'slide 1s forwards';
        mainImageCover.style.animation = 'slide-perm 1s forwards';
    }, 2000);
}

    setTimeout(() => {
        site.classList.add('active');
        cta.classList.add('active');
    }, 3000);

    links.forEach((link, idx) => {
        setTimeout(() => {
        link.classList.add('active');
        }, (idx * 200) + 2500);
    });


animate();