import { urlFor } from "@/client";
import { motion } from "framer-motion";

const Project = ({ work, key }: { work: any; key: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0, 0.5, 1] }}
      transition={{
        ease: "easeIn",
        duration: 0.7,
        delay: key * 0.2,
      }}
      className="bg-white cursor-pointer"
    >
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl">
        <div className="relative border-2 border-[#111827] overflow-hidden rounded-lg lg:h-[450px]">
          <div className="absolute inset-0">
            <img
              src={urlFor(work?.imgUrl).url()}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div aria-hidden="true" className="relative h-96 w-full lg:hidden" />
          <div aria-hidden="true" className="relative h-32 w-full lg:hidden" />
          <div className="absolute inset-x-0 bottom-0 bg-[#111827] bg-opacity-80 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start">
            <div>
              <h2 className="text-xl font-bold text-white">{work?.title}</h2>
              <p className="mt-1 text-sm text-gray-300">{work?.description}</p>
            </div>
            <a
              href={work?.projectLink}
              target="_blank"
              className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
            >
              View project
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
