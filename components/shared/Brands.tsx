'use client';
import React, { useEffect } from 'react';

import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import { fadeIn, textVariant } from '../utils/motion';

const Brands: React.FunctionComponent = () => {
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
    <section id="companies">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={textVariant(0.5)}
        >
          <h3 className="h3 text-center mb-16">
            Worked with the world&apos;s most innovative companies
          </h3>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeIn('up', 'spring', 0.5, 1.25)}
          className="grid grid-cols-1 gap-8 md:grid-cols-5 h-[400px] md:h-12"
        >
          <div className="flex justify-center relative">
            <Image
              src="/assets/epam_logo_light.svg"
              alt="StaticKit"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex justify-center relative">
            <Image
              className=" object-contain"
              src="https://www.libertymutualgroup.com/themes/custom/zurb_foundation_lmg/images/LibertyMutualVerticalLogoWhite-01.svg"
              alt="Mirage"
              fill
            />
          </div>
          <div className="flex justify-center relative">
            <Image
              src="/assets/logo-brand-stacked.svg"
              alt="StaticKit"
              fill
              className="object-contain "
            />
          </div>
          <div className="flex justify-center relative">
            <Image
              className=" object-contain"
              src="/assets/melt.svg"
              alt="Transistor"
              fill
            />
          </div>
          <div className="flex justify-center relative">
            <Image
              className=" object-contain"
              src="/assets/litlingo.svg"
              alt="Workcation"
              fill
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
