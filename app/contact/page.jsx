"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 7328857979",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "muntazimalikhan@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Bangalore, India",
  }
]
import { motion } from "framer-motion";
import { Item, SelectItem } from "@radix-ui/react-select";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className='py-6'
    >
      <div className='container mx-auto '>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/* form section */}
          <div className='xl:w-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
              <h3 className='text-4xl text-accent '> Let&apos;s work together</h3>
              <p className='text-white/60'>I am always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              {/* input */}

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input type="firstname" placeholder="First name" />
                <Input type="lastname" placeholder="Last name" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>
              {/* select option  */}
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="desktop-development">Desktop Development</SelectItem>
                    <SelectItem value="web-scrapping">Web Scrapping</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* text Area */}
              <Textarea placeholder="Type your message here." className='h-[200px]' />
              {/* submit button */}
              <Button size="md" className='max-w-40' >
                Send Message
              </Button>
            </form>
          </div>
          {/* info section */}
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-start gap-6">
                    <div className="w-[62px] h-[62px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>  
                    </div>
                    <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

      </div>
    </motion.section>
  )
}

export default Contact;
