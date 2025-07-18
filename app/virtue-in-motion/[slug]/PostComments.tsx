import type { Entry } from 'contentful';

import type { CommentEntrySkeletonResponse } from '@/app/api/types';
import { Button } from '@/components/ui/button';

interface Props {
  comments: Entry<CommentEntrySkeletonResponse, undefined, string>[];
}

const PostComments: React.FunctionComponent<Props> = ({ comments }) => {
  return (
    <section id="comments">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Discussion ({comments.length})
          </h2>
        </div>
        <form className="mb-6">
          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows={6}
              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="What are your thoughts?"
              required
            ></textarea>
          </div>
          <Button type="submit">Post Comment</Button>
        </form>
        {comments.map((comment) => (
          <article
            key={comment.sys.id}
            className="p-6 text-base bg-white rounded-lg dark:bg-gray-900"
          >
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                  <img
                    className="mr-2 w-6 h-6 rounded-full"
                    src="/assets/avatar.webp"
                    alt="Profile Picture"
                  />
                  {comment.fields.userName}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
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
                className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
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
            <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
              <img
                className="mr-2 w-6 h-6 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Jese Leos"
              />
              Jese Leos
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
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
            className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
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
