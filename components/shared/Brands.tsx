'use client';
import React, { useEffect } from 'react';

import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
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
            <Link href="https://www.epam.com">
              <Image
                src="/assets/epam_logo_light.svg"
                alt="EPAM Systems"
                fill
                className="object-contain"
              />
            </Link>
          </div>
          <div className="flex justify-center relative">
            <Link href="https://www.libertymutual.com">
              <Image
                className=" object-contain"
                src="https://www.libertymutualgroup.com/themes/custom/zurb_foundation_lmg/images/LibertyMutualVerticalLogoWhite-01.svg"
                alt="Liberty Mutual Insurance Co"
                fill
              />
            </Link>
          </div>
          <div className="flex justify-center relative">
            <Link href="https://www.coxautoinc.com/">
              <Image
                src="/assets/logo-brand-stacked.svg"
                alt="Cox Automotive Inc"
                fill
                className="object-contain "
              />
            </Link>
          </div>
          <div className="flex justify-center relative">
            <Link href="https://www.meltstudio.co">
              <Image
                className=" object-contain"
                src="/assets/melt.svg"
                alt="Melt Studio"
                fill
              />
            </Link>
          </div>
          <div className="flex justify-center relative">
            <Link href="https://www.litlingo.com">
              <Image
                className=" object-contain"
                src="/assets/litlingo.svg"
                alt="Litlingo Technologies"
                fill
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
