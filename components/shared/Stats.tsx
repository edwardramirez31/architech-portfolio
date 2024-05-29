'use client';
import React from 'react';

import CountUp from 'react-countup';

const stats = [
  { value: 3, label: 'Years of experience' },
  { value: 20, label: 'Projects completed' },
  { value: 8, label: 'Technologies mastered' },
  { value: 500, label: 'Code commits' },
];

const Stats: React.FunctionComponent = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map(({ value, label }) => (
            <div
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              key={label}
            >
              <CountUp
                end={value}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${label.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'}`}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
