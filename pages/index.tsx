/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import '../app/globals.css';

type Post = {
  id: number;
  title: string;
  body: string;
};

type DataProps = {
  posts: Post[];
};

export default function BlogPosts({ data }: { data: DataProps }) {
  return (
    <div>
      <Head>
        <title>Blog posts</title>
        <meta name='description' content='All posts for decentralised blog' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='UTF-8' />
      </Head>

      <main className='m-12'>
        <div className='bg-white py-24 sm:py-32'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:mx-0'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                From the blog
              </h2>
              <p className='mt-2 text-lg leading-8 text-gray-600'>
                These is dummy data of posts
              </p>
            </div>
          </div>
          <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
            {data.posts.map((post) => (
              <article
                className='flex max-w-xl flex-col items-start justify-between'
                key={post.id}
              >
                <div className='flex items-center gap-x-4 text-xs'>
                  <time dateTime='2020-03-16' className='text-gray-500'>
                    Mar 16, 2020
                  </time>
                  <a
                    href='#'
                    className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'
                  >
                    Marketing
                  </a>
                </div>
                <div className='group relative'>
                  <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
                    <a href='#'>
                      <span className='absolute inset-0'></span>
                      {post.title}
                    </a>
                  </h3>
                  <p className='mt-5 line-clamp-3 text-sm leading-6 text-gray-600'>
                    {post.body}
                  </p>
                </div>
                <div className='relative mt-8 flex items-center gap-x-4'>
                  <img
                    src='https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt='jj'
                    className='h-10 w-10 rounded-full bg-gray-50'
                  />
                  <div className='text-sm leading-6'>
                    <p className='font-semibold text-gray-900'>
                      <a href='#'>
                        <span className='absolute inset-0'></span>
                        Michael Foster
                      </a>
                    </p>
                    <p className='text-gray-600'>Co-Founder / CTO</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await fetch('https://dummyjson.com/posts');
    const data: DataProps = await res.json();

    return { props: { data } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { props: { data: null } };
  }
};
