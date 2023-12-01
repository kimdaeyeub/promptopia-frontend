import { useNavigate } from 'react-router-dom';

const Card = () => {
  return (
    <div className="flex flex-col justify-center items-start w-full h-full p-6 border border-gray-200 shadow-md rounded-lg space-y-4">
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-center items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-gray-200" />
          <div className="flex flex-col justify-center items-start">
            <span className="text-gray-800 font-semibold">Username</span>
            <span className="text-gray-500 text-sm">kdy9622@naver.com</span>
          </div>
        </div>
        <div className="p-3 bg-gray-200 rounded-full">
          <img src="/assets/icons/copy.svg" alt="copy_icon" />
        </div>
      </div>

      <p className="text-gray-600">
        Airbnb, Inc. is an American San Francisco-based company operating an
        online marketplace for short- and long-term homestays and experiences.
        The company acts as a broker and charges a commission from each booking.
        The company was founded in 2008 by Brian Chesky, Nathan Blecharczyk, and
        Joe Gebbia.
      </p>

      <div className="space-x-2">
        <span className="text-blue-400">#Airbnb</span>
        <span className="text-blue-400">#Airbnb</span>
        <span className="text-blue-400">#Airbnb</span>
      </div>
    </div>
  );
};

export default Card;
