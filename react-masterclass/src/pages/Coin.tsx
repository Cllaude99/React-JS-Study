import { useQuery } from '@tanstack/react-query';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchCoinInfo, fetchCoinTickers } from '../apis/Coins/index';

interface IInfoData {}
interface IPriceData {}

const Coin = () => {
  const { coinId } = useParams();
  const { state } = useLocation();

  const { isLoading: infoLoading, data: infoData } = useQuery({
    queryKey: ['info', coinId],
    queryFn: () => fetchCoinInfo(coinId!),
  });
  const { isLoading: tickersLoading, data: tickersData } = useQuery({
    queryKey: ['tickers', coinId],
    queryFn: () => fetchCoinTickers(coinId!),
  });
  const Loading = infoLoading || tickersLoading;

  return (
    <Container>
      <Header>
        <Title>{state.name || 'Loading...'}</Title>
        {Loading ? <Loader>Loading...</Loader> : null}
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
