import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserForm from '../components/UserFrom';

const EditProfile = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8888/api/v1/user/edit', {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, avatarUrl }),
      });
      const json = await response.json();

      if (json.message) {
        return setError(json.message);
      }
      if (response.ok && !json.message) {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'username') {
      setUsername(e.target.value);
    } else if (e.target.name === 'avatarUrl') {
      setAvatarUrl(e.target.value);
    }
  };
  return (
    <section className="w-full pt-14 px-24">
      <UserForm
        username={username}
        editMode
        email={email}
        error={error}
        avatarUrl={avatarUrl}
        handleSubmit={handleSubmit}
        onChange={onChange}
      />
    </section>
  );
};

export default EditProfile;
