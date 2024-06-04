import React from 'react';

import Stats from '@/components/shared/Stats';

interface Props {
  title: string;
  description: string;
}

const About: React.FunctionComponent<Props> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-[30px]">
      <h3 className="text-4xl font-bold">{title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {description}
      </p>
      <Stats />
    </div>
  );
};

export default About;
