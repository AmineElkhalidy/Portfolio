import React from "react";

// FormSpree
import { useForm, ValidationError } from "@formspree/react";

// motion
import { motion } from "framer-motion";

// Icons
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

// Components
import Heading from "../components/atoms/Heading";

const Contact = () => {
  // formSpree state
  const [state, handleSubmit] = useForm("xeqdeyeo");

  // current year
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section className="h-full w-full" id="contact">
        <div className="max-w-6xl mx-auto px-6 min-h-screen">
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
            className="pt-24"
          >
            <Heading>Contact Me</Heading>
            {/* Container */}
            <div className="grid gap-16 md:grid-cols-2 lg:gap-8">
              {/* Text container */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-black-900 mb-8 dark:text-white">
                  Get in touch
                </h2>
                <p className="max-w-lg text-grey-400 text-lg leading-7 dark:text-gray-300">
                  Have a project in mind? Looking to partner or work together?
                  Reach out through the form and I'll get back to you in the
                  next 24 hours.
                </p>

                {/* Contact resources container */}
                <div className="mt-[60px] flex flex-col gap-6">
                  <a
                    href="mailto:a.amineelkhalidy@gmail.com"
                    className="dark:text-gray-100 inline-flex items-center gap-4 text-[20px] font-bold"
                  >
                    <EnvelopeIcon className="w-7 h-7" />{" "}
                    a.amineelkhalidy@gmail.com
                  </a>
                  <a
                    href="tel:+212611154307"
                    className="dark:text-gray-100 inline-flex items-center gap-4 text-[20px] font-bold"
                  >
                    <PhoneIcon className="w-7 h-7" />
                    +212611154307
                  </a>
                </div>
              </div>

              {/* Form Container */}
              <div className="mb-16">
                {state.succeeded ? (
                  <div className="w-full h-full">
                    <p className="text-xl text-center font-semibold sm:text-2xl md:text-3xl lg:text-4xl md:mt-12">
                      <span className="gradient-text">Thank you</span> for your
                      message, I'll get in touch with you{" "}
                      <span className="gradient-text">as soon as possible</span>
                      .
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="max-w-xl" action="#">
                    {/* First and Last name box */}
                    <div className="flex flex-col mb-6 sm:flex-row sm:gap-6 sm:mb-0">
                      {/* First name box */}
                      <div className="mb-6">
                        <label
                          className="mb-3 block font-bold text-black-900 dark:text-white"
                          htmlFor="firstName"
                        >
                          First Name
                        </label>
                        <input
                          className="w-full py-3 pl-6 bg-[#f2f6f7] outline-none duration-300 focus:border focus:border-orange-400"
                          type="text"
                          name="first-name"
                          id="firstName"
                          placeholder="John"
                          required
                        />
                        <ValidationError
                          prefix="First Name"
                          field="first-Name"
                          errors={state.errors}
                        />
                      </div>

                      {/* Last name box */}
                      <div className="">
                        <label
                          className="mb-3 block font-bold text-black-900 dark:text-white"
                          htmlFor="lastName"
                        >
                          Last Name
                        </label>
                        <input
                          className="w-full py-3 pl-6 bg-[#f2f6f7] duration-300 focus:border focus:border-orange-400 outline-none"
                          type="text"
                          name="last-name"
                          id="lastName"
                          placeholder="Doe"
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
                          className="w-full py-3 pl-6 bg-[#f2f6f7] duration-300 focus:border focus:border-orange-400 outline-none"
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
                          className="w-full pt-4 pl-6 outline-none duration-300 focus:border focus:border-orange-400 pb-24 bg-[#f2f6f7] resize-none"
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
                        className="inline-block px-[31px] py-5 dark:bg-white dark:text-black-900 bg-black-900 text-white cursor-pointer text-lg duration-300 font-nav font-semibold z-10 hover:translate-x-2 hover:translate-y-2"
                        href="#contact"
                        type="submit"
                        disabled={state.submitting}
                      >
                        Submit Now!
                      </button>

                      <span className="contact-btn absolute -z-10 top-2 left-2 px-[5.25rem] py-[2.15rem] bg-red-500" />
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Copyright text */}
            <p className="text-black-900 py-4 dark:text-white text-sm sm:text-base text-center font-medium">
              <span>Amine Elkhalidy</span>
              <br />
              &copy; {currentYear} - All Rights Reserved
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
