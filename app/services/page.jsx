"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "AI Development",
    desc: "AI development unlocks intelligent, automated, and creative solutions by integrating advanced models like GPT, Llama, and diffusion systems. Leveraging frameworks such as PyTorch, TensorFlow, and LangChain, applications gain capabilities like natural language understanding, content generation, and intelligent automation. With scalable deployment using cloud platforms and vector databases, GenAI delivers powerful, real-time AI-driven experiences.",
    href: "#",
  },
  
  {
    num: "02",
    title: "Web Development",
    desc: "Web application development combines creativity and technical expertise to craft interactive, user-centric applications with the Integration of AI agents and Apis. Leveraging JS frameworks like React.js and Node.js, alongside robust APIs such as ASP.NET Core, ensures seamless functionality and scalability. Integration with powerful databases like SQL and MongoDB drives efficient data handling for modern web solutions.",
    href: "#",
  },
  {
    num: "03",
    title: "Desktop Development",
    desc: "Desktop application development blends precision and performance to deliver powerful, user-focused solutions. Utilizing .NET Core, WPF, XAML and Prism ensures modularity, maintainability, and dynamic UI capabilities with the integration of AI agents and Apis. With robust database integrations like SQL Server and SQLite, applications achieve seamless data management and scalability.",
    href: "#",
  },
  {
    num: "04",
    title: "Api Development",
    desc: "API development is the backbone of modern software, enabling seamless communication between applications. By designing robust and scalable APIs using technologies like ASP.NET Core and Node JS, developers facilitate data exchange and functionality integration, empowering diverse platforms to work together efficiently.",
    href: "#",
  },
];

export default function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-16">
      <div className="container mx-auto px-4">
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-white text-4xl md:text-5xl font-bold mb-14"
        >
          My <span className="text-accent">Services</span>
        </motion.h1>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                className="
                group flex flex-col gap-5
                p-8 rounded-xl border border-white/10
                hover:border-accent/40 transition-colors duration-500
                bg-white/5 hover:bg-white/10
                h-full
              "
              >
                {/* Top Row */}
                <div className="flex justify-between items-center">
                  {/* Number */}
                  <div
                    className="
                  text-5xl md:text-6xl font-extrabold 
                  text-outline text-transparent 
                  group-hover:text-outline-hover 
                  transition-colors duration-500
                "
                  >
                    {service.num}
                  </div>

                  {/* Icon Button */}
                  <Link
                    href={service.href}
                    className="
                    w-14 h-14 rounded-full 
                    bg-white flex justify-center items-center
                    group-hover:bg-accent transition-colors duration-500
                    hover:rotate-45
                  "
                  >
                    <BsArrowDownRight className="text-primary text-2xl" />
                  </Link>
                </div>

                {/* Title */}
                <h2
                  className="
                text-[32px] md:text-[38px] font-semibold 
                text-white group-hover:text-accent
                transition-colors duration-500 leading-tight
              "
                >
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-white/60 leading-relaxed">{service.desc}</p>

                {/* Border */}
                <div className="border-b border-white/20 mt-4"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
