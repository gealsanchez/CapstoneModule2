const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xJ4HvJykr7cdlrGqH18j/likes';
import getMeals from './getMeals.js';
import reservationCard from './reservationCard.js';

const reservationUI = async (idMeal) => {
    const data = await getMeals();
    data.meals.forEach((meal) => {
            if (meal.idMeal === idMeal) {
                reservationCard(meal.strMeal, meal.strMealThumb, meal.strInstructions, idMeal);
            };
    });
};

export default reservationUI;