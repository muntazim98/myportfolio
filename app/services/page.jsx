"use client";
import{ BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";
const services=[
  {
    num:'01',
    title:'Web Development',
    desc:'Web development combines creativity and technical expertise to craft interactive, user-centric applications. Leveraging frameworks like React.js and Node.js, alongside robust APIs such as ASP.NET Core Web Apis, ensures seamless functionality and scalability. Integration with powerful databases like SQL Server and MongoDB drives efficient data handling for modern web solutions.',
    href:'#'
  },
  {
    num:'02',
    title:'Desktop Development',
    desc:'Desktop application development blends precision and performance to deliver powerful, user-focused solutions. Utilizing .NET Core, WPF, XAML and Prism ensures modularity, maintainability, and dynamic UI capabilities. With robust database integrations like SQL Server and SQLite, applications achieve seamless data management and scalability.',
    href:'#'
  },
  {
    num:'03',
    title:'Web Scrapping',
    desc:'Web scraping harnesses the power of browser automation and HTTP requests to extract structured data from diverse web sources efficiently. By combining precision and scalability, it enables streamlined data collection for analytics, automation, and integration into broader systems.',
    href:'#'
  },
  {
    num:'04',
    title:'Logo Design',
    desc:'specializes in creating impactful and visually appealing logos, blending creativity with design principles to craft unique brand identities.',
    href:'#'
  },

]
import { motion } from "framer-motion";
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-10">
     <div className="container mx-auto">
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1,
          transition:{delay:2.4, duration:0.4,ease:"easeIn"}
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {
            services.map((service,index)=>{
              return(
                  <div key={index}
                     className="flex-1 flex flex-col justify-center gap-6 group">
                    {/* top */}
                    <div className="w-full flex justify-between items-center">
                      <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                        {service.num}
                      </div>
                      <Link href={service.href}
                       className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45">
                       <BsArrowDownRight className="text-primary text-3xl"/>
                      </Link>
                    </div>
                    {/* title */}
                    <h2 className="text-[42px] font-semibold leading-none
                    text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                    {/* description */}
                    <p className="text-white/60">{service.desc}</p>
                    {/* border */}
                    <div className="border-b border-white/20 w-full">

                    </div>
                  </div>
              );

            })
          }

        </motion.div>
     </div>
    </section>
  )
}

export default Services;
