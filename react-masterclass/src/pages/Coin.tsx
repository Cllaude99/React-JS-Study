import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

interface IInfoData {}
interface IPriceData {}

const Coin = () => {
  const { coinId } = useParams();
  const { state } = useLocation();
  const [info, setInfo] = useState({});
  const [priceInfo, setPriceInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data: infoData } = await axios(
        `https://api.coinpaprika.com/v1/coins/${coinId}`
      );
      const { data: priceData } = await axios(
        `https://api.coinpaprika.com/v1/tickers/${coinId}`
      );
      setInfo(infoData);
      setPriceInfo(priceData);
      setIsLoading(false);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>{state.name || 'Loading...'}</Title>
        {isLoading ? <Loader>Loading...</Loader> : null}
      </Header>
    </Container>
  );
};

export default Coin;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;
`;
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;
const Loader = styled.span`
  text-align: center;
  display: block;
`;
