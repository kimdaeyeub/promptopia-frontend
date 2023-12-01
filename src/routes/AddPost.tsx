import { useState } from 'react';
import Form from '../components/Form';

const AddPost = () => {
  const [prompt, setPrompt] = useState('');
  const [tags, setTags] = useState('');
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTags(e.target.value);
  };
  const onChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(prompt, tags);
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
