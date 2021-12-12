let bars = document.querySelector('i.fa-bars');
console.log(bars);

let times = document.querySelector('i.fa-times');
console.log(times);

let menu = document.querySelector('.bars');
console.log(menu);

let img = document.querySelector('.blur');
console.log(img);

bars.addEventListener('click', () => {
    times.style.display = 'block';
    bars.style.display = 'none';
    menu.style.transform = 'translateX(0)';
    img.style.background = 'rgba(0, 0, 0, 0.65)';
})

times.addEventListener('click', () => {
    menu.style.transform = 'translateX(-100%)';
    times.style.display = 'none';
    bars.style.display = 'block';
    img.style.background = 'rgba(171, 171, 214, 0.507)';
})