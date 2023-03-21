
const ROOT_URL = "https://rebrickable.com/api/v3"
const THEME_ID = 246;
import {API_KEY} from '@env'; 

export const getMinifigs = () => {
  const url = `${ROOT_URL}/lego/minifigs/?in_theme_id=${THEME_ID}&page_size=1000`;
  return fetch(url, {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `key ${API_KEY}`
    },
  }).then(response => response.json())
  .catch(error => {
    console.error(error);
  });
}