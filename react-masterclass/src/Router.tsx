import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Coins from './pages/Coins';
import Coin from './pages/Coin';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Coins />,
      },
      {
        path: ':coinId',
        element: <Coin />,
      },
    ],
  },
]);
