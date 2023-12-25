import styled from "styled-components";

const Coins = () => {
  return <Title>코인</Title>;
};

export default Coins;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;
