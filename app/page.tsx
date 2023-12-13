import Blog from '../pages/Blog';

export default function Home() {
  return (
    <main className='pt-8 pl-72 pr-8 mt-16 mb-8'>
      hello
      <Blog
        data={{
          posts: [],
        }}
      />
    </main>
  );
}
