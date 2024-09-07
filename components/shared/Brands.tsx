'use client';
import React from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Brands: React.FunctionComponent = () => {
  return (
    <section id="companies">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, duration: 1.25, ease: 'easeOut' },
          }}
          viewport={{ once: true }}
        >
          <h3 className="h3 text-center mb-16">
            Worked with the world&apos;s most innovative companies
          </h3>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 h-[400px] md:h-12">
          <motion.div
            className="flex justify-center relative"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 1.25, ease: 'easeOut' },
            }}
            viewport={{ once: true }}
          >
            <Link href="https://www.epam.com" target="_blank">
              <Image
                src="/assets/epam_logo_light.svg"
                alt="EPAM Systems"
                fill
                className="object-contain"
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 1.25, ease: 'easeOut' },
            }}
            viewport={{ once: true }}
            className="flex justify-center relative"
          >
            <Link href="https://www.libertymutual.com" target="_blank">
              <Image
                className=" object-contain"
                src="https://www.libertymutualgroup.com/themes/custom/zurb_foundation_lmg/images/LibertyMutualVerticalLogoWhite-01.svg"
                alt="Liberty Mutual Insurance Co"
                fill
              />
            </Link>
          </motion.div>
          <motion.div
            className="flex justify-center relative"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 1.25, ease: 'easeOut' },
            }}
            viewport={{ once: true }}
          >
            <Link href="https://www.coxautoinc.com/" target="_blank">
              <Image
                src="/assets/logo-brand-stacked.svg"
                alt="Cox Automotive Inc"
                fill
                className="object-contain "
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 1.25, ease: 'easeOut' },
            }}
            viewport={{ once: true }}
            className="flex justify-center relative"
          >
            <Link href="https://www.meltstudio.co" target="_blank">
              <Image
                className=" object-contain"
                src="/assets/melt.svg"
                alt="Melt Studio"
                fill
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 1.25, ease: 'easeOut' },
            }}
            viewport={{ once: true }}
            className="flex justify-center relative"
          >
            <Link href="https://www.litlingo.com" target="_blank">
              <Image
                className=" object-contain"
                src="/assets/litlingo.svg"
                alt="Litlingo Technologies"
                fill
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
