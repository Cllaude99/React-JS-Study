import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const boxVariants = {
  initial: (isNext: boolean) => ({
    opacity: 0,
    scale: 0,
    x: isNext ? 500 : -500,
  }),
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
  },
  exit: (isNext: boolean) => ({
    opacity: 0,
    scale: 0,
    x: isNext ? -500 : 500,
  }),
};
const FramerMotion = () => {
  const [visible, setVisible] = useState(1);
  const [isNext, setIsNext] = useState(true);
  const nextPlease = async () => {
    await setIsNext(true);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevPlease = async () => {
    await setIsNext(false);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  return (
    <Wrapper>
      <AnimatePresence initial={false}>
        <Box
          key={visible}
          custom={isNext}
          variants={boxVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={nextPlease}>next</button>
      <button onClick={prevPlease}>prev</button>
    </Wrapper>
  );
};

export default FramerMotion;

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;
const Box = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  position: absolute;
  top: 100px;
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
