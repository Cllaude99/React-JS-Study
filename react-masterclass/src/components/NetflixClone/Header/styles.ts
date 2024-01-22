import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const Nav = styled(motion.nav)<{ scrollOver: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: ${(props) =>
    props.scrollOver ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,1)'};
  padding: 20px 60px;
  font-size: 14px;
  color: white;
  transition: background-color 0.5s ease-in-out;
`;
export const Col = styled.div`
  display: flex;
  align-items: center;
`;
export const Logo = styled.div`
  margin-right: 50px;
  svg {
    width: 95px;
    height: 25px;
    fill: ${(props) => props.theme.red};
  }
`;
export const Items = styled.ul`
  display: flex;
  align-items: center;
`;
export const Item = styled.li`
  margin-right: 20px;
  color: ${(props) => props.theme.white.darker};
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:hover {
    color: ${(props) => props.theme.white.lighter};
  }
`;
export const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.red};
  bottom: -10px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;
export const Search = styled(motion.span)`
  display: flex;
  align-items: center;
  color: white;
  svg {
    height: 25px;
  }
  position: relative;
`;
export const Input = styled(motion.input)`
  transform-origin: right center;
  position: absolute;
  right: 90px;
  padding: 5px 10px;
  padding-left: 40px;
  z-index: -1;
  color: white;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.white.lighter};
`;
