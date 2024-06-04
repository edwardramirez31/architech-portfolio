import React, { useEffect } from 'react';

import { useAnimation, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

import { Button } from '../ui/button';
import { fadeIn } from '../utils/motion';

const Features: React.FunctionComponent = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [controls, inView]);
  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn('up', 'spring', 0.25, 0.75)}
      id="servicio"
      className="px-4 mb-10 sm:mb-16 md:h-[500px]"
    >
      <div className="sm:flex flex-wrap md:flex-nowrap h-full">
        <div className="flex-1 px-4 py-8 self-center">
          <div className="md:pl-10">
            <h2 className="text-base font-semibold uppercase text-gray-300">
              Full Stack Engineer
            </h2>
            <p className="mt-2 text-white text-3xl font-semibold tracking-tight sm:text-4xl">
              Discover My Professional Journey
            </p>
            <p className="mt-3 text-lg text-gray-300">
              Leverage my full-stack expertise in frontend, backend, and DevOps
              to solve complex challenges effectively. My approach integrates
              all phases of development to deliver robust, end-to-end solutions.
              Explore my resume to see how I can drive success for your
              projects.
            </p>
            <div className="mt-8">
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
              >
                <Link href="/resume">See my career highlights</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex-1 px-4 py-8 relative h-80 sm:h-auto">
          <Image
            loading="lazy"
            fill
            className="w-full h-full object-cover"
            src="/assets/IMG_6867.jpg"
            alt=""
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
