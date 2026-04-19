import React from 'react';

import type { Entry } from 'contentful';
import Image from 'next/image';
import Link from 'next/link';

import type { BlogPostEntrySkeleton } from '../api/types';

interface Props {
  post: Entry<BlogPostEntrySkeleton, undefined, string>;
  featured?: boolean;
}

const PostEntry: React.FunctionComponent<Props> = ({
  post,
  featured = false,
}) => {
  const isoDate = new Date(post.fields.publishedDate as string)
    .toISOString()
    .slice(0, 10);

  const authorName = post.fields.author.fields.name as string;
  const slug = post.fields.slug as string;
  const title = post.fields.title as string;
  const description = post.fields.shortDescription as string;
  const imageUrl = `https:${(post.fields.featuredImage.fields.file as { url: string }).url}`;
  const imageAlt = post.fields.featuredImage.fields.title as string;
  const avatarUrl = `https:${(post.fields.author.fields.avatar.fields.file as { url: string }).url}`;

  return (
    <Link
      href={`virtue-in-motion/${slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border-t-2 border-accent bg-[#232329]"
    >
      {/* Featured image */}
      <div
        className={`relative flex-shrink-0 ${featured ? 'h-72 lg:h-96' : 'h-52'} w-full`}
      >
        <Image className="object-cover" src={imageUrl} alt={imageAlt} fill />
        {/* Subtle dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#232329] via-transparent to-transparent opacity-60" />
      </div>

      {/* Card body */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="flex-1">
          {/* Terminal badge */}
          <span className="inline-block bg-accent/10 border border-accent/30 text-accent text-xs font-mono rounded px-2 py-0.5 mb-3 tracking-wider">
            [ARTICLE]
          </span>

          {/* Title */}
          <p
            className={`font-semibold text-white transition-colors duration-300 group-hover:text-accent ${featured ? 'text-2xl lg:text-3xl' : 'text-xl'}`}
          >
            {title}
          </p>

          {/* Excerpt */}
          <p className="mt-3 text-sm text-white/60 leading-relaxed">
            {description.slice(0, 200)}...
          </p>
        </div>

        {/* Author row */}
        <div className="mt-6 flex items-center gap-3">
          <div className="relative h-8 w-8 flex-shrink-0">
            <Image
              fill
              src={avatarUrl}
              alt={authorName}
              className="rounded-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-mono text-white/80 truncate">
              @{authorName.toLowerCase().replace(/\s+/g, '_')}
            </p>
            <time className="text-xs font-mono text-white/40">{isoDate}</time>
          </div>
        </div>
      </div>

      {/* Bottom hover accent line */}
      <div className="h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
    </Link>
  );
};

export default PostEntry;
