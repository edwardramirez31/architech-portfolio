import type { Entry } from 'contentful';
import { createClient } from 'contentful';

import type { BlogPostEntrySkeleton } from './types';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? '',
});

// Retrieve the list of blog posts from Contentful
export const getPosts = async (): Promise<
  Entry<BlogPostEntrySkeleton, undefined, string>[]
> => {
  const response = await client.getEntries<BlogPostEntrySkeleton>({
    content_type: 'pageBlogPost',
  });
  return response.items;
};

// Retrieve the blog detail using the slug
export const getPostEntryBySlug = async (
  slug: string
): Promise<Entry<BlogPostEntrySkeleton, undefined, string>> => {
  const response = await client.getEntries<BlogPostEntrySkeleton>({
    content_type: 'pageBlogPost',
    'fields.slug': slug,
    limit: 1,
  });
  return response.items[0];
};
