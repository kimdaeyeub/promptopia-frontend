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
  const [dropDownopen, setDropDownOpen] = useState(false);
  const navigate = useNavigate();

  const onClickProfile = () => {
    navigate('/profile');
    setDropDownOpen(false);
  };

  const onClickLogo = () => {
    navigate('/');
    setDropDownOpen(false);
  };

  const onClickAddPost = () => {
    navigate('/prompt/new');
    setDropDownOpen(false);
  };

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
        setDropDownOpen(false);
      }
    } catch (error) {
      console.log(`error is ${error}`);
    }
  };

  const onClickLogin = () => {
    navigate('/login');
  };

  const dropDownToggle = () => {
    setDropDownOpen(!dropDownopen);
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
  }, [isLoggedIn]);
  return (
    <>
      {/*컴퓨터 상단바*/}
      <div className="hidden md:flex justify-between items-center w-full py-4">
        <div className="flex space-x-3 justify-center items-center">
          <img
            onClick={onClickLogo}
            alt="logo_image"
            src="/assets/images/logo.svg"
            className="w-12 h-12"
          />
          <span className="text-lg font-semibold">Promptopia</span>
        </div>
        {isLoggedIn ? (
          <div className="flex">
            <button
              onClick={onClickAddPost}
              className="px-4 py-1 rounded-full bg-black text-white font-medium"
            >
              Create Post
            </button>
            <button
              className="px-4 py-1 rounded-full border border-black font-medium ml-3"
              onClick={onClickLogOut}
            >
              LogOut
            </button>
            <div onClick={onClickProfile}>
              {user?.avatarUrl === '' ? (
                <div className="w-12 h-12 bg-gray-300 rounded-full ml-10" />
              ) : (
                <img src={user?.avatarUrl} alt="avatar_url" />
              )}
            </div>
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
      {/*모바일 상단바*/}
      <div className="md:hidden flex justify-between items-center w-full py-4">
        <img
          onClick={onClickLogo}
          src="/assets/images/logo.svg"
          className="w-12 h-12"
          alt="logo_image"
        />
        {isLoggedIn ? (
          <div className="flex relative">
            {user?.avatarUrl === '' ? (
              <div
                onClick={dropDownToggle}
                className="w-12 h-12 bg-gray-300 rounded-full ml-10"
              />
            ) : (
              <img
                src={user?.avatarUrl}
                alt="avatar_url"
                onClick={dropDownToggle}
              />
            )}
            {dropDownopen ? (
              <div className="absolute p-4 bg-white w-full min-w-[250px] top-full right-0 mt-3 rounded-xl flex flex-col justify-center items-center space-y-3">
                <button
                  onClick={onClickAddPost}
                  className="px-4 py-3 rounded-full bg-black text-white font-medium w-full"
                >
                  Create Post
                </button>
                <button
                  className="px-4 py-3 rounded-full border border-black font-medium w-full"
                  onClick={onClickLogOut}
                >
                  LogOut
                </button>
                <button
                  className="px-4 py-3 rounded-full bg-black text-white font-medium w-full"
                  onClick={onClickProfile}
                >
                  My Profile
                </button>
              </div>
            ) : null}
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
    </>
  );
};

export default Nav;
