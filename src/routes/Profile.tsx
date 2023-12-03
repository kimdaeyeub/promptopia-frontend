import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../components/Card';

interface IUser {
  avatarUrl: string;
  email: string;
  username: string;
  _id: string;
}

interface ICreator {
  _id: string;
  username: string;
  email: string;
}

interface IPrompt {
  creator: ICreator;
  prompt: string;
  tags: string;
  _id: string;
}

const Profile = () => {
  const [profile, setProfile] = useState<IUser | null>();
  const [prompts, setPrompts] = useState<IPrompt[] | []>();
  const location = useLocation();
  const navigate = useNavigate();
  const moveEditProfile = () => {
    navigate('/profile/edit');
  };
  useEffect(() => {
    const getMyProfile = async () => {
      try {
        const response = await fetch('http://localhost:8888/api/v1/user/me', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const json = await response.json();
          setProfile(json);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const getMyPrompts = async () => {
      try {
        const response = await fetch('http://localhost:8888/api/v1/prompt/my', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const json = await response.json();
          setPrompts(json);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getMyProfile();
    getMyPrompts();
  }, []);
  return (
    <section className="w-full min-h-screen pb-32 pt-12">
      {/*개인 프로필을 표현하기 위한 공간*/}
      <div className="w-full flex justify-center items-center py-12">
        <div className="w-full h-full border-2 border-gray-200 rounded-2xl flex justify-center items-center py-20 space-x-36">
          {profile?.avatarUrl === '' ? (
            <div className="w-72 h-72 rounded-full bg-gray-300" />
          ) : (
            <img
              src={profile?.avatarUrl}
              alt="profile_avatar"
              className="w-72 h-72 rounded-full bg-gray-300"
            />
          )}
          <div className="h-72 flex flex-col justify-between items-start">
            <div className="flex flex-col justify-center items-start w-full space-y-3">
              <h1 className="font-semibold text-5xl">{profile?.username}</h1>
              <span className="font-semibold text-2xl text-slate-700">
                {profile?.email}
              </span>
            </div>
            {/*TODO:프로필 수정 화면및 기능 업데이트 필요*/}
            <button
              onClick={moveEditProfile}
              className="px-4 py-2 bg-gray-200 rounded-lg text-lg font-medium"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/*개인이 소유한 글을 보여주는 공간*/}
      {/*FIX:프롬프트 수정 및 삭제 화면 만들기*/}
      {/*TODO:반응형 디자인 추가*/}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-8">
        {location.pathname === '/profile'
          ? prompts?.map((prompt) => (
              <div className="cursor-pointer" key={prompt._id}>
                <Card {...prompt} editable />
              </div>
            ))
          : prompts?.map((prompt) => (
              <div className="cursor-pointer" key={prompt._id}>
                <Card {...prompt} />
              </div>
            ))}
      </div>
    </section>
  );
};

export default Profile;
