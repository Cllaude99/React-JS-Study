import axios from 'axios';

const BASE_URL = process.env.REACT_APP_MOVIE_URL;
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

export interface IGetMovieResult {
  dates: Dates;
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}
export interface Dates {
  maximum: Date;
  minimum: Date;
}
export interface Result {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: OriginalLanguage;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export enum OriginalLanguage {
  En = 'en',
  Es = 'es',
  Ja = 'ja',
}

export const getMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}/movie/now_playing`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  return data;
};
