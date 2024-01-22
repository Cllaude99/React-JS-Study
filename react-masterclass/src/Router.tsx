import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/NetflixClone/Home';
import TV from './pages/NetflixClone/TV';
import Search from './pages/NetflixClone/Search';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/tv',
        element: <TV />,
      },
      { path: '/search', element: <Search /> },
    ],
  },
]);
