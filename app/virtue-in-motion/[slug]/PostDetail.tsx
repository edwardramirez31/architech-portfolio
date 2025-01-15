import React from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// eslint-disable-next-line import/order
import type { Block, Inline } from '@contentful/rich-text-types';

// eslint-disable-next-line import/no-extraneous-dependencies
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import type { Entry } from 'contentful';
import Image from 'next/image';
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
  <span className="font-bold text-gray-900">{children}</span>
);

const Blockquote = ({ children }: DocumentText): JSX.Element => (
  <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
    <svg
      className="w-7 h-7 text-gray-400 dark:text-gray-600"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 18 14"
    >
      <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
    </svg>
    <div className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
      {children}
    </div>
  </blockquote>
);

const Heading3 = ({ children }: DocumentText): JSX.Element => (
  <h3 className="my-5 pt-2 text-xl sm:text-2xl text-gray-900 font-bold">
    {children}
  </h3>
);

const Heading2 = ({ children }: DocumentText): JSX.Element => (
  <h2 className="my-5 pt-2 text-2xl sm:text-3xl text-gray-900 font-bold">
    {children}
  </h2>
);

const Paragraph = ({ children }: DocumentText): JSX.Element => (
  <p className="my-3 text-lg sm:text-xl text-gray-900">{children}</p>
);

const ListItem = ({ children }: DocumentText): JSX.Element => (
  <li className="mb-2 ml-6 list-disc text-gray-900 text-lg sm:text-xl">
    {children}
  </li>
);

interface ArticleImageProps {
  url: string;
  alt: string;
}

const ArticleImage = ({ url, alt }: ArticleImageProps): JSX.Element => (
  <div className="relative h-96 xl:h-[500px] w-full my-4">
    <Image
      src={`https:${url}`}
      alt={alt}
      fill
      className="object-center object-cover rounded-2xl border border-gray300 shadow-lg h-96 xl:h-[500px]"
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
          <SyntaxHighlighter language="python" style={a11yDark}>
            {val.children}
          </SyntaxHighlighter>
        );
      },
    };

  return (
    <div
    // style={{ padding: '20px', background: '#2c2c2c', borderRadius: '10px' }}
    >
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <Markdown components={renderers}>{markdownText}</Markdown>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CodeBlock = ({ code, description }: CodeBlockProps): JSX.Element => (
  <MarkdownWithCode markdownText={code} />
);

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode): JSX.Element => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.HEADING_3]: (
      node: Block | Inline,
      children: React.ReactNode
    ): JSX.Element => <Heading3>{children}</Heading3>,
    [BLOCKS.HEADING_2]: (
      node: Block | Inline,
      children: React.ReactNode
    ): JSX.Element => <Heading2>{children}</Heading2>,
    [BLOCKS.LIST_ITEM]: (
      node: Block | Inline,
      children: React.ReactNode
    ): JSX.Element => <ListItem>{children}</ListItem>,
    [BLOCKS.QUOTE]: (
      node: Block | Inline,
      children: React.ReactNode
    ): JSX.Element => <Blockquote>{children}</Blockquote>,
    [BLOCKS.PARAGRAPH]: (
      node: Block | Inline,
      children: React.ReactNode
    ): JSX.Element => <Paragraph>{children}</Paragraph>,
    [BLOCKS.EMBEDDED_ENTRY]: (node: Block | Inline): JSX.Element => {
      if (node.data.target.sys.contentType.sys.id === 'componentRichImage') {
        // console.log(JSON.stringify(node.data.target.sys.contentType.sys.id));
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
  // console.log(JSON.stringify(post.fields.content))
  const postContent = documentToReactComponents(post.fields.content, options);
  // console.log(postContent);
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-4xl mx-auto">
          <h1>
            <span className="block text-lg text-center text-accent font-semibold tracking-wide uppercase">
              Article
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl uppercase">
              {post.fields.title}
            </span>
          </h1>
          <article className="mt-8 text-xl text-gray-600 leading-8">
            {postContent}
          </article>
        </div>
      </div>
    </div>
  );
};
export default PostDetail;
