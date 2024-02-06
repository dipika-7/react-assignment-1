import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Timer from './components/Timer';
import UserActivityForm from './components/UserActivityForm';
import Weather from './components/Weather';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Timer />,
      },
      {
        path: 'timer',
        element: <Timer />,
      },
      {
        path: 'weather',
        element: <Weather />,
        // loader:
      },
      {
        path: 'user-activity',
        element: <UserActivityForm />,
      },
    ],
  },
  {
    path: '*',
    element: <>NO MATCH</>,
  },
]);

export default router;
