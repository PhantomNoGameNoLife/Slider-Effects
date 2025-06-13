let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let slider = document.querySelector('.slider')
let listItem = document.querySelector('.slider .list')
let thumb = document.querySelector('.slider .thumb')

function nextItem() {
    showSlider('next');
}

function prevItem() {
    showSlider('prev');
}

let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let autoRun = setTimeout(() => {
    nextBtn.click();
}, timeAutoNext);

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.slider .list .item')
    let itemthumb = document.querySelectorAll('.slider .thumb .item')
    if (type === 'next') {
        listItem.appendChild(itemSlider[0]);
        thumb.appendChild(itemthumb[0]);
        slider.classList.add('next')
    } else {
        let postionlastItem = itemSlider.length - 1;
        listItem.prepend(itemSlider[postionlastItem]);
        thumb.prepend(itemthumb[postionlastItem]);
        slider.classList.add('prev')
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        slider.classList.remove('next');
        slider.classList.remove('prev');
    }, timeRunning)

    clearTimeout(autoRun);
    autoRun = setTimeout(() => {
        nextBtn.click();
    }, timeAutoNext);
}