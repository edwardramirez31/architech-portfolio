'use client';
import React from 'react';

import CountUp from 'react-countup';

const stats = [
  // { value: 3, label: 'Years of experience' },
  { value: 20, label: 'Technologies used' },
  { value: 700, label: 'Pull requests' },
  { value: 1000, label: 'AWS resources deployed' },
  { value: 2000, label: 'Code commits' },
];

const Stats: React.FunctionComponent = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-72 xl:max-w-2xl mx-auto xl:mx-0">
          {stats.map(({ value, label }) => (
            <div
              className="sm:flex-1 flex gap-4 items-center xl:justify-start max-w-72"
              key={label}
            >
              <p
                className={`${label.length < 15 ? 'w-[150px]' : 'max-w-[150px]'} text-white/60 text-left`}
              >
                {label}
              </p>
              <div className="">
                <CountUp
                  end={value}
                  duration={3}
                  delay={1}
                  className="text-4xl font-extrabold"
                />
                <span className="text-4xl font-extrabold">+</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
