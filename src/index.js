'use strict';
 
toX('.scroll');

function toX (scroll) {
    const _scroll = document.querySelectorAll(scroll);
    let scrollX;
    let scrollLeft;
    let isWork = false;

_scroll.forEach((item)=> {
    item.addEventListener("mouseup", (event) => {
        isWork = false;
        scrollLeft = item.scrollLeft;
    });
    item.addEventListener("mousedown", (event) => {
        isWork = true;
        event.preventDefault();
        scrollX = event.clientX - item.offsetLeft;
        scrollLeft = item.scrollLeft;
    });
    item.addEventListener("mousemove", (event) => {
        if (!isWork) return;
        event.preventDefault();
        let element = event.clientX - item.offsetLeft;
        let scrolling = (element - scrollX) * 2;
        item.scrollLeft = scrollLeft - scrolling;
    });
})
}

const INTERVAL = 500, MAX_VALUE = 10;
let counter = 0, timer = null;

const event = () => {
    if (counter === MAX_VALUE) {
        console.log('The end');
        clearInterval(timer);
        return
    }
    console.dir({ counter, date: new Date() });
    counter++;
}

console.log('Begin');
timer = setInterval(event, INTERVAL);