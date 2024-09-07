'use client';
import { useState } from 'react';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperClass } from 'swiper/react';
import 'swiper/css';

import { projects } from './data';
import WorkSliderButtons from './WorkSliderButtons';

import CustomIcon from '@/components/icons/CustomIcon';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const Services: NextPage = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper: SwiperClass): void => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <main>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.5, duration: 0.5, ease: 'easeInOut' },
        }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-7xl leading-none font-extrabold text-transparent font-outline-2">
                  {project.id}
                </div>
                <div className="flex items-end gap-6">
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-4">
                    <Link href={project.live} target="_blank">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger>
                            <FontAwesomeIcon
                              icon={faArrowUpRightFromSquare}
                              className="text-accent text-2xl hover:opacity-80"
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                    <Link
                      href={`${project.github || ''}`}
                      aria-disabled={!project.github}
                      target="_blank"
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger>
                            <FontAwesomeIcon
                              icon={faGithub}
                              className="text-accent text-2xl hover:opacity-80"
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{`${project.github ? 'Source Code' : 'Code is private'}`}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
                </div>
                <p className="text-white/60 text-lg">{project.description}</p>
                <div>
                  <p className="text-accent mb-4">Tech Stack</p>
                  <ul className="flex flex-wrap justify-center sm:justify-normal gap-6 xl::gap-4">
                    {project.stack.map((item, index) => (
                      <motion.li
                        initial={{ opacity: 0, x: index % 2 === 0 ? -75 : 75 }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                          transition: {
                            delay: 0.5,
                            duration: 0.75,
                            ease: 'easeOut',
                          },
                        }}
                        key={item.name}
                        className=""
                      >
                        <CustomIcon icon={item.icon} content={item.name} />
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project) => (
                  <SwiperSlide key={project.id} className="w-full">
                    <div className="relative h-[460px] group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <WorkSliderButtons
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default Services;
