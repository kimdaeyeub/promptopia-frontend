import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './routes/Home';
import AddPost from './routes/AddPost';
import Profile from './routes/Profile';
import Login from './routes/Login';
import EditPrompt from './routes/EditPrompt';
import SignUp from './routes/SignUp';
import EditProfile from './routes/EditProfile';

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
        path: 'profile/edit',
        element: <EditProfile />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'prompt/new',
        element: <AddPost />,
      },
      {
        path: 'prompt/:id/edit',
        element: <EditPrompt />,
      },
      {
        path: 'signUp',
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
