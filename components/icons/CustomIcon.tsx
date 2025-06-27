import React from 'react';


const CustomIcon: React.FunctionComponent<{
  icon: React.FunctionComponent;
  content: string;
}> = ({ icon: Icon, content }) => {
  return (
    <div className="w-[190px] h-[190px] xl:w-[125px] xl:h-[125px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group p-4">
      <div className="text-8xl xl:text-6xl group-hover:text-accent transition-all duration-300">
        <Icon />
      </div>
      <p className="text-white/60 group-hover:text-accent mt-2 text-center transition-all duration-300">{content}</p>
    </div>
  );
};

export default CustomIcon;