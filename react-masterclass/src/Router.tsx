import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ToDoList from './pages/ToDoList';
import Selectors from './pages/Selectors';
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
