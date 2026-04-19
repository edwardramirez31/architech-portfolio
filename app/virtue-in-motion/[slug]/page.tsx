import type { NextPage } from 'next';

import PostComments from './PostComments';
import PostDetail from './PostDetail';
import ReadingProgress from './ReadingProgress';

import { getComments, getPostEntryBySlug } from '@/app/api/contentful';

const BlogPostDetailPage: NextPage<{
  params: { slug: string };
  searchParams: { [key: string]: string | undefined };
}> = async ({ params, searchParams }) => {
  const slug = decodeURIComponent(params.slug);
  const post = await getPostEntryBySlug(slug, searchParams.locale);
  const comments = await getComments(slug);

  return (
    <main className="bg-[#1c1c22] min-h-screen">
      <ReadingProgress />
      <PostDetail post={post} />
      <PostComments comments={comments} postId={post.sys.id} />
    </main>
  );
};
export default BlogPostDetailPage;
