const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const getMeals = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
  return data;
};

export default getMeals;