import React from 'react';

import type { Entry } from 'contentful';

import type { BlogPostEntrySkeleton } from '../api/types';

import PostEntry from './PostEntry';

interface Props {
  posts: Entry<BlogPostEntrySkeleton, undefined, string>[];
}

const PostsList: React.FunctionComponent<Props> = ({ posts }) => {
  return (
    <div className="relative bg-gray-50 pt-14 pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl">
            Virtue In Motion
          </h2>
          <p className="mt-4 max-w-4xl mx-auto text-lg sm:text-xl text-gray-500 sm:mt-4">
            From the deep world of artificial intelligence and computer science
            to the quiet wisdom of philosophy and the thrill of surfing in
            Colombia and Brasil, I’m living a life filled with adventure,
            curiosity, and the pursuit of virtue.
          </p>
          <p className="mt-4 max-w-4xl mx-auto text-lg sm:text-xl text-gray-500 sm:mt-6">
            Below are the key areas I’m exploring, each one contributing to my
            growth in unique ways. Dive into any path that speaks to you!
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <PostEntry key={post.fields.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default PostsList;
