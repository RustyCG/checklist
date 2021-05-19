var listItems = document.querySelectorAll('.item')
var darkModeBtn = document.querySelector('.darkmode-btn')
var lightModeBtn = document.querySelector('.lightmode-btn')
var bodyMode = document.querySelector('body')
var resetBtn = document.querySelector('.reset-btn')

function handleClick(event) {
    var item = event.target
    item.classList.toggle('completed')
}
for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', handleClick)
}

function handClickMode(event) {
    if (event.target = darkModeBtn) {
        bodyMode.classList.toggle('darkmode')
    } else if (event.target = lightModeBtn) {
        bodyMode.classList.toggle('normal')
    }
}

function handClickReset() {
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove('completed');
    }
    bodyMode.classList.remove('darkmode');
}

darkModeBtn.addEventListener('click', handClickMode);
lightModeBtn.addEventListener('click', handClickMode);
resetBtn.addEventListener('click', handClickReset);