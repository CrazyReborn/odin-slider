const slides = document.querySelector('#main');
const allImages = document.querySelectorAll('#main img');

let counter = 1;

///start from first
slides.style.transform = 'translateX(' + (-720 * counter) + 'px)';

//Buttons
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#previous');
const dots = document.querySelectorAll('.index');

const tracker = (() => {
    dots.forEach(dot => {
        dot.classList.remove('active');
        if (dot.id == counter) {
            dot.classList.add('active');
        }
    })
});
tracker();

const navigator = (() => {
    dots.forEach(dot => {
        dot.addEventListener('click', e => {
            counter = e.target.id;
            slides.style.transition = 'transform 0.5s ease-in-out';
            slides.style.transform = 'translateX(' + (-720 * counter) + 'px)';
        })
    })
})();


//Button functions
nextBtn.addEventListener('click', () => {
    if(counter >= allImages.length - 1) {
        return
    }
    slides.style.transition = 'transform 0.5s ease-in-out';
    counter++;
    slides.style.transform = 'translateX(' + (-720 * counter) + 'px)';
})

prevBtn.addEventListener('click', () => {
    if (counter <= 0) {
        return
    }
    slides.style.transition = 'transform 0.5s ease-in-out';
    counter--;
    slides.style.transform = 'translateX(' + (-720 * counter) + 'px)';
})

slides.addEventListener('transitionend', () => {
    if (allImages[counter].id == 'lastClone') {
        slides.style.transition = 'none';
        counter = allImages.length - 2;
        slides.style.transform = 'translateX(' + (-720 * counter) + 'px)';
    }
    if (allImages[counter].id == 'firstClone') {
        slides.style.transition = 'none';
        counter = allImages.length - counter;
        slides.style.transform = 'translateX(' + (-720 * counter) + 'px)';
    }
    tracker()
})

setInterval(() => {
    tracker();
    slides.style.transition = 'transform 0.5s ease-in-out';
    counter++;
    slides.style.transform = 'translateX(' + (-720 * counter) + 'px)';
}, 5000);