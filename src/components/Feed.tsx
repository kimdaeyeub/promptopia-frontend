import Card from './Card';

const Feed = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-8">
      {[1, 2, 3, 4, 5, 6].map((item, index) => (
        <Card key={index} />
      ))}
    </div>
  );
};
export default Feed;
