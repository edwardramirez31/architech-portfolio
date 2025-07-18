import type { NextPage } from 'next';

import PostComments from './PostComments';
import PostDetail from './PostDetail';

import { getComments, getPostEntryBySlug } from '@/app/api/contentful';

const BlogPostDetailPage: NextPage<{
  params: { slug: string };
  searchParams: { [key: string]: string | undefined };
}> = async ({ params, searchParams }) => {
  const slug = decodeURIComponent(params.slug);
  const post = await getPostEntryBySlug(slug, searchParams.locale);
  const comments = await getComments(slug);

  return (
    <main className="bg-white">
      <PostDetail post={post} />
      <PostComments comments={comments} />
    </main>
  );
};
export default BlogPostDetailPage;
