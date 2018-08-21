let btn = document.querySelector('.button-start');
let popUp = document.querySelector('.pop-up');
let closeIcon = document.querySelector('.pop-up__close-icon');
let btnCancel = document.querySelector('.pop-up__btn-cancel');
let btnAction = document.querySelector('.pop-up__btn-action');

btn.addEventListener('click', showPopup)

function showPopup(event) {
    event.stopPropagation();
    btn.classList.add('hidden');
    btn.removeEventListener('click', showPopup);
    popUp.classList.remove('hidden');
    initPopUp();
}

function initPopUp() {
    closeIcon.addEventListener('click', closePopUp);
    btnCancel.addEventListener('click', closePopUp);
    btnAction.addEventListener('click', action)
}

function closePopUp() {
    closeIcon.removeEventListener('click', closePopUp);
    btnCancel.removeEventListener('click', closePopUp);
    btnAction.removeEventListener('click', action);
    popUp.classList.add('hidden');
    btn.classList.remove('hidden');
    btn.addEventListener('click', showPopup)
}

function action() {
    closePopUp();
    alert('Done');
}

document.addEventListener('click', function (event) {

    if (event.target.closest('.pop-up')) return;
    if(!popUp.classList.contains('hidden')) {
        closePopUp();
    }
})