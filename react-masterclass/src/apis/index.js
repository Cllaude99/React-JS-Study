import axios from 'axios';

export const movieInstance = axios.create({
  baseURL: process.env.REACT_APP_MOVIE_URL,
  headers: { Authorization: process.env.REACT_APP_MOVIE_API_KEY },
});
