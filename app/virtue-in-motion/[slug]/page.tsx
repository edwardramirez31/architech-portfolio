import type { NextPage } from 'next';

import PostDetail from './PostDetail';

import { getPostEntryBySlug } from '@/app/api/contentful';

const BlogPostDetailPage: NextPage<{
  params: { slug: string };
  searchParams: { [key: string]: string | undefined };
}> = async ({ params, searchParams }) => {
  const slug = decodeURIComponent(params.slug);
  const post = await getPostEntryBySlug(slug, searchParams.locale);
  return (
    <main>
      <PostDetail post={post} />
    </main>
  );
};
export default BlogPostDetailPage;
