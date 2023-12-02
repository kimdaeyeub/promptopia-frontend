import { useNavigate } from 'react-router-dom';

interface ICreator {
  _id: string;
  username: string;
  email: string;
}
interface IProp {
  creator: ICreator;
  prompt: string;
  tags: string;
}
const Card = ({ creator, prompt, tags }: IProp) => {
  return (
    <div className="flex flex-col justify-center items-start w-full h-full p-6 border border-gray-200 shadow-md rounded-lg space-y-4">
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
        <div className="p-3 bg-gray-200 rounded-full">
          <img src="/assets/icons/copy.svg" alt="copy_icon" />
        </div>
      </div>

      <p className="text-gray-600">{prompt}</p>

      <div className="space-x-2">
        <span className="text-blue-400">{tags}</span>
      </div>
    </div>
  );
};

export default Card;
