import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IUser {
  email: string;
  password: string;
  username: string;
}

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  const onClickLogOut = async () => {
    try {
      const response = await fetch('http://localhost:8888/api/v1/user/logout', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();

      if (response.ok) {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.log(`error is ${error}`);
    }
  };

  const onClickLogin = () => {
    navigate('/login');
  };

  useEffect(() => {
    const getLoggedInUser = async () => {
      try {
        const response = await fetch('http://localhost:8888/api/v1/user/me', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await response.json();

        if (response.ok) {
          setIsLoggedIn(true);
          setUser(json);
        }
      } catch (error) {
        console.log(error);
        //FIX:에러핸들링 코드 추가할것
      }
    };

    getLoggedInUser();
  }, []);
  return (
    <div className="flex justify-between items-center w-full px-8 py-4 bg-yellow-200">
      <h1 className="text-3xl">Logo</h1>
      <div className="space-x-5">
        {isLoggedIn ? (
          <button
            onClick={onClickLogOut}
            className="px-3 py-1.5 bg-gray-200 rounded-md text-gray-800"
          >
            LogOut
          </button>
        ) : (
          <button
            onClick={onClickLogin}
            className="px-3 py-1.5 bg-gray-200 rounded-md text-gray-800"
          >
            Login
          </button>
        )}
        <span>{user?.email}</span>
      </div>
    </div>
  );
};

export default Nav;
