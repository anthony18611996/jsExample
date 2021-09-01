// Grab scroll to X

function toX (scroll) {
    const _scroll = document.querySelectorAll(scroll);
    let scrollX;
    let scrollLeft;
    let isWork = false;

_scroll.forEach((item)=> {
    item.addEventListener("mouseup", (event) => {
        isWork = false;
        item.classList.remove('active');
        scrollLeft = item.scrollLeft;
    });
    item.addEventListener("mousedown", (event) => {
        isWork = true;
        event.preventDefault();
        item.classList.add('active');
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

toX('.scroll');

//Range

