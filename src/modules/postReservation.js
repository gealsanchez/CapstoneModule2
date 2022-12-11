const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LKFdkfObEyAwnmHsnBRN/reservations';

const postReservation = async (name, initDate, finalDate, idMeal) => {
    console.log('hello from posting ' + idMeal + ' ' + Date())
  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
        item_id: idMeal,
        username: name,
        date_start: initDate,
        date_end: finalDate,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  return data;
}

export default postReservation;