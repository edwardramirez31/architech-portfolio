import type { FunctionComponent } from 'react';
import React from 'react';

import { motion } from 'framer-motion';

interface Props {
  title: string;
  description: string;
  details: {
    title: string;
    items: {
      icon: FunctionComponent;
      name: string;
    }[];
  }[];
}

const Skills: React.FunctionComponent<Props> = ({
  title,
  description,
  details,
}) => {
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
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
          {description}
        </p>
      </div>
      <ul className="flex flex-col gap-4">
        {details.map((detail) => (
          <li key={detail.title}>
            <h3 className="text-accent">{detail.title}</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
              {detail.items.map((item) => (
                <motion.li
                  initial={{ opacity: 0, y: 75 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.5, duration: 1, ease: 'easeOut' },
                  }}
                  viewport={{ once: true }}
                  key={item.name}
                >
                  <div className="w-full h-[150px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group">
                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                      <item.icon />
                    </div>
                    <p className="text-white/60 group-hover:text-accent mt-2 text-center transition-all duration-300">
                      {item.name}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Skills;
