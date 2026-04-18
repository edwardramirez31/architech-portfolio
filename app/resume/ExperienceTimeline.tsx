'use client';
import { useCallback, useEffect, useRef, useState } from 'react';

import { AnimatePresence, motion, useInView } from 'framer-motion';

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
  onVisible: () => void;
}

const Card: React.FC<{
  item: ExperienceEntry;
  index: number;
  isHovered: boolean;
  onHover: (index: number | null) => void;
  scale: number;
}> = ({ item, index, isHovered, onHover, scale }) => (
  <motion.div
    className="bg-[#232329] rounded-xl p-6 w-full cursor-pointer border border-transparent"
    animate={
      isHovered
        ? { borderColor: 'rgba(0,255,153,0.3)' }
        : { borderColor: 'transparent' }
    }
    onMouseEnter={() => onHover(index)}
    onMouseLeave={() => onHover(null)}
    whileHover={{ scale }}
    transition={{ duration: 0.2 }}
  >
    <span className="text-accent text-sm font-medium">{item.date}</span>
    {item.location && (
      <span className="text-white/40 text-sm ml-3">{item.location}</span>
    )}
    <h4 className="text-white/70 text-sm mt-1">{item.subtitle}</h4>
    <h3 className="text-xl font-bold mt-1">{item.title}</h3>

    {/* Preview: always visible, fades out on hover */}
    <AnimatePresence>
      {!isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative mt-3 overflow-hidden"
        >
          <p className="flex gap-2 text-white/40 text-sm line-clamp-1">
            <span className="text-accent shrink-0">▸</span>
            {item.achievements[0]}
          </p>
          <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-[#232329] to-transparent" />
        </motion.div>
      )}
    </AnimatePresence>

    {/* Full list: expands on hover */}
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
);

const TimelineNode: React.FC<TimelineNodeProps> = ({
  item,
  index,
  hoveredIndex,
  onHover,
  onVisible,
}) => {
  const isLeft = index % 2 === 0;
  const isHovered = hoveredIndex === index;

  const nodeRef = useRef<HTMLLIElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: '-80px' });

  useEffect(() => {
    if (inView) onVisible();
  }, [inView, onVisible]);

  return (
    <motion.li
      ref={nodeRef}
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      animate={
        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -100 : 100 }
      }
      transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
      className="relative flex items-start xl:mb-0 mb-8"
    >
      {/* Mobile: left line layout */}
      <div className="xl:hidden w-full pl-8">
        <motion.div
          className="absolute left-0 top-5 w-4 h-4 bg-primary border-2 border-accent z-10"
          initial={{ scale: 0, rotate: 45 }}
          animate={
            inView
              ? {
                  scale: 1,
                  rotate: 45,
                  boxShadow: [
                    '0 0 4px #00ff99',
                    '0 0 12px #00ff99',
                    '0 0 4px #00ff99',
                  ],
                }
              : { scale: 0, rotate: 45 }
          }
          transition={
            inView
              ? {
                  scale: { delay: 0.35, duration: 0.3, ease: 'easeOut' },
                  rotate: { duration: 0 },
                  boxShadow: {
                    delay: 0.65,
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }
              : { scale: { duration: 0.2 }, rotate: { duration: 0 } }
          }
        />
        <Card
          item={item}
          index={index}
          isHovered={isHovered}
          onHover={onHover}
          scale={1.01}
        />
      </div>

      {/* Desktop: alternating layout */}
      <div className="hidden xl:flex w-full items-start relative min-h-[120px]">
        {/* Left card */}
        <div className={`w-[48%] ${isLeft ? 'flex justify-end pr-10' : ''}`}>
          {isLeft && (
            <Card
              item={item}
              index={index}
              isHovered={isHovered}
              onHover={onHover}
              scale={1.02}
            />
          )}
        </div>

        {/* Center diamond dot — rotate kept inside FM to avoid CSS transform conflict */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-start justify-center z-10 pt-5">
          <motion.div
            className="w-4 h-4 bg-primary border-2 border-accent"
            initial={{ scale: 0, rotate: 45 }}
            animate={
              inView
                ? {
                    scale: 1,
                    rotate: 45,
                    boxShadow: [
                      '0 0 4px #00ff99',
                      '0 0 12px #00ff99',
                      '0 0 4px #00ff99',
                    ],
                  }
                : { scale: 0, rotate: 45 }
            }
            transition={
              inView
                ? {
                    scale: { delay: 0.35, duration: 0.3, ease: 'easeOut' },
                    rotate: { duration: 0 },
                    boxShadow: {
                      delay: 0.65,
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }
                : { scale: { duration: 0.2 }, rotate: { duration: 0 } }
            }
          />
        </div>

        {/* Right card */}
        <div
          className={`w-[48%] ml-auto ${!isLeft ? 'flex justify-start pl-10' : ''}`}
        >
          {!isLeft && (
            <Card
              item={item}
              index={index}
              isHovered={isHovered}
              onHover={onHover}
              scale={1.02}
            />
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
  const [visibleCount, setVisibleCount] = useState(0);

  const handleVisible = useCallback(() => {
    setVisibleCount((c) => Math.min(c + 1, details.length));
  }, [details.length]);

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
        {/* Desktop center line */}
        <motion.div
          className="hidden xl:block absolute left-1/2 -translate-x-1/2 w-[2px] bg-accent/25"
          style={{ transformOrigin: 'top', height: '100%' }}
          animate={{ scaleY: visibleCount / details.length }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
        {/* Mobile left line — same grow-and-stay logic */}
        <motion.div
          className="block xl:hidden absolute left-[7px] w-[2px] bg-accent/25"
          style={{ transformOrigin: 'top', height: '100%' }}
          animate={{ scaleY: visibleCount / details.length }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />

        <ol className="flex flex-col xl:gap-12">
          {details.map((item, index) => (
            <TimelineNode
              key={`${item.date}-${index}`}
              item={item}
              index={index}
              hoveredIndex={hoveredIndex}
              onHover={setHoveredIndex}
              onVisible={handleVisible}
            />
          ))}
        </ol>
      </div>
    </motion.div>
  );
};

export default ExperienceTimeline;
