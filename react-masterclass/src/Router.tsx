import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import KanbanBoard from './pages/KanbanBoard';
import Coins from './pages/Coins';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Coins />,
      },
    ],
  },
]);
