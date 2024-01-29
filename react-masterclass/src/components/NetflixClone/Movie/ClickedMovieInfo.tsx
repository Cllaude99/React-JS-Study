import { motion } from 'framer-motion';
import styled from 'styled-components';

interface IClickedMovieInfo {
  layoutId: string | undefined;
  onDivClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}
const ClickedMovieInfo = ({ layoutId, onDivClick }: IClickedMovieInfo) => {
  return (
    <Container layoutId={layoutId} onClick={onDivClick}>
      hello
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
`;
