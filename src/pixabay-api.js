import axios from "axios";

const BASE_URL = 'https://pixabay.com/api';
export const imagesOnPage = 40;

export async function getImages( currentPage, userInfo ) {
  return await axios.get( `${BASE_URL}/?&page=${currentPage}&q=${userInfo}`, {
    params: {
      key: '38436312-586dac0f37530282efe41db4f',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: imagesOnPage,
    }
  })
}