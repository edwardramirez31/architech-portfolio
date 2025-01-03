import type { NextPage } from 'next';

import { getPosts } from '../api/contentful';

import PostsList from './PostsList';

const VirtueInMotion: NextPage = async () => {
  const posts = await getPosts();
  return (
    <main>
      <PostsList posts={posts} />
      {/* <Newsletter/> */}
    </main>
  );
};

export default VirtueInMotion;
