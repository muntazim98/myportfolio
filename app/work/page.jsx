"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderButtons from "@/components/WorkSliderButtons";

const projects = [
  {
    num: "01",
    category: "Web Development",
    title: "Xperts Interior Decoration",
    desc: "An interior design website that is modern, responsive, asthetic and visually appealing.",
    stack: [
      { name: "React.js" },
      { name: "ASP.NET Core" },
      { name: "Tailwindcss" },
      { name: "Figma" },
      { name: "Framer Motion" },
    ],
    image: "/assets/work/work1.avif",
    live: "https://xperts-interior.web.app/",
    github: "#",
  },
  {
    num: "02",
    category: "Fullstack Web Development",
    title: "",
    desc: "A comprehensive web application with user authentication, data management, and responsive design.",
    stack: [
      { name: "React.js" },
      { name: "MSSQL Server" },
      { name: "ASP.NET Core" },
      { name: "C#" },
      { name: "EF Core" },
      { name: "AWS" },
    ],
    image: "/assets/work/thumb2.avif",
    live: "#",
    github: "#",
  },
  {
    num: "03",
    category: "Desktop App Development",
    title: "Socinator",
    desc: "A desktop application for social media automation & task scheduling.",
    stack: [
      { name: "WPF" },
      { name: "XAML" },
      { name: "Prism" },
      { name: "SQLite" },
      { name: "C#" },
      { name: "MVVM" },
      { name: "Entity Framework" },
    ],
    image: "/assets/work/work3.avif",
    live: "https://socinator.com/",
    github: "#",
  },
  {
    num: "04",
    category: "Desktop App Development",
    title: "Power Browser Installer",
    desc: "A desktop application for installing the Power Browser with a modern, clean UI.",
    stack: [
      { name: "WPF" },
      { name: "XAML" },
      { name: "C#" },
      { name: "MVVM" },
      { name: "GCP" },
    ],
    image: "/assets/work/work4.avif",
    live: "https://powerbrowser.app/",
    github: "#",
  },
];

export default function Work() {
  const [Project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.6, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-16"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16">

          {/* LEFT SIDE - TEXT */}
          <div className="w-full xl:w-[50%] flex flex-col justify-between">
            <div className="flex flex-col gap-6">

              {/* Outline Number */}
              <div className="text-8xl font-bold leading-none text-transparent text-outline">
                {Project.num}
              </div>

              {/* Category */}
              <h2 className="text-[42px] font-semibold text-white leading-tight capitalize">
                {Project.category} Project
              </h2>

              {/* Title */}
              {Project.title && (
                <h3 className="text-3xl font-medium text-white/80">
                  {Project.title}
                </h3>
              )}

              {/* Description */}
              <p className="text-white/60 leading-relaxed">{Project.desc}</p>

              {/* Stack */}
              <ul className="flex flex-wrap gap-2">
                {Project.stack.map((item, index) => (
                  <li
                    key={index}
                    className="text-accent text-lg font-medium"
                  >
                    {item.name}
                    {index !== Project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="border border-white/20"></div>

              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* Live Button */}
                <Link href={Project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 border border-white/10 flex justify-center items-center group transition-all hover:border-accent/50">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* Github Button */}
                <Link href={Project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 border border-white/10 flex justify-center items-center group transition-all hover:border-accent/50">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - SWIPER */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-[440px] md:h-[460px] rounded-xl overflow-hidden group">

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/10 transition-all"></div>

                    {/* Image */}
                    <Image
                      src={item.image}
                      fill
                      className="object-cover scale-100 group-hover:scale-105 transition-all duration-700"
                      alt=""
                    />

                  </div>

                  {/* Slider Controls */}
                  <WorkSliderButtons
                    containerStyles="flex gap-2 absolute right-0 bottom-0 z-20"
                    btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex items-center justify-center rounded-full shadow-lg transition-all"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
