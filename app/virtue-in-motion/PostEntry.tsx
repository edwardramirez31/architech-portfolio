'use client';

import React from 'react';

import type { Entry } from 'contentful';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import type { BlogPostEntrySkeleton } from '../api/types';

interface Props {
  post: Entry<BlogPostEntrySkeleton, undefined, string>;
}

const PostEntry: React.FunctionComponent<Props> = ({ post }) => {
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
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative h-full hover:shadow-[0_0_20px_rgba(0,255,153,0.15)]"
    >
      <Link
        href={`virtue-in-motion/${slug}`}
        className="relative flex h-full flex-col overflow-hidden rounded-xl bg-[#1c1c22] border-t border-accent"
      >
        {/* Corner accent bracket — top-right */}
        <svg
          className="absolute top-2 right-2 z-20 text-accent/40 group-hover:text-accent transition-colors duration-200"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M16 0 H4 V0 M16 0 V12"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>

        {/* Featured image */}
        <div className="relative flex-shrink-0 h-52 w-full">
          <Image className="object-cover" src={imageUrl} alt={imageAlt} fill />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c22]/90 via-[#1c1c22]/30 to-transparent" />
          {/* Scan-line texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
            }}
          />
          {/* Category badge — overlaps image/content boundary */}
          <div className="absolute bottom-0 left-4 translate-y-1/2 z-10 bg-[#1c1c22] border border-accent/40 text-accent text-xs font-mono uppercase px-2 py-0.5 tracking-widest flex items-center">
            {'[ ARTICLE ]'}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="ml-1 inline-block"
            >
              ▋
            </motion.span>
          </div>
        </div>

        {/* Card body */}
        <div className="flex-1 pt-8 px-6 pb-6 flex flex-col justify-between">
          <div className="flex-1">
            {/* Title */}
            <p className="font-bold text-white text-base leading-snug line-clamp-2 group-hover:text-accent transition-colors duration-300">
              {title}
            </p>

            {/* Excerpt */}
            <p className="mt-2 text-sm text-white/50 leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>

          {/* Author row */}
          <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-2">
            <div className="relative h-7 w-7 flex-shrink-0 rounded-full overflow-hidden ring-1 ring-accent/20">
              <Image
                fill
                src={avatarUrl}
                alt={authorName}
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-mono text-white/70 truncate">
                @{authorName.toLowerCase().replace(/\s+/g, '_')}
              </p>
            </div>
            <time className="text-xs font-mono text-white/30 flex-shrink-0">
              {isoDate}
            </time>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PostEntry;
