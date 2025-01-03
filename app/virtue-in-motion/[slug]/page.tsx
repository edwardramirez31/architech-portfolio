import type { NextPage } from 'next';

import PostDetail from './PostDetail';

import { getPostEntryBySlug } from '@/app/api/contentful';

const BlogPostDetailPage: NextPage<{
  params: { slug: string };
}> = async ({ params }) => {
  const slug = decodeURIComponent(params.slug);
  const post = await getPostEntryBySlug(slug);
  return (
    <main>
      <PostDetail post={post} />
    </main>
  );
};
export default BlogPostDetailPage;
