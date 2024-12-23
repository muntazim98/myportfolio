"use client";
import { 
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma
 } from "react-icons/fa";
 import { 
  SiTailwindcss,
  SiNextdotjs,
 } from "react-icons/si";

 const about=
  {
    title:'About Me',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magnam.',
    info:[
      {
        fieldnme:'Name',
        fieldvalue:'Muntazim Ali Khan'
      },
      {
        fieldnme:'Phone',
        fieldvalue:'(+91) 7328857979'
      },
      {
        fieldnme:'Email',
        fieldvalue:'muntazimalikhan@gmail.com'
      },
      {
        fieldnme:'Freelance',
        fieldvalue:'Available'
      },
      {
        fieldnme:'Skype',
        fieldvalue:'muntazim.01'
      },
      {
        fieldnme:'Languages',
        fieldvalue:'English, Hindi'
      },
    ]
  }
 

 const experience={
    icon:'/assets/resume/badge.svg',
    title:'My Experience',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magnam.',
    items:[
      {
        company:'Globussoft Technologies',
        jobtitle:'Software Developer',
        year:'2022 Still Working',
      },
      {
        company:'TechnoCraft Solutions',
        jobtitle:'Softeware Developer',
        year:'2022-2023',
      }
    ]
 }
 const education={
  icon:'/assets/resume/cap.svg',
  title:'My education',
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magnam.',
  items:[
    {
      company:'Lorem',
      jobtitle:'Lorems ispum',
      year:'Lorem',
    },
    {
      company:'Lorem ispum',
      jobtitle:'Lorem ipspum color',
      year:'Lorem ipsum',
    }
  ]
}
const skills={
  title:'My Skills',
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magnam.',
  skilllist:[
    {
      icon:<FaHtml5/>,
      name:'html 5',
    },
    {
      icon:<FaCss3/>,
      name:'css 3',
    },
    {
      icon:<FaJs/>,
      name:'javascript',
    },
    {
      icon:<FaReact/>,
      name:'react.js',
    },
    {
      icon:<FaNodeJs/>,
      name:'node.js',
    },
    {
      icon:<SiTailwindcss/>,
      name:'tailwindcss',
    },
    {
      icon:<SiNextdotjs/>,
      name:'next.js',
    },
    {
      icon:<FaFigma/>,
      name:'figma',
    },
    
  ]
  
}
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{
      opacity:1,
      transition:{delay:2.4,duration:0.4,ease:"easeIn"}
    }}
    className="min-h[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs 
        defaultValue="experience"
         className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
          gap-6">
            <TabsTrigger value ="experience" >Experieance</TabsTrigger>
            <TabsTrigger value="education" >Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger  value="about">About Us</TabsTrigger>
          </TabsList>
          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full" >
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">
                {experience.title}
              </h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {
                    experience.items.map((item,index)=>{
                      return(
                        <li key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">
                            {item.year}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.jobtitle}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full
                            bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>

                      );

                    })
                  }
                </ul>
              </ScrollArea>
            </div>
        
            </TabsContent>
             {/* Education */}
             <TabsContent value="education" className="w-full" >
             <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">
                {education.title}
              </h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {
                    education.items.map((item,index)=>{
                      return(
                        <li key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">
                            {item.year}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.jobtitle}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full
                            bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>

                      );

                    })
                  }
                </ul>
              </ScrollArea>
            </div>
        
            </TabsContent>
             {/* Skills */}
             <TabsContent value="skills" className="w-full h-full" >
                  <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                    </div>
                    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4
                    xl:gap-[30px]">
                      {skills.skilllist.map((item,index)=>{
                        return(
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#252329] rounded-xl flex  justify-center items-center group">
                                  <div className="text-6xl group-hover:text-accent
                                  transition-all duration-300">
                                    {item.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className= "text-accent capitalize">{item.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
            </TabsContent>
             {/* About */}
             <TabsContent value="about" className="w-full text-center xl:text-left" >
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {
                  about.info.map((item,index)=>{
                    return(
                      <li 
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldnme}</span>
                        <span className="text-xl">{item.fieldvalue}</span>
                      </li>

                    );
                }
                )}
              </ul>
            </div>
            </TabsContent>
          </div>
        </Tabs>

      </div>
    </motion.div>
  )
}

export default About;
