'use client';

import React from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// eslint-disable-next-line import/order
import type { Block, Inline } from '@contentful/rich-text-types';

// eslint-disable-next-line import/no-extraneous-dependencies
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import type { Entry } from 'contentful';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import type { BlogPostEntrySkeleton } from '@/app/api/types';

interface Props {
  post: Entry<BlogPostEntrySkeleton, undefined, string>;
}

interface DocumentText {
  children: React.ReactNode;
}

const Bold = ({ children }: DocumentText): JSX.Element => (
  <span className="font-bold text-white">{children}</span>
);

const Blockquote = ({ children }: DocumentText): JSX.Element => (
  <blockquote
    className="my-6 border-l-[3px] border-accent pl-4 py-2"
    style={{ background: 'rgba(0,255,153,0.04)' }}
  >
    <svg
      className="w-6 h-6 text-accent mb-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 18 14"
    >
      <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
    </svg>
    <div className="text-lg italic font-medium leading-relaxed text-white/70">
      {children}
    </div>
  </blockquote>
);

const Heading2 = ({ children }: DocumentText): JSX.Element => (
  <h2 className="my-6 pt-2 text-2xl sm:text-3xl text-white font-bold border-l-2 border-accent pl-4">
    {children}
  </h2>
);

const Heading3 = ({ children }: DocumentText): JSX.Element => (
  <h3 className="my-5 pt-2 text-xl sm:text-2xl text-accent font-semibold">
    {children}
  </h3>
);

const Paragraph = ({ children }: DocumentText): JSX.Element => (
  <p
    className="my-4 text-base sm:text-lg leading-[1.8]"
    style={{ color: 'rgba(255,255,255,0.85)' }}
  >
    {children}
  </p>
);

const ListItem = ({ children }: DocumentText): JSX.Element => (
  <li
    className="mb-2 text-base sm:text-lg leading-[1.8] flex gap-2"
    style={{ color: 'rgba(255,255,255,0.85)' }}
  >
    <span className="text-accent flex-shrink-0 mt-1">›</span>
    <span>{children}</span>
  </li>
);

interface ArticleImageProps {
  url: string;
  alt: string;
}

const ArticleImage = ({ url, alt }: ArticleImageProps): JSX.Element => (
  <div className="relative h-64 sm:h-96 xl:h-[500px] w-full my-6">
    <Image
      src={`https:${url}`}
      alt={alt}
      fill
      className="object-cover object-center rounded-lg border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
    />
  </div>
);

interface CodeBlockProps {
  code: string;
  description: string;
}

const MarkdownWithCode: React.FC<{ markdownText: string }> = ({
  markdownText,
}) => {
  const renderers: { code: React.FC<{ className: string; children: string }> } =
    {
      code: (val) => {
        return (
          <div className="my-4 rounded-lg overflow-hidden border border-white/10">
            <SyntaxHighlighter language="python" style={a11yDark}>
              {val.children}
            </SyntaxHighlighter>
          </div>
        );
      },
    };

  return (
    <div>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <Markdown components={renderers}>{markdownText}</Markdown>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CodeBlock = (props: CodeBlockProps): JSX.Element => (
  <MarkdownWithCode markdownText={props.code} />
);

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode): JSX.Element => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.HEADING_2]: (
      _node: Block | Inline,
      children: React.ReactNode
    ): JSX.Element => <Heading2>{children}</Heading2>,
    [BLOCKS.HEADING_3]: (
      _node: Block | Inline,
      children: React.ReactNode
    ): JSX.Element => <Heading3>{children}</Heading3>,
    [BLOCKS.LIST_ITEM]: (
      _node: Block | Inline,
      children: React.ReactNode
    ): JSX.Element => <ListItem>{children}</ListItem>,
    [BLOCKS.QUOTE]: (
      _node: Block | Inline,
      children: React.ReactNode
    ): JSX.Element => <Blockquote>{children}</Blockquote>,
    [BLOCKS.PARAGRAPH]: (
      _node: Block | Inline,
      children: React.ReactNode
    ): JSX.Element => <Paragraph>{children}</Paragraph>,
    [BLOCKS.EMBEDDED_ENTRY]: (node: Block | Inline): JSX.Element => {
      if (node.data.target.sys.contentType.sys.id === 'componentRichImage') {
        return (
          <ArticleImage
            url={node.data.target.fields.image.fields.file.url}
            alt={node.data.target.fields.image.fields.title}
          />
        );
      }

      return (
        <CodeBlock
          code={node.data.target.fields.code}
          description={node.data.target.fields.description}
        />
      );
    },
  },
};

const PostDetail: React.FunctionComponent<Props> = ({ post }) => {
  const postContent = documentToReactComponents(post.fields.content, options);

  const authorName = (post.fields.author?.fields?.name as string) ?? '';
  const authorHandle = authorName.toLowerCase().replace(/\s+/g, '_');
  const isoDate = new Date(post.fields.publishedDate as string)
    .toISOString()
    .slice(0, 10);
  const wordCount =
    ((post.fields.shortDescription as string) ?? '').split(' ').length + 500;
  const readTime = Math.ceil(wordCount / 200);

  const coverImage = post.fields.featuredImage as
    | { fields: { file: { url: string }; title: string } }
    | undefined;

  return (
    <div className="bg-[#1c1c22] min-h-screen">
      {/* Article header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
        className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 pb-8"
      >
        {/* Terminal category badge */}
        <div className="flex justify-center mb-6">
          <span className="bg-[#1c1c22] border border-accent/40 text-accent text-xs font-mono uppercase px-3 py-1 tracking-widest flex items-center">
            {'[ ARTICLE ]'}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="ml-1 inline-block"
            >
              ▋
            </motion.span>
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-3xl sm:text-5xl font-extrabold text-white text-center leading-tight tracking-tight uppercase"
          style={{ textShadow: '0 0 40px rgba(0,255,153,0.15)' }}
        >
          {post.fields.title as string}
        </h1>

        {/* Metadata row */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-white/40">
          <span>@{authorHandle}</span>
          <span className="text-white/20">·</span>
          <time>{isoDate}</time>
          <span className="text-white/20">·</span>
          <span>{readTime} min read</span>
        </div>

        {/* Accent separator */}
        <div className="mt-6 flex justify-center">
          <div className="w-10 h-[2px] bg-accent" />
        </div>
      </motion.div>

      {/* Cover image */}
      {coverImage && (
        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 mb-10">
          <div className="relative h-64 sm:h-96 w-full overflow-hidden rounded-lg">
            <Image
              src={`https:${coverImage.fields.file.url}`}
              alt={coverImage.fields.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#1c1c22] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#1c1c22] to-transparent" />
          </div>
        </div>
      )}

      {/* Article body */}
      <div className="relative px-4 sm:px-6">
        <article className="max-w-[68ch] mx-auto pb-16">{postContent}</article>

        {/* Bottom section */}
        <div className="max-w-[68ch] mx-auto pb-16">
          <div
            className="my-8"
            style={{
              height: '1px',
              background:
                'linear-gradient(to right, transparent, #00ff99, transparent)',
            }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Link
              href="/virtue-in-motion"
              className="font-mono text-accent text-sm hover:underline flex items-center gap-2"
            >
              ← cd /virtue-path
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
