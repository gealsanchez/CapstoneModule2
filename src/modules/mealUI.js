import getMeals from './getMeals.js';
import mealCard from './mealCard.js';

const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xJ4HvJykr7cdlrGqH18j/likes';

const mealUI = async () => {
  const response = await fetch(URL);
  const likes = await response.json();

  const data = await getMeals();
  data.meals.forEach((meal) => {
    let likeNum = 0;
    likes.forEach((item) => {
      if (item.item_id === meal.idMeal) {
        likeNum = item.likes;
      }
    });
    mealCard(meal.strMeal, meal.idMeal, meal.strMealThumb, likeNum);
  });
};

export default mealUI;