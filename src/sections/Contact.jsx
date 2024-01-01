import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import Heading from "../components/atoms/Heading";
import ParentContainer from "../components/Container";
import Paragraph from "../components/atoms/Paragraph";
import MainButton from "../components/atoms/MainButton";

const Contact = () => {
  const [state, handleSubmit] = useForm("xeqdeyeo");
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact">
      <ParentContainer>
        <div className="pt-24">
          <Heading>Contact Me</Heading>
          <div className="grid gap-16 md:grid-cols-2 lg:gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ x: [-100, 0], opacity: 1 }}
              transition={{ duration: 0.75 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black-900 mb-8 dark:text-white">
                Get in touch
              </h2>
              <Paragraph styles="max-w-lg w-full text-grey-400 text-base sm:text-lg leading-7 dark:text-gray-300">
                Have a project in mind? Looking to partner or work together?
                Reach out through the form and I'll get back to you in the next
                24 hours.
              </Paragraph>

              {/* Contact resources container */}
              {/* <div className="mt-[60px] flex flex-col gap-6">
                  <a
                    href="mailto:a.amineelkhalidy@gmail.com"
                    className="dark:text-gray-100 inline-flex items-center gap-4 text-base sm:text-[20px] font-bold"
                  >
                    <EnvelopeIcon className="w-5 h-5 sm:w-7 sm:h-7" />{" "}
                    a.amineelkhalidy@gmail.com
                  </a>
                  <a
                    href="tel:+212611154307"
                    className="dark:text-gray-100 inline-flex items-center gap-4 text-base sm:text-[20px] font-bold"
                  >
                    <PhoneIcon className="w-5 h-5 sm:w-7 sm:h-7" />
                    +212611154307
                  </a>
                </div> */}
            </motion.div>

            {/* Form Container */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ x: [100, 0], opacity: 1 }}
              transition={{ duration: 0.75 }}
              className="mb-16"
            >
              {state.succeeded ? (
                <div className="w-full h-full">
                  <p className="text-xl text-center font-semibold sm:text-2xl md:text-3xl lg:text-4xl md:mt-12">
                    <span className="gradient-text">Thank you</span> for your
                    message, I'll get in touch with you{" "}
                    <span className="gradient-text">as soon as possible</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="" action="#">
                  {/* First and Last name box */}
                  <div className="w-full flex flex-col mb-6 sm:flex-row sm:gap-6 sm:mb-0">
                    {/* First name box */}
                    <div className="mb-6 sm:w-1/2">
                      <label
                        className="mb-3 block font-bold text-black-900 dark:text-white"
                        htmlFor="firstName"
                      >
                        First Name
                      </label>
                      <input
                        className="w-full py-3 pl-6 bg-[#f2f6f7] outline-none duration-300 focus:border focus:border-green-700"
                        type="text"
                        name="first-name"
                        id="firstName"
                        placeholder="Your first name"
                        required
                      />
                      <ValidationError
                        prefix="First Name"
                        field="first-Name"
                        errors={state.errors}
                      />
                    </div>

                    {/* Last name box */}
                    <div className="sm:w-1/2">
                      <label
                        className="mb-3 block font-bold text-black-900 dark:text-white"
                        htmlFor="lastName"
                      >
                        Last Name
                      </label>
                      <input
                        className="w-full py-3 pl-6 bg-[#f2f6f7] duration-300 focus:border focus:border-green-700 outline-none"
                        type="text"
                        name="last-name"
                        id="lastName"
                        placeholder="Your last name"
                        required
                      />
                      <ValidationError
                        prefix="Last Name"
                        field="last-Name"
                        errors={state.errors}
                      />
                    </div>
                  </div>

                  {/* Email box */}
                  <div className="mb-6">
                    <div className="">
                      <label
                        className="mb-3 block font-bold text-black-900 dark:text-white"
                        htmlFor="email"
                      >
                        Your E-mail
                      </label>

                      <input
                        className="w-full py-3 pl-6 bg-[#f2f6f7] duration-300 focus:border focus:border-green-700 outline-none"
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Enter your e-mail"
                        required
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                  </div>

                  {/* Message box */}
                  <div className="mb-6">
                    <div className="">
                      <label
                        className="mb-3 block font-bold text-black-900 dark:text-white"
                        htmlFor="message"
                      >
                        Your Message :
                      </label>
                      <textarea
                        className="w-full pt-4 pl-6 outline-none duration-300 focus:border focus:border-green-700 pb-24 bg-[#f2f6f7] resize-none"
                        name="message"
                        id="message"
                        maxLength="5000"
                        placeholder="Your message in details..."
                        autoCorrect="false"
                      ></textarea>
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </div>
                  </div>

                  {/* Button box */}
                  <div className="relative">
                    <button
                      className="inline-block px-[33px] py-5 dark:bg-white dark:text-black-900 bg-black-900 text-white cursor-pointer text-lg duration-300 font-nav font-semibold z-10 hover:translate-x-2 hover:translate-y-2"
                      href="#contact"
                      type="submit"
                      disabled={state.submitting}
                    >
                      Submit Now
                    </button>

                    <span className="contact-btn absolute -z-10 top-2 left-2 px-[5.25rem] py-[2.15rem] bg-red-500" />
                  </div>
                </form>
              )}
            </motion.div>
          </div>

          {/* Copyright text */}
          <p className="text-black-900 py-4 pt-20 dark:text-white text-sm sm:text-base text-center font-medium">
            <span>Amine Elkhalidy</span>
            <br />
            &copy; {currentYear} - All Rights Reserved
          </p>
        </div>
      </ParentContainer>
    </section>
  );
};

export default Contact;
