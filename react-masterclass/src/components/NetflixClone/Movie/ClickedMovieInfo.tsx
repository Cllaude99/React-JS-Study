import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { findMoviesById } from '../../../apis/NetflixClone';
import { makeImagePath } from '../../../utils/netfloxClone';

interface IClickedMovieInfo {
  layoutId: string | undefined;
  onDivClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}
interface IMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: Date;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
interface Genre {
  id: number;
  name: string;
}
interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}
interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}
interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

const ClickedMovieInfo = ({ layoutId, onDivClick }: IClickedMovieInfo) => {
  const { data, isLoading } = useQuery<IMovie>({
    queryKey: ['clickedMovie', layoutId],
    queryFn: () => findMoviesById(layoutId!),
  });

  return (
    <Container layoutId={layoutId} onClick={onDivClick}>
      {isLoading ? (
        <Loader>
          <div className="loader"></div>
        </Loader>
      ) : (
        <MovieWrapper>
          <MovieImg bgPhoto={makeImagePath(data?.backdrop_path || '')} />
          <MovieTitle>{data?.original_title}</MovieTitle>
          <MovieOverview>{data?.overview}</MovieOverview>
        </MovieWrapper>
      )}
    </Container>
  );
};

export default ClickedMovieInfo;

const Container = styled(motion.div)`
  position: fixed;
  width: 40vw;
  height: 80vh;
  top: 70px;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
`;
const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .loader {
    border: 4px solid rgba(255, 255, 255, 1);
    border-left-color: transparent;
    border-radius: 50%;
  }

  .loader {
    border: 4px solid rgba(255, 255, 255, 1);
    border-left-color: transparent;
    width: 36px;
    height: 36px;
  }

  .loader {
    border: 4px solid rgba(255, 255, 255, 1);
    border-left-color: transparent;
    width: 36px;
    height: 36px;
    animation: spin89345 1s linear infinite;
  }

  @keyframes spin89345 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MovieImg = styled.div<{ bgPhoto: string }>`
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center center;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  border-radius: 15px;
`;
const MovieTitle = styled.h1`
  font-size: 28px;
  color: ${(props) => props.theme.white.lighter};
`;
const MovieOverview = styled.p``;
