import closeIcon from '../images/x-circle-fill.svg';

const myCancel = new Image();
myCancel.src = closeIcon;
myCancel.classList = 'imgCancel'


const commentCard = (strMeal, strMealThumb, strInstructions) => {

    const commentsBoard = document.querySelector('.open');
    commentsBoard.innerHTML=`${strInstructions}`

    // const mainDiv = document.createElement('div');
    // div.className = 'mainDiv';
    // const instructionsDiv = document.createElement('div');
    // instructionsDiv.className = 'instructionsDiv';

    // const buttonPost = document.createElement('div');
    // buttonPost.className = 'buttonPost';

    // mainDiv.innerHTML = `<img class='thumb' src='${strMealThumb}'><span>${strMeal}</span>`;
    // instructionsDiv.innerHTML = `<span class='hide'>${strInstructions}</span>`
    // buttonPost.innerHTML = `Post`

    // mainDiv.appendChild(instructionsDiv);
    // mainDiv.appendChild(buttonPost);
    // commentsBoard.appendChild(mainDiv);
};

export default commentCard;