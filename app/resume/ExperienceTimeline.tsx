'use client';
import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

interface ExperienceEntry {
  title: string;
  subtitle: string;
  date: string;
  location?: string;
  url?: string;
  achievements: string[];
}

interface Props {
  title: string;
  description: string;
  details: ExperienceEntry[];
}

interface TimelineNodeProps {
  item: ExperienceEntry;
  index: number;
  hoveredIndex: number | null;
  onHover: (index: number | null) => void;
}

const TimelineNode: React.FC<TimelineNodeProps> = ({
  item,
  index,
  hoveredIndex,
  onHover,
}) => {
  const isLeft = index % 2 === 0;
  const isHovered = hoveredIndex === index;

  return (
    <motion.li
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative flex items-start xl:mb-0 mb-8"
    >
      {/* Mobile left border layout */}
      <div className="xl:hidden flex gap-4 w-full border-l-2 border-accent/40 pl-4">
        <div className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-accent shadow-[0_0_6px_#00ff99]" />
        <motion.div
          className="bg-[#232329] rounded-xl p-6 w-full cursor-pointer border border-transparent"
          animate={
            isHovered
              ? { borderColor: 'rgba(0,255,153,0.3)' }
              : { borderColor: 'transparent' }
          }
          onMouseEnter={() => onHover(index)}
          onMouseLeave={() => onHover(null)}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-accent text-sm font-medium">{item.date}</span>
          {item.location && (
            <span className="text-white/40 text-sm ml-3">{item.location}</span>
          )}
          <h4 className="text-white/70 text-sm mt-1">{item.subtitle}</h4>
          <h3 className="text-xl font-bold mt-1">{item.title}</h3>
          <AnimatePresence>
            {isHovered && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="mt-4 space-y-2 overflow-hidden"
              >
                {item.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-2 text-white/60 text-sm">
                    <span className="text-accent mt-1 shrink-0">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Desktop alternating layout */}
      <div className="hidden xl:flex w-full items-start relative min-h-[120px]">
        {/* Left side */}
        <div className={`w-[45%] ${isLeft ? 'flex justify-end pr-10' : ''}`}>
          {isLeft && (
            <motion.div
              className="bg-[#232329] rounded-xl p-6 w-full max-w-[420px] cursor-pointer border border-transparent"
              animate={
                isHovered
                  ? { borderColor: 'rgba(0,255,153,0.3)' }
                  : { borderColor: 'transparent' }
              }
              onMouseEnter={() => onHover(index)}
              onMouseLeave={() => onHover(null)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-accent text-sm font-medium">
                {item.date}
              </span>
              {item.location && (
                <span className="text-white/40 text-sm ml-3">
                  {item.location}
                </span>
              )}
              <h4 className="text-white/70 text-sm mt-1">{item.subtitle}</h4>
              <h3 className="text-xl font-bold mt-1">{item.title}</h3>
              <AnimatePresence>
                {isHovered && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="mt-4 space-y-2 overflow-hidden"
                  >
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-2 text-white/60 text-sm">
                        <span className="text-accent mt-1 shrink-0">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        {/* Center dot connector */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-start justify-center z-10 pt-5">
          <motion.div
            className="w-4 h-4 rotate-45 bg-primary border-2 border-accent"
            animate={{
              boxShadow: [
                '0 0 4px #00ff99',
                '0 0 12px #00ff99',
                '0 0 4px #00ff99',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Right side */}
        <div
          className={`w-[45%] ml-auto ${!isLeft ? 'flex justify-start pl-10' : ''}`}
        >
          {!isLeft && (
            <motion.div
              className="bg-[#232329] rounded-xl p-6 w-full max-w-[420px] cursor-pointer border border-transparent"
              animate={
                isHovered
                  ? { borderColor: 'rgba(0,255,153,0.3)' }
                  : { borderColor: 'transparent' }
              }
              onMouseEnter={() => onHover(index)}
              onMouseLeave={() => onHover(null)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-accent text-sm font-medium">
                {item.date}
              </span>
              {item.location && (
                <span className="text-white/40 text-sm ml-3">
                  {item.location}
                </span>
              )}
              <h4 className="text-white/70 text-sm mt-1">{item.subtitle}</h4>
              <h3 className="text-xl font-bold mt-1">{item.title}</h3>
              <AnimatePresence>
                {isHovered && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="mt-4 space-y-2 overflow-hidden"
                  >
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-2 text-white/60 text-sm">
                        <span className="text-accent mt-1 shrink-0">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </motion.li>
  );
};

const ExperienceTimeline: React.FC<Props> = ({
  title,
  description,
  details,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

      <div className="relative">
        {/* Vertical center line — desktop only */}
        <div className="hidden xl:block absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-accent/20" />

        <ol className="flex flex-col xl:gap-12">
          {details.map((item, index) => (
            <TimelineNode
              key={`${item.date}-${index}`}
              item={item}
              index={index}
              hoveredIndex={hoveredIndex}
              onHover={setHoveredIndex}
            />
          ))}
        </ol>
      </div>
    </motion.div>
  );
};

export default ExperienceTimeline;
