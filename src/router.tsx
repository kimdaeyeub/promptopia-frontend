import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './routes/Home';
import AddPost from './routes/AddPost';
import Profile from './routes/Profile';
import Login from './routes/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'prompt/new',
        element: <AddPost />,
      },
    ],
  },
]);

export default router;
