import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Heading from "../components/atoms/Heading";
import ParentContainer from "../components/Container";
import ImageBox from "../components/ImageBox";
import Paragraph from "../components/atoms/Paragraph";

const About = () => {
  return (
    <section className="h-full mt-20" id="about">
      <ParentContainer>
        <div className="md:pt-16">
          <Heading>Who Am I?</Heading>

          <motion.div className="grid gap-20 md:gap-0 md:grid-cols-2 lg:pl-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ x: [-100, 0], opacity: 1 }}
              transition={{ ease: "linear", duration: 1 }}
              viewport={{ once: true }}
              layout
            >
              <Paragraph styles="about__desc mb-3 font-medium">
                Hello, I am{" "}
                <span className=" gradient-text font-medium">
                  Amine Elkhalidy
                </span>
                , I am a{" "}
                <span className="gradient-text font-medium">
                  software developer{" "}
                </span>
                and I enjoy building stunning websites, web applications for my
                clients.
              </Paragraph>

              <Paragraph styles="about__desc mb-3 font-medium">
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

              <Paragraph styles="about__desc mb-3 font-medium">
                Here are a few technologies I&apos;ve been working with:
              </Paragraph>

              <ul className="about__techlist">
                {[
                  "HTML5",
                  "CSS3 & TailwindCSS",
                  "JavaScript",
                  "React.js",
                  "Next.js/ Sveltekit",
                  "TypeScript",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 font-medium"
                  >
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
              viewport={{ once: true }}
              layout
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
