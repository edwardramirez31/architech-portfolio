import React from 'react';

import { motion } from 'framer-motion';

import Stats from '@/components/shared/Stats';

interface Props {
  title: string;
  description: string;
}

const About: React.FunctionComponent<Props> = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.5, duration: 0.5, ease: 'easeInOut' },
      }}
      className="flex flex-col gap-[30px]"
    >
      <h3 className="text-4xl font-bold">{title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {description}
      </p>
      <Stats />
    </motion.div>
  );
};

export default About;
