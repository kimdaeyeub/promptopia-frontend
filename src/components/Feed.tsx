import { useEffect, useState } from 'react';
import Card from './Card';

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

const Feed = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [prompts, setPrompts] = useState<IPrompt[] | []>();
  useEffect(() => {
    const getAllPrompts = async () => {
      setIsLoading(true);
      const response = await fetch('http://localhost:8888/api/v1/prompt');
      const json = await response.json();

      if (response.ok) {
        setIsLoading(false);
        setPrompts(json);
      }
    };

    getAllPrompts();
  }, []);
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-8">
      {isLoading
        ? 'Loading...'
        : prompts?.map((prompt) => <Card {...prompt} key={prompt._id} />)}
    </div>
  );
};
export default Feed;
