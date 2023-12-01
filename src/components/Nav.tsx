import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginState } from '../atom';

interface IUser {
  email: string;
  password: string;
  username: string;
  avatarUrl: string;
}

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
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

  //getLoggedInUser();

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
    console.log('hello');
  }, [isLoggedIn]);
  return (
    <div className="flex justify-between items-center w-full px-8 py-4 border">
      <h1 className="text-3xl font-extrabold">Logo</h1>
      {isLoggedIn ? (
        <div className="flex">
          <button className="px-4 py-1 rounded-full bg-black text-white font-medium">
            Create Post
          </button>
          <button
            className="px-4 py-1 rounded-full border border-black font-medium ml-3"
            onClick={onClickLogOut}
          >
            LogOut
          </button>
          {user?.avatarUrl === '' ? (
            <div className="w-12 h-12 bg-gray-300 rounded-full ml-10" />
          ) : (
            <img src={user?.avatarUrl} />
          )}
        </div>
      ) : (
        <button
          className="px-4 py-2 rounded-full bg-black text-white font-medium"
          onClick={onClickLogin}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Nav;
