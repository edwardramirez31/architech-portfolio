'use client';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Link from 'next/link';

import Brands from '@/components/shared/Brands';
import Features from '@/components/shared/Features';
import Picture from '@/components/shared/Picture';
import Social from '@/components/shared/Social';
import { Button } from '@/components/ui/button';

const Home: NextPage = () => {
  return (
    <main className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 0.5, ease: 'easeInOut' },
            }}
            className="text-center xl:text-left order-2 xl:order-none"
          >
            <span className="text-xl text-white/80">
              Hello! I&apos;m Edward
            </span>
            <h1 className="h1">
              Turning business needs
              <br /> <span className="h1 text-accent">into tech realities</span>
            </h1>
            <p className="max-w-[500px] mt-3 mb-9 text-white/80">
              I excel in leveraging backend systems that serve as the backbone
              for critical business operations, managing over thousands
              cloud-based resources. Join me in redefining technological
              boundaries.
              {/* Discover my projects or drop me a line! */}
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
              >
                <span>
                  <Link
                    href="https://prime-architech.s3.us-east-1.amazonaws.com/docs/CV_Edward_Ramirez.pdf"
                    target="_blank"
                  >
                    Explore my resume
                  </Link>
                </span>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="text-xl"
                />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Picture />
          </div>
        </div>
      </div>
      <Features />
      <Brands />
    </main>
  );
};

export default Home;
