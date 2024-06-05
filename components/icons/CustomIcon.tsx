import React from 'react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const CustomIcon: React.FunctionComponent<{
  icon: React.FunctionComponent;
  content: string;
}> = ({ icon: Icon, content }) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger className="w-[175px] h-[175px] xl:w-[100px] xl:h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group">
          <div className="text-8xl xl:text-6xl group-hover:text-accent transition-all duration-300 ">
            <Icon />
          </div>
        </TooltipTrigger>
        <TooltipContent>{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CustomIcon;
