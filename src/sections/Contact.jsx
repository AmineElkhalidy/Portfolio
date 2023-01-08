import React from "react";

// FormSpree
import { useForm, ValidationError } from "@formspree/react";

// motion
import { motion } from "framer-motion";

// Icons
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { FiGithub, FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";

const Contact = () => {
  // formSpree state
  const [state, handleSubmit] = useForm("xeqdeyeo");

  const currentYear = new Date().getFullYear();

  return (
    <section className="max-w-6xl mx-auto px-6 min-h-screen" id="contact">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="pt-24"
      >
        <h2 className="text-black-900 text-2xl text-center font-nav font-semibold mb-12 md:text-3xl lg:text-4xl">
          Get in touch with me
        </h2>
      </motion.div>
    </section>
  );
};

export default Contact;
