import React from "react";

// motion
import { motion } from "framer-motion";

// Icons
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp, BsPhone } from "react-icons/bs";
import { FiGithub, FiFacebook } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";

const Contact = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 min-h-screen" id="contact">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="pt-24"
      >
        <h2 className="text-2xl text-center font-nav font-semibold mb-12 md:text-3xl lg:text-4xl">
          Get in touch with me
        </h2>

        {/* Email, Phone and Social media accounts */}
        <div className="flex flex-col space-y-6 justify-center items-center md:flex-row md:space-y-0 md:space-x-10">
          {/* Email */}
          <div className="flex items-center justify-center space-x-3 p-4 bg-slate-700 rounded-md hover:text-secondary">
            <span>
              <AiOutlineMail size={28} />
            </span>

            <a href="mailto:a.amineelkhalidy@gmail.com">
              a.amineelkhalidy@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center space-x-3 p-4 bg-slate-700 rounded-md hover:text-secondary">
            <span>
              <BsPhone size={28} />
            </span>

            <a href="tel:+212 611154307">+212 611154307</a>
          </div>

          {/* Social Accounts */}
          <div className="flex  justify-center space-x-14 p-4 bg-slate-700 rounded-md">
            <a className="hover:text-secondary hover:scale-125" href="#">
              <FiFacebook size={28} />
            </a>

            <a className="hover:text-secondary hover:scale-110" href="#">
              <BsWhatsapp size={28} />
            </a>

            <a className="hover:text-secondary hover:scale-110" href="#">
              <FiGithub size={28} />
            </a>

            <a className="hover:text-secondary hover:scale-110" href="#">
              <SiUpwork size={28} />
            </a>
          </div>
        </div>

        {/* Form */}
        <form action="#" className=""></form>
      </motion.div>
    </section>
  );
};

export default Contact;
