import React from 'react'

// motion
import { motion } from "framer-motion";

// Icons
import { BookOpenIcon, TvIcon, CodeBracketIcon } from "@heroicons/react/24/solid";


const Hobbies = () => {


  return (
    <section>
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.3 }}
          className="pt-12 pb-16 xl:pt-16"
        >
          {/* Heading */}
          <h2 className="text-black-900 dark:text-white text-2xl text-center font-nav font-bold mb-12 lg:mb-16 sm:text-3xl md:text-4xl lg:text-5xl">
            My hobbies
          </h2>

          <div className="grid gap-10 sm:grid-cols-2 sm:justify-items-center md:grid-cols-3">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hobbies