import type { Entry } from 'contentful';
import { createClient } from 'contentful';

import type {
  BlogPostEntrySkeleton,
  CommentEntrySkeletonRequest,
  CommentEntrySkeletonResponse,
} from './types';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? '',
});

// Retrieve the list of blog posts from Contentful
export const getPosts = async (
  locale: string = 'en-US'
): Promise<Entry<BlogPostEntrySkeleton, undefined, string>[]> => {
  const response = await client.getEntries<BlogPostEntrySkeleton>({
    content_type: 'pageBlogPost',
    locale,
  });
  return response.items;
};

export const getComments = async (
  slug: string
): Promise<Entry<CommentEntrySkeletonResponse, undefined, string>[]> => {
  const response = await client.getEntries<CommentEntrySkeletonRequest>({
    content_type: 'comment',
    'fields.blogPost.fields.slug': slug,
    'fields.blogPost.sys.contentType.sys.id': 'pageBlogPost',
  });
  return response.items as unknown as Entry<
    CommentEntrySkeletonResponse,
    undefined,
    string
  >[];
};
// Retrieve the blog detail using the slug
export const getPostEntryBySlug = async (
  slug: string,
  locale: string = 'en-US'
): Promise<Entry<BlogPostEntrySkeleton, undefined, string>> => {
  const response = await client.getEntries<BlogPostEntrySkeleton>({
    content_type: 'pageBlogPost',
    'fields.slug': slug,
    limit: 1,
    locale,
  });
  return response.items[0];
};
