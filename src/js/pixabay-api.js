import axios from 'axios';

const API_KEY = '38436312-586dac0f37530282efe41db4f';
const BASE_URL = 'https://pixabay.com/api/';

export default class Pixabay {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.perPage = 40;
  }

  async fetchImages() {
    const searchParams = new URLSearchParams({
      key: API_KEY,
      q: this.searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: this.page,
      per_page: 40,
    });

    try {
      const response = await axios.get(`${BASE_URL}?${searchParams}`);
      this.page += 1;
      return response.data;
    } catch (error) {
      console.log(`${error}`);
    }
  }

  incrementHits(hits) {
    this.perPage += hits.length;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}