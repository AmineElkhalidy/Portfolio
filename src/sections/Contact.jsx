import React from "react";

// FormSpree
import { useForm, ValidationError } from "@formspree/react";

// motion
import { motion } from "framer-motion";

// Icons
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

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
        <h2 className="text-black-900 text-2xl text-center font-nav font-semibold mb-12 md:text-3xl lg:text-4xl"></h2>

        {/* Container */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-8">
          {/* Text container */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black-900 mb-8">
              Get in touch
            </h2>
            <p className="max-w-lg text-grey-400 text-lg leading-7">
              Have a project in mind? Looking to partner or work together? Reach
              out through the form and I'll get back to you in the next 48
              hours.
            </p>

            {/* Contact resources container */}
            <div className="mt-[60px] flex flex-col gap-6">
              <a
                href="mailto:a.amineelkhalidy@gmail.com"
                className="inline-flex items-center gap-4 text-[20px] font-bold"
              >
                <EnvelopeIcon className="w-7 h-7" /> a.amineelkhalidy@gmail.com
              </a>
              <a
                href="tel:+212611154307"
                className="inline-flex items-center gap-4 text-[20px] font-bold"
              >
                <PhoneIcon className="w-7 h-7" />
                +212611154307
              </a>
            </div>
          </div>

          {/* Form Container */}
          <div className="mb-32">
            <form className="max-w-xl" action="#">
              {/* First and Last name box */}
              <div className="flex flex-col mb-6 sm:flex-row sm:gap-6 sm:mb-0">
                {/* First name box */}
                <div className="mb-6">
                  <label
                    className="mb-3 block font-bold text-black-900"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    className="w-full py-3 pl-6 bg-[#f2f6f7] border-none outline-none"
                    type="text"
                    name="first-name"
                    id="firstName"
                    placeholder="First Name"
                    required
                  />
                </div>

                {/* Last name box */}
                <div className="">
                  <label
                    className="mb-3 block font-bold text-black-900"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    className="w-full py-3 pl-6 bg-[#f2f6f7] border-none outline-none"
                    type="text"
                    name="last-name"
                    id="lastName"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>

              {/* Email box */}
              <div className="mb-6">
                <div className="">
                  <label
                    className="mb-3 block font-bold text-black-900"
                    htmlFor="email"
                  >
                    Your E-mail
                  </label>

                  <input
                    className="w-full py-3 pl-6 bg-[#f2f6f7] border-none outline-none"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your e-mail"
                    required
                  />
                </div>
              </div>

              {/* Message box */}
              <div className="mb-6">
                <div className="">
                  <label
                    className="mb-3 block font-bold text-black-900"
                    htmlFor="message"
                  >
                    Tell me a bit more what you are looking for?
                  </label>
                  <textarea
                    className="w-full pt-4 pl-6 outline-none border-none pb-24 bg-[#f2f6f7]"
                    name="message"
                    id="message"
                    maxLength="5000"
                    placeholder="Explain here"
                  ></textarea>
                </div>
              </div>

              {/* Button box */}
              <div className="relative">
                <a
                  className="inline-block px-[31px] py-5 bg-black-900 text-white cursor-pointer text-lg duration-300 font-nav font-semibold z-10 hover:translate-x-2 hover:translate-y-2"
                  href="#contact"
                >
                  Submit Now!
                </a>

                <span className="contact-btn absolute -z-10 top-2 left-2 px-[5.25rem] py-[2.15rem] bg-red-500" />
              </div>
            </form>
          </div>
        </div>

        {/* Copyright text */}
        <p className="text-black-900 text-sm sm:text-base text-center font-medium">
          <span>Amine Elkhalidy</span>
          <br />@<span className="gradient-text">{currentYear}</span> - All
          Rights Reserved
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
