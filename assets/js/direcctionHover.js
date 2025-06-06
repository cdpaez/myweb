const items = document.querySelectorAll("li");

items.forEach(item => {
    item.addEventListener("mouseenter", (e) => {
        const dir = getDirection(e, item);
        item.classList.remove("out-top", "out-right", "out-bottom", "out-left");
        console.log(dir);
        item.classList.add("in-" + dir);

    });

    item.addEventListener("mouseleave", (e) => {
        const dir = getDirection(e, item);
        item.classList.remove("in-top", "in-right", "in-bottom", "in-left");
        item.classList.add("out-" + dir);
    });
});

function getDirection(e, item) {
    const w = item.offsetWidth;
    const h = item.offsetHeight;
    const x = (e.clientX - item.getBoundingClientRect().left - w / 2) * (w > h ? h / w : 1);
    const y = (e.clientY  - item.getBoundingClientRect().top - h / 2) * (h > w ? w / h : 1);
    const d = Math.round((((Math.atan2(y, x) * 180 / Math.PI) + 180) / 90) + 3) % 4;
    return ["top", "right", "bottom", "left"][d];
}