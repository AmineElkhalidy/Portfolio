import React from "react";

// motion
import { motion } from "framer-motion";

// Icons
import {
  BookOpenIcon,
  TvIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid";
import Heading from "../components/atoms/Heading";

const Hobbies = () => {
  return (
    <section className="pt-24 pb-16">
      <div className="p-container">
        <div>
          {/* Heading */}
          <Heading>My Hobbies</Heading>

          <div className="hobbies__container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.3 }}
              className="hobby__container"
            >
              <BookOpenIcon className="hobby__icon" />
              <h3 className="hobby__title font-medium">Reading books</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: [0, 0, 1] }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center flex-col gap-2 dark:text-gray-200 hover:text-orange-400 duration-300"
            >
              <TvIcon className="hobby__icon" />
              <h3 className="hobby__title font-medium">
                Watching documentaries
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: [0, 0, 0, 1] }}
              transition={{ duration: 0.9 }}
              className="flex items-center justify-center flex-col gap-2 dark:text-gray-200 hover:text-orange-400 duration-300"
            >
              <CodeBracketIcon className="hobby__icon" />
              <h3 className="hobby__title font-medium">Coding</h3>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
