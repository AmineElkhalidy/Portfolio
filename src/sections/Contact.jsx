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

  return (
    <section
      className="max-w-6xl mx-auto px-6 min-h-screen select-none"
      id="contact"
    >
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="pt-24"
      >
        <h2 className="text-2xl text-center font-nav font-semibold mb-12 select-none md:text-3xl lg:text-4xl">
          Get in touch with me
        </h2>

        {/* Email, Phone and Social media accounts */}
        <div className="max-w-2xl mx-auto my-14">
          <div className="flex flex-col space-y-6 justify-center md:flex-row md:flex-wrap-reverse md:-space-y-0 md:gap-8">
            {/* Email */}
            <div className="text-slate-300 font-medium flex items-center justify-center space-x-3 p-[1.25rem] bg-[#0a192f] rounded-md select-none md:w-[45%] hover:text-secondary hover:border hover:border-secondary">
              <span>
                <AiOutlineMail size={28} />
              </span>

              <a href="mailto:a.amineelkhalidy@gmail.com">
                a.amineelkhalidy@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="text-slate-300 font-medium flex items-center justify-center space-x-3 p-[1.25rem] bg-[#0a192f] rounded-md select-none md:w-[45%] hover:text-secondary hover:border hover:border-secondary">
              <span>
                <BsPhone size={28} />
              </span>

              <a href="tel:+212 611154307">+212 611154307</a>
            </div>

            {/* Social Accounts */}
            <div className="text-slate-300 flex items-center justify-center gap-10 p-[1.25rem] bg-[#0a192f] rounded-md md:w-[70%] md:gap-16">
              <a
                className="hover:text-secondary hover:scale-[1.3]"
                href="https://www.facebook.com/amine.elkhalidy.73"
                target="_blank"
              >
                <FiFacebook size={28} />
              </a>

              <a
                className="hover:text-secondary hover:scale-125"
                href="https://twitter.com/ElkhalidyAmine"
                target="_blank"
              >
                <FiTwitter size={28} />
              </a>

              <a
                className="hover:text-secondary hover:scale-[1.3]"
                href="https://www.linkedin.com/in/amine-elkhalidy-b28529233/"
                target="_blank"
              >
                <FiLinkedin size={28} />
              </a>

              <a
                className="hover:text-secondary hover:scale-[1.3]"
                href="https://github.com/AmineElkhalidy"
                target="_blank"
              >
                <FiGithub size={28} />
              </a>

              <a
                className="hover:text-secondary hover:scale-[1.3]"
                href="https://www.upwork.com/freelancers/aminee12"
                target="_blank"
              >
                <SiUpwork size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        {state.succeeded ? (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            className="h-[5rem] max-w-3xl mx-auto"
          >
            <p className="text-secondary text-2xl text-center font-semibold md:text-3xl lg:text-4xl">
              Thank you for your message
              <br />I will be in touch{" "}
              <span className="text-secondary">as soon as possible</span>.
            </p>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/xeqdeyeo"
            className="max-w-2xl mx-auto w-full flex flex-col space-y-4 mb-4"
          >
            <div className="bg-[#0a192f]">
              <input
                className="input-field draw relative outline-none bg-transparent w-full p-3.5 rounded-md focus:border focus:border-secondary"
                placeholder="Your Name"
                type="text"
                name="name"
                id="name"
                required
              />

              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>

            <div className="bg-[#0a192f]">
              <input
                className="input-field draw relative outline-none bg-transparent w-full p-3.5 rounded-md focus:border focus:border-secondary"
                placeholder="Your Email"
                type="email"
                name="email"
                id="email"
                required
              />

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="bg-[#0a192f]">
              <textarea
                placeholder="Your Message"
                className="input-field draw relative outline-none bg-transparent h-[170px] resize-none w-full p-3.5 rounded-md focus:border focus:border-secondary"
                name="message"
                id="message"
                required
              />

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={state.submitting}
                className="px-6 py-3 mt-4 border text-secondary border-secondary rounded-md cursor-pointer duration-200 font-nav font-semibold text-md tracking-widest hover:bg-secondary/20"
              >
                Send Message
              </button>
            </div>
          </form>
        )}

        <p className="text-slate-300 text-sm font-light mt-20 mb-4 text-center cursor-pointer hover:text-secondary">
          Designed & Built by Amine Elkhalidy
          <br />
          &copy; 2022 - All Rights Reserved
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
