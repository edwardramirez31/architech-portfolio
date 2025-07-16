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
  console.log('Post Detail:', post);
  const comments = await getComments(slug);
  console.log('Comment', comments);
  comments.forEach((comment) => {
    if (comment.fields.blogPost.fields.slug.toString() === slug) {
      console.log('Blog Slug:', comment.fields.blogPost.fields.slug);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      console.log('Blog Slug:', comment.fields.blogPost.sys.contentType.sys.id);
    }
  });
  return (
    <main>
      <PostDetail post={post} />
      <PostComments />
    </main>
  );
};
export default BlogPostDetailPage;
