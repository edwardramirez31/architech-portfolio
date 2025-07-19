import type { EntryFieldTypes } from 'contentful';

type AvatarImageEntrySkeleton = {
  contentType: EntryFieldTypes.Text;
  details: {
    image: { width: EntryFieldTypes.Number; height: EntryFieldTypes.Number };
    size: EntryFieldTypes.Number;
  };
  fileName: string;
  url: string;
};

type ImageEntrySkeleton = {
  contentTypeId: 'featuredImage';
  fields: {
    title: string;
    file: AvatarImageEntrySkeleton;
  };
};

type AvatarEntrySkeleton = {
  contentTypeId: 'avatar';
  fields: {
    title: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    file: AvatarImageEntrySkeleton;
  };
};

type AuthorEntrySkeleton = {
  contentTypeId: 'author';
  fields: {
    internalName: EntryFieldTypes.Text;
    name: string;
    avatar: AvatarEntrySkeleton;
  };
};

export type BlogPostEntrySkeleton = {
  contentTypeId: 'pageBlogPost';
  fields: {
    title: EntryFieldTypes.Text;
    shortDescription: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    publishedDate: EntryFieldTypes.Text;
    internalName: EntryFieldTypes.Text;
    author: EntryFieldTypes.Object<AuthorEntrySkeleton>;
    relatedBlogPosts: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<BlogPostEntrySkeleton>
    >;
    featuredImage: EntryFieldTypes.Object<ImageEntrySkeleton>;
    content: EntryFieldTypes.RichText;
  };
};

export type CommentEntrySkeletonRequest = {
  contentTypeId: 'comment';
  fields: {
    blogPost: EntryFieldTypes.EntryLink<BlogPostEntrySkeleton>;
  };
};

export type CommentEntrySkeletonResponse = {
  contentTypeId: 'comment';
  fields: {
    userName: EntryFieldTypes.Text;
    text: EntryFieldTypes.Text;
    createdDate: EntryFieldTypes.Text;
    blogPost: EntryFieldTypes.Object<BlogPostEntrySkeleton>;
    parent?: EntryFieldTypes.Object<CommentEntrySkeletonResponse>;
  };
};
