'use client';
import { useState } from 'react';

import type { Entry } from 'contentful';

import { managementClient, SPACE_ID } from '@/app/api/management';
import type { CommentEntrySkeletonResponse } from '@/app/api/types';
import { LoadingSpinner } from '@/components/icons';
import { Button } from '@/components/ui/button';

interface Props {
  comments: Entry<CommentEntrySkeletonResponse, undefined, string>[];
  postId: string;
}

const PostComments: React.FunctionComponent<Props> = ({ comments, postId }) => {
  // declare form textarea and button
  // useState to manage form state if needed
  const [comment, setComment] = useState('');
  const [currentComments, setComments] = useState(comments);
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCommentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setComment(e.target.value);
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    // Submit the comment to your API or state management
    try {
      const fields = {
        text: {
          'en-US': comment,
        },
        userName: {
          'en-US': name,
        },
        createdDate: {
          'en-US': new Date().toISOString(),
        },
        blogPost: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: postId,
            },
          },
        },
      };
      const newEntry = await managementClient.entry.create(
        {
          spaceId: SPACE_ID,
          environmentId: 'master',
          contentTypeId: 'comment',
        },
        {
          fields,
        }
      );
      await managementClient.entry.publish(
        {
          spaceId: SPACE_ID,
          environmentId: 'master',
          entryId: newEntry.sys.id,
        },
        {
          fields,
          sys: {
            ...newEntry.sys,
          },
        }
      );

      setComment('');
      setName('');
      setComments((prevComments) => [
        {
          sys: { id: newEntry.sys.id },
          fields: {
            text: comment,
            userName: name,
            createdDate: newEntry.fields.createdDate['en-US'],
          },
        } as Entry<CommentEntrySkeletonResponse, undefined, string>,
        ...prevComments,
      ]);
    } catch (error) {
      console.error('Failed to submit comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="comments">
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            Discussion ({currentComments.length})
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2  font-medium text-gray-900 dark:text-white"
            >
              Your name / email
            </label>
            <input
              type="text"
              id="name"
              className="bg-white border border-gray-200 text-gray-900 focus:ring-0 focus:outline-none  rounded-lg block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700"
              placeholder="Marcus Aurelius"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="Comment"
              className="block mb-2  font-medium text-gray-900 dark:text-white"
            >
              Comment
            </label>
            <textarea
              id="comment"
              rows={6}
              value={comment}
              onChange={handleCommentChange}
              className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:border-gray-700 w-full  text-gray-900 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="What are your thoughts?"
              required
            ></textarea>
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="text-lg font-bold"
            size="lg"
          >
            Post Comment {isSubmitting && <LoadingSpinner />}
          </Button>
        </form>
        {currentComments.map((comment) => (
          <article
            key={comment.sys.id}
            className="p-6 text-base bg-white rounded-lg dark:bg-gray-900"
          >
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3  text-gray-900 dark:text-white font-semibold">
                  <img
                    className="mr-2 w-6 h-6 rounded-full"
                    src="/assets/avatar.webp"
                    alt="Profile Picture"
                  />
                  {comment.fields.userName}
                </p>
                <p className=" text-gray-600 dark:text-gray-400">
                  <time dateTime={comment.fields.createdDate}>
                    {new Date(comment.fields.createdDate).toLocaleDateString(
                      'en',
                      {
                        // weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }
                    )}
                  </time>
                </p>
              </div>
            </footer>
            <p className="text-gray-500 dark:text-gray-400">
              {comment.fields.text}
            </p>
            <div className="flex items-center mt-4 space-x-4">
              <button
                type="button"
                className="flex items-center  text-gray-500 hover:underline dark:text-gray-400 font-medium"
              >
                <svg
                  className="mr-1.5 w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                  />
                </svg>
                Reply
              </button>
            </div>
          </article>
        ))}

        {/* <article className="p-6 mb-3 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3  text-gray-900 dark:text-white font-semibold">
              <img
                className="mr-2 w-6 h-6 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Jese Leos"
              />
              Jese Leos
            </p>
            <p className=" text-gray-600 dark:text-gray-400">
              <time title="February 12th, 2022">Feb. 12, 2022</time>
            </p>
          </div>
        </footer>
        <p className="text-gray-500 dark:text-gray-400">
          Much appreciated! Glad you liked it ☺️
        </p>
        <div className="flex items-center mt-4 space-x-4">
          <button
            type="button"
            className="flex items-center  text-gray-500 hover:underline dark:text-gray-400 font-medium"
          >
            <svg
              className="mr-1.5 w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
              />
            </svg>
            Reply
          </button>
        </div>
      </article> */}
      </div>
    </section>
  );
};

export default PostComments;
