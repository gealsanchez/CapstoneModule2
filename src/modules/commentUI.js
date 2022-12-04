const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xJ4HvJykr7cdlrGqH18j/likes';
import getMeals from './getMeals.js';
import commentCard from './commentCard.js';

const commentUI = async (idMeal) => {
    const data = await getMeals();
    data.meals.forEach((meal) => {
            if (meal.idMeal === idMeal) {
               console.log('from IF commentUI');
                commentCard(meal.strMeal, meal.strMealThumb, meal.strInstructions);
            };
    });
};

export default commentUI;