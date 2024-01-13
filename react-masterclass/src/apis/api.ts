import axios from 'axios';

export const fetchCoins = async () => {
  const { data } = await axios.get(`https://api.coinpaprika.com/v1/coins`);
  return data;
};
