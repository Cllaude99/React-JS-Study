import { movieInstance } from '..';

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
  const { data } = await movieInstance.get(`/movie/now_playing`);
  return data;
};

export const findMoviesById = async (movieId: string) => {
  const { data } = await movieInstance.get(`/movie/${movieId}`);
  return data;
};

export const searchMovieByKeyword = async (keyword: string) => {
  const { data } = await movieInstance.get(`/search/multi?query=${keyword}`);
  return data;
};
