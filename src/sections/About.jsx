import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Heading from "../components/atoms/Heading";
import ParentContainer from "../components/Container";
import ImageBox from "../components/ImageBox";
import Paragraph from "../components/atoms/Paragraph";

const About = () => {
  return (
    <section className="pt-[6rem]" id="about">
      <ParentContainer>
        <div>
          <Heading>Who Am I?</Heading>

          <motion.div className="about__container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ x: [-100, 0], opacity: 1 }}
              transition={{ duration: 0.75 }}
            >
              <Paragraph styles="about__desc mb-3">
                Hello, I am{" "}
                <span className=" gradient-text font-medium">
                  Amine Elkhalidy
                </span>
                , I am a{" "}
                <span className="gradient-text font-medium">
                  Web developer{" "}
                </span>
                and I enjoy building stunning websites, web applications for my
                clients.
              </Paragraph>

              <Paragraph styles="about__desc mb-3">
                I am working as a freelancer on{" "}
                <a
                  href="https://www.upwork.com/"
                  target="_blank"
                  rel="referrer noopener"
                  className="gradient-text font-medium"
                >
                  Upwork
                </a>
                , I've helped many clients to bring their vision to life in the
                network.
              </Paragraph>

              <Paragraph styles="about__desc mb-3">
                Here are a few technologies I’ve been working with:
              </Paragraph>

              <ul className="about__techlist">
                {[
                  "HTML5",
                  "CSS3 & TailwindCSS",
                  "  JavaScript",
                  "React.js",
                  "Next.js",
                  "TypeScript",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <ChevronRightIcon className="w-3 h-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ x: [100, 0], opacity: 1 }}
              transition={{ duration: 0.75 }}
              className="about__img-container"
            >
              <ImageBox />
            </motion.div>
          </motion.div>
        </div>
      </ParentContainer>
    </section>
  );
};

export default About;
