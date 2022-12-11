const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xJ4HvJykr7cdlrGqH18j/likes';
import like from '../images/heart.svg';
import postLike from './postLike.js';
import closeIcon from '../images/x-circle-fill.svg';
import reservationUI from './reservationUI.js';

const myCancel = new Image();
myCancel.src = closeIcon;
myCancel.classList = ('imgCancel');

const myLike = new Image();
myLike.src = like;
myLike.classList = 'imgLike'

const mealCard = (strMeal, idMeal, strMealThumb, likeNum) => {

    const board = document.querySelector('.meals-menu');

    const div = document.createElement('div');
    div.className = 'mealsBoard';
    const strDiv = document.createElement('div');
    strDiv.className = 'strDiv';
    const likeDiv = document.createElement('div');
    likeDiv.className = 'likeDiv';

    const buttonReservation = document.createElement('div');
    buttonReservation.className = 'buttonReservation';

    div.innerHTML = `<img class='thumb' src='${strMealThumb}'>`;
    strDiv.innerHTML = `<span>${strMeal}</span>`
    likeDiv.innerHTML = `<span class='hide'>${idMeal}</span><img class='imgLike' src='${like}'><div class="stop">${likeNum}</div><p class="stop">Likes</p>`
    buttonReservation.innerHTML = `<div>Reservations</div><span class='hide'>${idMeal}</span>`

    strDiv.appendChild(likeDiv);
    div.appendChild(strDiv);
    div.appendChild(buttonReservation);
    board.appendChild(div);

    likeDiv.addEventListener('click', (e) => {
        if (e.target.classList.contains('stop')) {
            return;
        }
        console.log(e.target.previousElementSibling.textContent)
        postLike(e.target.previousElementSibling.textContent);
        const sumlike = e.target.nextElementSibling.textContent;
        e.target.nextElementSibling.textContent = parseInt(sumlike) + 1;
    })

    const overlay = document.querySelector('.open');
    const cancel = document.querySelector('.close');
    cancel.appendChild(myCancel);

    buttonReservation.addEventListener('click', (e) => {
        overlay.style.display = 'block';
        console.log(e.target.nextElementSibling)
        reservationUI(e.target.nextElementSibling.textContent);
    });

    cancel.addEventListener('click', (e) => {
        overlay.style.display = 'none';
        document.querySelector('.reservation-board').innerHTML = '';
    });

};

export default mealCard;