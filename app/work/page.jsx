"use client";
import {motion} from 'framer-motion';
import React,{useState} from 'react';
import {Swiper , SwiperSlide} from 'swiper/react';
import "swiper/css";
import { BsArrowUpRight } from 'react-icons/bs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from 'next/link';
import Image from 'next/image';
const projects=[
  {
    num:"01",
    category:"Web Development",
    title:"Project 1",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magnam.",
    stack:[{name:'Html 5'},{name:'Css 3'},{name:'Javascript'}],
    image:"/assets/project1.png",
    href:"#"
  }
]
const Work = () => {
  return (
    <div>
      Work Page
    </div>
  )
}

export default Work;
