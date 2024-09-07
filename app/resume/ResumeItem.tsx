import React from 'react';

import { motion } from 'framer-motion';

import { ScrollArea } from '@/components/ui/scroll-area';

interface Props {
  title: string;
  description: string;
  details: { date: string; title: string; subtitle: string }[];
}

const ResumeItem: React.FunctionComponent<Props> = ({
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
      className="flex flex-col gap-[30px] text-center xl:text-left"
    >
      <h3 className="text-4xl font-bold">{title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {description}
      </p>
      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {details.map((item, index) => (
            <motion.li
              initial={{ opacity: 0, x: index % 2 === 0 ? -75 : 75 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.5, duration: 0.75, ease: 'easeOut' },
              }}
              viewport={{ once: true }}
              key={item.date}
              className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
            >
              <span className="text-accent">{item.date}</span>
              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                {item.title}
              </h3>
              <div className="flex items-center gap-3">
                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                <p className="text-white/60 ">{item.subtitle}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </ScrollArea>
    </motion.div>
  );
};

export default ResumeItem;
