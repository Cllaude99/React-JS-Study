import { Outlet } from 'react-router-dom';
import Header from './components/NetflixClone/Header';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
