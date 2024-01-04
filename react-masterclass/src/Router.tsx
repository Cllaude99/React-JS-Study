import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import KanbanBoard from './pages/KanbanBoard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <KanbanBoard />,
      },
    ],
  },
]);
