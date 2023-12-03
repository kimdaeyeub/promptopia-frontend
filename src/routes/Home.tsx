import Feed from '../components/Feed';

const Home = () => {
  return (
    <section className="w-full mt-20 flex flex-col justify-center items-center mb-32">
      <h1 className="text-5xl font-extrabold text-center">
        Discover & Share
        <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent ">
          AI-Powered Prompts
        </span>
      </h1>
      <p className="mt-3 font-medium text-gray-600 text-center mb-32">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
