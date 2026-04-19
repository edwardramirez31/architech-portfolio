'use client';

import React from 'react';

import type { Entry } from 'contentful';
import { motion } from 'framer-motion';

import type { BlogPostEntrySkeleton } from '../api/types';

import NetworkBackground from './NetworkBackground';
import PostEntry from './PostEntry';

interface Props {
  posts: Entry<BlogPostEntrySkeleton, undefined, string>[];
}

const PostsList: React.FunctionComponent<Props> = ({ posts }) => {
  return (
    <div className="relative bg-primary min-h-screen pt-6 pb-20 px-4 sm:px-6 lg:pt-10 lg:pb-28 lg:px-20">
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="relative mb-12">
          <NetworkBackground />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
            className="relative z-10"
          >
            {/* Terminal label */}
            <div className="flex items-center gap-2 justify-center mb-4">
              <span className="font-mono text-accent text-sm tracking-widest">
                {'// KNOWLEDGE_BASE v2.6'}
              </span>
              <span className="inline-block w-2 h-4 bg-accent animate-pulse" />
            </div>

            {/* Main title */}
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
              Virtue In Motion
            </h2>

            {/* Subtitle */}
            <p className="mt-5 max-w-2xl mx-auto text-center text-base sm:text-lg text-white/60 font-mono leading-relaxed">
              <span className="text-accent/50">&gt;</span> exploring the
              intersection of <span className="text-accent/80">AI</span>,{' '}
              <span className="text-accent/80">philosophy</span> &amp;{' '}
              <span className="text-accent/80">surf</span>
            </p>

            {/* Decorative border */}
            <div className="mt-8 border-b border-white/10 relative">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-accent" />
            </div>
          </motion.div>
        </div>

        {/* All posts — uniform grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div
              key={post.fields.slug as string}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1 + 0.4,
                duration: 0.5,
                ease: 'easeInOut',
              }}
            >
              <PostEntry post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsList;
