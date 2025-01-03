import React from 'react';

import type { Entry } from 'contentful';
import Image from 'next/image';
import Link from 'next/link';

import type { BlogPostEntrySkeleton } from '../api/types';

interface Props {
  post: Entry<BlogPostEntrySkeleton, undefined, string>;
}
const PostEntry: React.FunctionComponent<Props> = ({ post }) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <div className="relative h-56 w-full">
          <Image
            className="object-cover"
            src={`https:${post.fields.featuredImage.fields.file.url}`}
            alt={post.fields.featuredImage.fields.title}
            fill
          />
        </div>
      </div>
      <Link
        href={`virtue-in-motion/${post.fields.slug}`}
        className="flex-1 bg-white p-6 flex flex-col justify-between"
      >
        <div className="flex-1">
          <p className="text-md font-medium text-accent">
            <span className="hover:underline"> ARTICLE </span>
          </p>
          <div className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">
              {post.fields.title}
            </p>
            <p className="mt-3 text-base text-gray-500">
              {post.fields.shortDescription.slice(0, 200)}...
            </p>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <div className="relative h-10 w-10">
              <Image
                fill
                src={`https:${post.fields.author.fields.avatar.fields.file.url}`}
                alt={`${post.fields.author.fields.name}.`}
                className="rounded-full"
                loading="lazy"
              />
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              <span className="hover:underline">
                {' '}
                {post.fields.author.fields.name}{' '}
              </span>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time>
                {' '}
                {new Date(post.fields.publishedDate).toLocaleDateString('en', {
                  // weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}{' '}
              </time>
              {/* <span aria-hidden="true"> &middot; </span>
              <span> 6 min read </span> */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostEntry;
