import { motion } from "framer-motion";
import { skills } from "../data/data";
import Heading from "../components/atoms/Heading";

const Skills = () => {
  return (
    <section className="pt-[6rem] pb-20" id="skills">
      <div className="p-container">
        <div>
          <Heading>Skills & Experiences</Heading>

          <div className="skillsexperience__container">
            <div className="skills__container">
              {skills.map((skill: any, index: number) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0 }}
                  animate={{ y: [30, 0], opacity: [0, 0.5, 1] }}
                  transition={{
                    ease: "easeIn",
                    duration: 1,
                    delay: 0.2 * index,
                  }}
                  className="flex flex-col justify-center items-center"
                >
                  <div className="bg-gray-100 w-[90px] h-[90px] rounded-full mb-[.75rem] flex justify-center items-center hover:border hover:border-green-700">
                    <img
                      className="w-[60%]"
                      src={skill.image}
                      alt={skill.name}
                    />
                  </div>

                  <p className="text-sm font-medium sm:text-md xl:text-lg text-black-400">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ x: [100, 0], opacity: 1 }}
              transition={{ duration: 0.75 }}
              className="experience__container"
            >
              {/* 2023 */}
              <div className="experience__info">
                <p className="experience__year">2023</p>

                <div>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="experience__profession">Freelancer</h3>
                    <p className="experience__desc">
                      I am working as a freelancer
                    </p>
                    <p className="experience__company">Upwork || Fiverr</p>
                  </motion.div>
                </div>
              </div>

              {/* 2022 */}
              <div className="experience__info">
                <p className="experience__year">2022</p>

                <div>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="experience__profession">Freelancer</h3>
                    <p className="experience__desc">
                      I am working as a freelancer on Upwork
                    </p>
                    <p className="experience__company">Upwork</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
