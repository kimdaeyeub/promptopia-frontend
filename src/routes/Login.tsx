import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginState } from '../atom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8888/api/v1/user/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
      });
      const json = await response.json();
      if (response.ok && !json.message) {
        setIsLoggedIn(true);
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <form
        className="flex flex-col justify-center items-end border border-gray-400 p-14 rounded-xl w-full max-w-3xl"
        onSubmit={onSubmit}
      >
        <input
          placeholder="Email"
          value={email}
          name="email"
          type="email"
          onChange={onChange}
          className="px-2 py-1.5 border border-gray-400 rounded-md w-full outline-none"
        />
        <input
          placeholder="Password"
          value={password}
          name="password"
          type="password"
          onChange={onChange}
          className="px-2 py-1.5 border border-gray-400 rounded-md w-full outline-none mb-6 mt-3"
        />
        <input
          type="submit"
          value="로그인"
          className="px-4 py-2 bg-gray-200 rounded-md "
        />
      </form>
    </section>
  );
};

export default Login;
