const AddPost = () => {
  return (
    <section className="w-full flex flex-col justify-start items-center space-y-8 min-h-screen">
      <h1 className="text-6xl font-extrabold bg-gradient-to-r from-green-400 to-yellow-300 bg-clip-text text-transparent">
        Create Post
      </h1>

      <h1 className="text-gray-500 text-center">
        Create and share amazing prompt with the world, and let your imagination
        run wild with any AI-powered platform.
      </h1>
      <form className="border border-gray-200 p-10 rounded-lg shadow-lg flex flex-col space-y-4 w-full max-w-4xl">
        <label className="w-full flex flex-col">
          <span className="font-medium text-gray-700">Your AI Prompt</span>
          <textarea
            placeholder="Write your prompt here..."
            rows={5}
            className="px-3 py-2 rounded-lg w-full resize-none mt-2 placeholder:text-ms placeholder:font-medium"
          />
        </label>
        <label>
          <span className="font-medium text-gray-700">
            Tag (#WebDevelopment, #idea)
          </span>
          <input
            className="w-full rounded-md px-3 py-2 mt-2 placeholder:text-sm placeholder:font-medium"
            placeholder="#tag"
          />
        </label>
      </form>
    </section>
  );
};

export default AddPost;
