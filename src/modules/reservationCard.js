import postReservation from "./postReservation";

const reservationCard = (strMeal, strMealThumb, strInstructions, idMeal) => {


  const reservationBoard = document.querySelector('.reservation-board');

  const imgThumb = document.createElement('img')
  imgThumb.id = 'imgThumb';
  imgThumb.src = strMealThumb;

  const form = document.createElement('form')

  const inputName = document.createElement('input')
  inputName.id = 'name';
  inputName.className = 'remove'
  inputName.placeholder = 'Write your name'
  const inputInitDate = document.createElement('input')
  inputInitDate.id = 'initDate';
  inputInitDate.placeholder = 'YYYY/MM/DD Initial Date '
  const inputFinalDate = document.createElement('input')
  inputFinalDate.id = 'finalDate';
  inputFinalDate.placeholder = 'YYYY/MM/DD Final Date'
  const submitButton = document.createElement('button');
  submitButton.id = 'submit';
  submitButton.textContent = 'Submit'

  const inputs = [inputName, inputInitDate, inputFinalDate, submitButton];

  for (let i = 0; i < inputs.length; i += 1) {
    form.appendChild(inputs[i]);
  }

  reservationBoard.appendChild(imgThumb);
  reservationBoard.appendChild(form);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const userName = document.getElementById('name');
    const initDate = document.getElementById('initDate');
    const finalDate = document.getElementById('finalDate');
    postReservation(userName.value, initDate.value, finalDate.value, idMeal);
    // scoreBoard(userName.value, userScore.value);
  });

};

export default reservationCard;