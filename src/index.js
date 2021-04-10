function toX (container, scroll, blocks) {
    const _container = document.getElementsByTagName(container),
    _scroll = document.querySelector(scroll),
    _blocks = document.querySelectorAll(blocks);
    let scrollX;
    let scrollLeft;
    let isWork = false;

    _scroll.addEventListener("mouseup", (event) => {
        isWork = false;
        scrollLeft = _scroll.scrollLeft;
        //console.log(scrollLeft);
    });
    _scroll.addEventListener("mousedown", (event) => {
        isWork = true;
        event.preventDefault();
        scrollX = event.clientX - _scroll.offsetLeft;
        scrollLeft = _scroll.scrollLeft;
    });
    _scroll.addEventListener("mousemove", (event) => {
        if (!isWork) return;
        event.preventDefault();
        let element = event.clientX - _scroll.offsetLeft;
        let scrolling = (element - scrollX) * 2;
        _scroll.scrollLeft = scrollLeft - scrolling;
    });

    /*_blocks.forEach((item)=> {
        let rect = item.getBoundingClientRect().x;
        let rectStart = 0;
        item.addEventListener("mousedown", () => {
            _scroll.style.transform = `translateX(${rect}px)`;
        });
        item.addEventListener("mouseup", ()=> {
            _scroll.style.transform = `translateX(${rectStart}px)`
        })
    })*/

}

toX('scroll-view', '.scroll', '.block');
