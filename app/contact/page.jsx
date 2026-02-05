"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "(+91) 7328857979" },
  { icon: <FaEnvelope />, title: "Email", description: "muntazimalikhan@gmail.com" },
  { icon: <FaMapMarkerAlt />, title: "Address", description: "Bangalore, India" },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const isFormValid =
    formData.firstname &&
    formData.lastname &&
    formData.email &&
    formData.phone &&
    formData.service &&
    formData.message;

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid || loading) return;

    setLoading(true);

    const params = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    };

    try {
      const response = await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        params,
        "YOUR_PUBLIC_KEY"
      );
  
      // EmailJS successful response:
    // { status: 200, text: "OK" }
    if (response.status === 200) {
      toast.success("Message sent successfully!");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } else {
      // When EmailJS returns 400, 422 etc.
      toast.error("Failed to send message. Invalid request.");
    }
  } catch (error) {
    // Only triggers on network or CORS error
    toast.error("Something went wrong. Please try again later.");
  }
      setLoading(false);
    
  };

  return (
    <>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6"
      >
        <div className="container mx-auto ">
          <div className="flex flex-col xl:flex-row gap-[30px]">

            {/* FORM SECTION */}
            <div className="xl:w-[54%] order-2 xl:order-none">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              >
                <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
                <p className="text-white/60">
                  I am always open to discussing new projects, creative ideas or opportunities.
                </p>

                {/* Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    value={formData.firstname}
                    onChange={(e) => handleChange("firstname", e.target.value)}
                    placeholder="First name"
                  />
                  <Input
                    value={formData.lastname}
                    onChange={(e) => handleChange("lastname", e.target.value)}
                    placeholder="Last name"
                  />
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="Email address"
                  />
                  <Input
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="Phone number"
                  />
                </div>

                {/* Select */}
                <Select
                  value={formData.service}
                  onValueChange={(value) => handleChange("service", value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a Service</SelectLabel>
                      <SelectItem value="ai-development">
                        AI Developement
                      </SelectItem>
                      <SelectItem value="web-development">
                        Web Development
                      </SelectItem>
                      <SelectItem value="desktop-development">
                        Desktop Development
                      </SelectItem>
                      
                      <SelectItem value="api-development">
                        API Developement
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                {/* TextArea */}
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Type your message here."
                  className="h-[200px]"
                />

                {/* Submit Btn */}
                <Button
                  type="submit"
                  size="md"
                  className="max-w-40"
                  disabled={!isFormValid || loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* INFO SECTION */}
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => (
                  <li key={index} className="flex items-start gap-6">
                    <div className="w-[62px] h-[62px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </motion.section>
    </>
  );
}
