import axios from 'axios';

const api = axios.create({ baseURL: 'https://cors-anywhere.herokuapp.com/https://leonardodavila-price-api.glitch.me/'})
    

export default api;