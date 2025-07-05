import type { Entry } from 'contentful';
import { createClient } from 'contentful';

import type { BlogPostEntrySkeleton } from './types';

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
