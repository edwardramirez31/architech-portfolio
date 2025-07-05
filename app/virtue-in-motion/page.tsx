import type { NextPage } from 'next';

import { getPosts } from '../api/contentful';

import PostsList from './PostsList';

const VirtueInMotion: NextPage<{
  searchParams: { [key: string]: string | undefined };
}> = async ({ searchParams }) => {
  const posts = await getPosts(searchParams.locale);
  return (
    <main>
      <PostsList posts={posts} />
      {/* <Newsletter/> */}
    </main>
  );
};

export default VirtueInMotion;
