const moreBtn = document.querySelector('.metadata .playerTitleAndBtn .moreBtn');
const title = document.querySelector('.metadata .player_title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
})