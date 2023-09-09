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
      <div className="max-w-6xl mx-auto px-6 xl:px-0 ">
        <div>
          {/* Heading */}
          <Heading>My Hobbies</Heading>

          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.3 }}
            className="grid gap-10 sm:grid-cols-2 sm:justify-items-center md:grid-cols-3"
          >
            <div className="flex items-center justify-center flex-col gap-2 dark:text-gray-200 hover:text-orange-400 duration-300">
              <BookOpenIcon className="w-16 h-16 md:w-[5rem] md:h-[5rem] " />
              <h3 className="text-lg font-medium md:text-xl">Reading books</h3>
            </div>

            <div className="flex items-center justify-center flex-col gap-2 dark:text-gray-200 hover:text-orange-400 duration-300">
              <TvIcon className="w-16 h-16 md:w-[5rem] md:h-[5rem] " />
              <h3 className="text-lg font-medium md:text-xl">
                Watching documentaries
              </h3>
            </div>

            <div className="flex items-center justify-center flex-col gap-2 dark:text-gray-200 hover:text-orange-400 duration-300">
              <CodeBracketIcon className="w-16 h-16 md:w-[5rem] md:h-[5rem] " />
              <h3 className="text-lg font-medium md:text-xl">Coding</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
