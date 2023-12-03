import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//TODO:아바타에 사용자 프로필 사진이 들어오지 않음
interface ICreator {
  _id: string;
  username: string;
  email: string;
}
interface IProp {
  creator: ICreator;
  prompt: string;
  tags: string;
  editable?: boolean;
  _id: string;
}
const Card = ({ creator, prompt, tags, editable, _id }: IProp) => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState('');
  const onClick = () => {
    setCopied(prompt);
    navigator.clipboard.writeText(prompt);
    setTimeout(() => {
      setCopied('');
    }, 3000);
  };
  const editMyPrompt = (id: string) => {
    navigate(`/prompt/${id}/edit`);
  };
  return (
    <div className="flex flex-col justify-between items-start w-full h-full p-6 border border-gray-200 shadow-md rounded-lg space-y-4">
      <div className="w-full h-full flex flex-col justify-start items-start space-y-3">
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-center items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gray-200" />
            <div className="flex flex-col justify-center items-start">
              <span className="text-gray-800 font-semibold">
                {creator.username}
              </span>
              <span className="text-gray-500 text-sm">{creator.email}</span>
            </div>
          </div>
          <div className="p-3 bg-gray-200 rounded-full" onClick={onClick}>
            <img
              src={
                copied === prompt
                  ? '/assets/icons/tick.svg'
                  : '/assets/icons/copy.svg'
              }
              alt="copy_icon"
            />
          </div>
        </div>

        <p className="text-gray-600">{prompt}</p>
      </div>
      <div className="flex flex-col justify-center items-start space-y-4">
        <span className="text-blue-400">{tags}</span>
        {editable ? (
          <button
            onClick={() => editMyPrompt(_id)}
            className="px-4 py-2 rounded-lg bg-gray-200"
          >
            Edit &rarr;
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
