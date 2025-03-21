import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Unprofessional from './pages/Unprofessional';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/unprofessional",
    element: <Unprofessional />,
  }
]);