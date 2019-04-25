let loadline =  document.getElementById('title__load-line');
let header = document.getElementById('header');
let mainHeader = document.getElementById('main-header');
let menu = document.getElementById('menu');
const firstLine = () => {
    loadline.classList.add('load-first');
}
setTimeout(firstLine,500);
const hideHeader = () => {
    header.classList.add('hide');
}
const displayNone = () => {
    header.style.display = 'none';
}
setTimeout(hideHeader,1000);
setInterval(displayNone,2500);

const getOpacityMenu = () => {
    menu.classList.add('checkHeader');
}
const getOpacityHeader = () => {
    mainHeader.classList.add('checkHeader');
}
setInterval(getOpacityHeader,2500);
setInterval(getOpacityMenu,2500);

