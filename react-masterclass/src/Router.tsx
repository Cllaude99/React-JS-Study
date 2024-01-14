import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import FramerMotion from './pages/FramerMotion';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <FramerMotion />,
      },
    ],
  },
]);
