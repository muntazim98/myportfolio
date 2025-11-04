"use client";

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { BsArrowRight, BsArrowUpRight, BsGithub } from 'react-icons/bs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from 'next/link';
import Image from 'next/image';
import WorkSliderButtons from '@/components/WorkSliderButtons';

const projects = [
  {
    num: "01",
    category: "Web Development Front End",
    title: "Project 1",
    desc: "An interior design website that is modern, responsive, and visually appealing.",
    stack: [,{name:'React.js'},{ name: 'Tailwindcss' },{name:'Figma'},{name:'Framer Motion'}],
    image: "/assets/work/thumb1.png",
    live: "#",
    github: "#",
  },
  {
    num: "02",
    category: "Fullstack Web Development",
    title: "Project 2",
    desc: "A comprehensive web application with user authentication, data management, and responsive design.",
    stack: [ {name:'React.js'}, { name: 'MSSQL Server' }, { name: 'ASP.NET Core' },{name:'C#'},{name:'EF Core'},{name:'AWS'}],
    image: "/assets/work/thumb2.png",
    live: "#",
    github: "#",
  },
  {
    num: "03",
    category: "Desktop App Development",
    title: "Project 3",
    desc: "A desktop application for managing social media automation tasks efficiently. It manages multiple socialMedia accounts and monitors their activities by scheduling task and save a lot of time",
    stack: [{ name: 'WPF' }, { name: 'XAML' }, { name: 'Prism' }, { name: 'SQLite' },{name:'C#'},{name:'MVVM'},{name:'Entity Framework'}],
    image: "/assets/work/thumb3.png",
    live: "#",
    github: "#",
  },
]
const Work = () => {
  const [Project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get the index of the current slide
    const currentIndex = swiper.activeIndex;
    // set the current project based on the index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1,
        transition:{delay:2.4,duration:0.4,ease:"easeIn"}
       }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/*outline num */}
              <div className='text-8xl leading-none font-semibold text-transparent text-outline'>
                {Project.num}
              </div>
              {/*project category */}
              <h2 className='text-[42px] font-semibold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {Project.category} Project
              </h2>
              {/*project description */}
              <p className='text-white/60'>{Project.desc}</p>
              <ul className='flex gap-4'>
                {Project.stack.map((item, index) => {
                  return (
                    <li key={index} className='text-xl text-accent'>
                      {item.name}
                      {/*Remove the last Comma*/}
                      {index !== Project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/*Border*/}
              <div className='border border-white/20'></div>
              {/*Buttons */}
              <div className='flex items-center gap-4'>
                {/* live project buttton */}
                <Link href={Project.live} >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github repository buttton */}
                <Link href={Project.github} >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>

          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlideChange}>
              {projects.map((item, index) => {
                return <SwiperSlide key={index} className='w-full'>
                  <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                    {/* overlay */}
                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                    {/* image */}
                    <div className='relative w-full h-full'>
                      <Image src={item.image} fill className='object-cover' alt="" />

                    </div>

                  </div>
                  {/* Slider Button */}
                  <WorkSliderButtons containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_20px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                  btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'/>
                </SwiperSlide>
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work;
