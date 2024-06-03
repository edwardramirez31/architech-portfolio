import React from 'react';

import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import Link from 'next/link';

import Social from '@/components/shared/Social';

const FormLayout: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
      <motion.div
        className="py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.5, duration: 0.5, ease: 'easeInOut' },
        }}
      >
        <div className="max-w-lg mx-auto">
          <h2 className="text-4xl text-accent">Let&apos;s Chat</h2>
          <p className="mt-3 text-lg leading-6 text-white/60">
            I&apos;m always open to discussing new projects, creative ideas and
            exciting challenges to contribute to your success. Contact me
            directly through the following methods
          </p>
          <dl className="mt-8 text-base text-white/60">
            {/* <div>
              <dt className="sr-only">Postal address</dt>
              <dd>
                <p>Colombia</p>
                <p>Springfield, OR 12345</p>
              </dd>
            </div> */}
            <div className="mt-6">
              <dt className="sr-only">Phone number</dt>
              <dd className="flex">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="flex-shrink-0 h-6 w-6 text-accent"
                  aria-hidden="true"
                />
                <span className="ml-3">+57 315 3240111</span>
              </dd>
            </div>
            <div className="mt-6">
              <dt className="sr-only">Email</dt>
              <dd className="flex">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="flex-shrink-0 h-6 w-6 text-accent"
                  aria-hidden="true"
                />
                <span className="ml-3">
                  <Link href="mailto:edal_ramirez@hotmail.com">
                    edal_ramirez@hotmail.com
                  </Link>
                </span>
              </dd>
            </div>
          </dl>
          <Social
            containerStyles="flex gap-6"
            iconStyles="mt-6 w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 1, duration: 0.5, ease: 'easeIn' },
        }}
        className="sm:px-6 lg:col-span-3 lg:px-8 xl:pl-12"
      >
        <div className="max-w-lg mx-auto lg:max-w-none">{children}</div>
      </motion.div>
    </div>
  );
};

export default FormLayout;
