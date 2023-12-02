import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Form from '../components/Form';

const AddPost = () => {
  const [prompt, setPrompt] = useState('');
  const [tags, setTags] = useState('');
  const navigate = useNavigate();
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTags(e.target.value);
  };
  const onChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8888/api/v1/prompt/new', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, tags }),
      });

      const json = await response.json();

      if (response.ok && !json.message) {
        setPrompt('');
        setTags('');
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      type="Create"
      prompt={prompt}
      tags={tags}
      onChangeInput={onChangeInput}
      onChangeTextArea={onChangeTextArea}
      handleSubmit={handleSubmit}
    />
  );
};

export default AddPost;
