import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { IGetMovieResult, getMovies } from '../../apis/NetflixClone';
import { makeImagePath } from '../../utils/netfloxClone';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { useState } from 'react';
import { useMatch, useNavigate, useParams } from 'react-router-dom';
import ClickedMovieInfo from '../../components/NetflixClone/Movie/ClickedMovieInfo';

const offset = 6;
const Home = () => {
  const navigate = useNavigate();
  const bigMovieMatch = useMatch(`/movies/:movieId`);
  const { movieId } = useParams();
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const rowVariants = {
    hidden: { x: window.outerWidth - 10 },
    visible: { x: 0 },
    exit: { x: -window.outerWidth + 10 },
  };
  const BoxVariants = {
    normal: {
      scale: 1,
    },
    hover: {
      scale: 1.3,
      y: -50,
      transition: { type: 'tween', delay: 0.5, duration: 0.3 },
    },
  };
  const InfoVariants = {
    hover: {
      opacity: 1,
      transition: { type: 'tween', delay: 0.5, duration: 0.3 },
    },
  };

  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data?.results.length - 1;
      const maxIndex = Math.ceil(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);
  const onBoxClicked = (movieId: number) => {
    document.body.style.overflowY = 'hidden';
    navigate(`/movies/${movieId}`);
  };
  const onOverlayClick = () => {
    document.body.style.overflowY = 'auto';
    navigate(-1);
  };
  const onDivClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // 이벤트 버블링을 중지합니다.
    event.stopPropagation();
  };

  const { data, isLoading } = useQuery<IGetMovieResult>({
    queryKey: ['movies', 'nowPlaying'],
    queryFn: getMovies,
  });

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            onClick={increaseIndex}
            bgPhoto={makeImagePath(data?.results[0].backdrop_path || '')}
          >
            <Title>{data?.results[0].title}</Title>
            <OverView>{data?.results[0].overview}</OverView>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                key={index}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: 'tween', duration: 1 }}
              >
                {data?.results
                  .slice(1)
                  .slice(offset * index, offset * index + offset)
                  .map((movie) => (
                    <Box
                      key={movie.id}
                      layoutId={movie.id + ''}
                      variants={BoxVariants}
                      bgPhoto={makeImagePath(movie.backdrop_path)}
                      initial="normal"
                      whileHover="hover"
                      transition={{ type: 'tween' }}
                      onClick={() => onBoxClicked(movie.id)}
                    >
                      <Info variants={InfoVariants}>
                        <h4>{movie.original_title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
          {bigMovieMatch && (
            <AnimatePresence>
              <Overlay
                onClick={onOverlayClick}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ClickedMovieInfo
                  layoutId={movieId + ''}
                  onDivClick={onDivClick}
                />
              </Overlay>
            </AnimatePresence>
          )}
        </>
      )}
    </Wrapper>
  );
};

export default Home;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;
const Wrapper = styled.div`
  height: 300vh;
`;
const Banner = styled.div<{ bgPhoto: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;
const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;
const OverView = styled.p`
  font-size: 36px;
  width: 50%;
`;
const Slider = styled.div`
  position: relative;
  top: -100px;
`;
const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  position: absolute;
  width: 100%;
`;
const Box = styled(motion.div)<{ bgPhoto: string }>`
  background-color: white;
  height: 200px;
  font-size: 64px;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  cursor: pointer;

  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;
const Info = styled(motion.div)`
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 10px;
  background-color: ${(props) => props.theme.black.lighter};
  opacity: 0;
  h4 {
    text-align: center;
    font-size: 18px;
  }
`;
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0s;
`;
