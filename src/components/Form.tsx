import React from 'react';

interface IProp {
  type: string;
  prompt: string;
  tags: string;
  onChangeTextArea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = ({
  type,
  prompt,
  tags,
  onChangeTextArea,
  onChangeInput,
  handleSubmit,
}: IProp) => {
  return (
    <section className="w-full flex flex-col justify-start items-start space-y-8 min-h-screen mt-4 max-w-4xl">
      <h1 className="text-6xl font-extrabold bg-gradient-to-r from-green-400 to-yellow-300 bg-clip-text text-transparent">
        {type} Post
      </h1>

      <h1 className="text-gray-500 text-center">
        {type} and share amazing prompt with the world, and let your imagination
        run wild with any AI-powered platform.
      </h1>
      {/*Form Box*/}
      <form
        onSubmit={handleSubmit}
        className="border border-gray-200 p-10 rounded-lg shadow-lg flex flex-col justify-center items-end space-y-4 w-full"
      >
        <label className="w-full flex flex-col">
          <span className="font-medium text-gray-700">Your AI Prompt</span>
          <textarea
            value={prompt}
            onChange={onChangeTextArea}
            placeholder="Write your prompt here..."
            rows={5}
            className="px-3 py-2 rounded-lg w-full resize-none mt-2 placeholder:text-ms placeholder:font-medium border-2 border-gray-200"
          />
        </label>
        <label className="w-full flex flex-col">
          <span className="font-medium text-gray-700">
            Tag (#WebDevelopment, #idea)
          </span>
          <input
            value={tags}
            onChange={onChangeInput}
            className="w-full rounded-md px-3 py-2 mt-2 placeholder:text-sm placeholder:font-medium border-2 border-gray-200"
            placeholder="#tag"
          />
        </label>
        <input
          type="submit"
          value={type}
          className="px-4 py-1.5 bg-gray-200 rounded-lg font-medium"
        />
      </form>
    </section>
  );
};

export default Form;
