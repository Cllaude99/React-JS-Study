import axios from 'axios';

export const fetchCoins = async () => {
  const { data } = await axios.get(`https://api.coinpaprika.com/v1/coins`);
  return data;
};

export const fetchCoinInfo = async (coinId: string) => {
  const { data } = await axios.get(
    `https://api.coinpaprika.com/v1/coins/${coinId}`
  );
  return data;
};

export const fetchCoinTickers = async (coinId: string) => {
  const { data } = await axios.get(
    `https://api.coinpaprika.com/v1/tickers/${coinId}`
  );
  return data;
};
