'use client';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';

import About from './About';
import { about, education, experience, techStack } from './data';
import ResumeItem from './ResumeItem';
import Skills from './Skills';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Services: NextPage = () => {
  return (
    <main>
      <div className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.5, duration: 0.5, ease: 'easeInOut' },
              }}
              className="w-full max-w-[380px]"
            >
              <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
              </TabsList>
            </motion.div>
            <div className="min-h-[70vh] w-full">
              <TabsContent value="experience" className="w-full">
                <ResumeItem
                  title={experience.title}
                  description={experience.description}
                  details={experience.details}
                />
              </TabsContent>
              <TabsContent value="education" className="w-full">
                <ResumeItem
                  title={education.title}
                  description={education.description}
                  details={education.details}
                />
              </TabsContent>
              <TabsContent value="skills" className="w-full h-full">
                <Skills
                  title={techStack.title}
                  description={techStack.description}
                  details={techStack.details}
                />
              </TabsContent>
              <TabsContent
                value="about"
                className="w-full text-center xl:text-left"
              >
                <About title={about.title} description={about.description} />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </main>
  );
};

export default Services;
