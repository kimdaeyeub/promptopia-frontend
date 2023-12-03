import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Form from '../components/Form';

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

const EditPrompt = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState('');
  const [tags, setTags] = useState('');
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTags(e.target.value);
  };
  const onChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8888/api/v1/prompt/${id}/edit`,
        {
          method: 'PATCH',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt, tags }),
        },
      );
      const json = await response.json();

      if (response.ok && !json.message) {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getPrompt = async () => {
      try {
        const response = await fetch(
          `http://localhost:8888/api/v1/prompt/${id}/edit`,
          {
            method: 'GET',
            credentials: 'include',
          },
        );

        if (response.ok) {
          const json: IPrompt = await response.json();
          setPrompt(json.prompt);
          setTags(json.tags);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getPrompt();
  }, []);
  return (
    <Form
      type="Edit"
      prompt={prompt}
      tags={tags}
      onChangeInput={onChangeInput}
      onChangeTextArea={onChangeTextArea}
      handleSubmit={handleSubmit}
    />
  );
};

export default EditPrompt;
