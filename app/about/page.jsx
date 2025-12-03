"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaWpforms
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDotnet,
  SiCsharp,
  SiXaml,
  SiMicrosoftsqlserver,
  SiMongodb,
} from "react-icons/si";

const about =
{
  title: 'About Me',
  description: 'As a Developer with having years of experience specializing in Fullstack Development and exploring the use cases of AI for integration to the business needs. Experienced with all stages of the development cycle for dynamic web projects, desktop projects. Well-versed in numerous programming languages including JavaScript, C# and SQL and hands on experience on Python. Strong background in project management and customer relations.',
  info: [
    {
      fieldnme: 'Name',
      fieldvalue: 'Muntazim Ali Khan'
    },
    {
      fieldnme: 'Phone',
      fieldvalue: '(+91) 7328857979'
    },
    {
      fieldnme: 'Email',
      fieldvalue: 'muntazimalikhan@gmail.com'
    },
    {
      fieldnme: 'Freelance',
      fieldvalue: 'Available'
    },
    {
      fieldnme: 'Skype',
      fieldvalue: 'muntazim.01'
    },
    {
      fieldnme: 'Languages',
      fieldvalue: 'English, Hindi'
    },
  ]
}


const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description: 'A Senior Software Developer with 4+ years of experience in industry and freelancing experience, specializing in fullstack development of Desktop Apps and Web Apps. Experienced with all stages of the development cycle for dynamic web projects, desktop projects. Well-versed in numerous programming languages including JavaScript and C#,for database MySql and SQLServer . Strong background in project management and customer relations.',
  items: [
    {
      company: 'Globussoft Technologies',
      jobtitle: 'Sr Software Developer',
      year: '2023 Still Working',
    },
    {
      company: 'Tara Space Pvt Ltd',
      jobtitle: 'Software Developer',
      year: '2022-2023',
    }
  ]
}

const skills = {
  title: 'My Skills',
  description: 'C#, React JS, Asp.Net Core, WPF, Prism, Entity Framework, Javascript, Node JS, Python, HTML5, CSS3, XAML, LINQ, Microsoft SQL Server, MySql, Sqllite, MongoDB, Azure, AWS',
  skilllist: [
    {
      icon: <FaReact />,
      name: 'react.js',
    },
    
    {
      icon: <SiDotnet />,
      name: '.net core',
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js',
    },

    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon:<SiCsharp/>,
      name: 'c#',
    },
    {
      icon:<SiMicrosoftsqlserver/>,
      name: 'SQL Server',
    },
    {
      icon:<SiMongodb/>,
      name: 'MongoDB',
    },
    {
      icon:<SiXaml/>,
      name: 'XAML',
    },
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwindcss',
    },

    {
      icon: <FaFigma />,
      name: 'figma',
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
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
          gap-6">
            <TabsTrigger value="experience" >Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
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
                      experience.items.map((item, index) => {
                        return (
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
              <div className="flex flex-col gap-[30px] py-10" >
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4
                    xl:gap-[30px]">
                  {skills.skilllist.map((item, index) => {
                    return (
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
                              <p className="text-accent capitalize">{item.name}</p>
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
              <div className="flex flex-col gap-[30px] py-10">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-[150px_1fr] gap-y-6  text-left max-w-[620px]  mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <>
                      <li key={`name-${index}`} className="text-white/60">{item.fieldnme}</li>
                      <li key={`value-${index}`} className="text-xl">{item.fieldvalue}</li>
                    </>
                  ))}
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
