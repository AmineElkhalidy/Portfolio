import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from "./atoms/Link";
import { urlFor } from "@/client";
import { motion } from "framer-motion";

const Project = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0, 0.5, 1] }}
      transition={{
        ease: "easeIn",
        duration: 0.7,
        delay: index * 0.2,
      }}
      viewport={{ once: true }}
      layout
      className="project__container"
    >
      <div className="relative">
        <div className="h-[250px] sm:h-[350px]">
          <img
            className="h-full border-2 border-black-900 object-cover cursor-pointer"
            src={urlFor(project.imgUrl).url() || ""}
            alt={project.title}
          />
        </div>

        <div className="w-full bg-black-900 p-5 sm:p-8 lg:p-12 -mt-2">
          <h2 className="text-white text-xl font-bold lg:text-2xl lg:mb-2 2xl:text-3xl">
            {project.title}
          </h2>
          <p className="text-muted-foreground mb-8">{project.description}</p>
          <div className="w-full flex gap-4 mb-12">
            {project?.techs?.length > 0 &&
              project.techs.map((tech: any, index: any) => (
                <div className="w-[11%] h-[11%]" key={index}>
                  <img
                    className="w-full h-full rounded-full"
                    src={urlFor(tech).url()}
                    alt="Web tech"
                  />
                </div>
              ))}
          </div>
          <div className="flex justify-between mt-6 lg:text-lg">
            <Link
              href={project.projectLink}
              target="_blank"
              className="p-3 sm:px-5 sm:py-3 gradient group inline-flex items-center sm:font-medium text-md gap-1 sm:gap-2 lg:text-lg cursor-pointer text-white font-semibold"
            >
              <span>Live Preview</span>
              <ArrowUpRightIcon className="w-4 h-4 text-white" />
            </Link>
            <Link
              href={project.codeLink}
              target="_blank"
              className="group inline-flex items-center sm:font-medium text-md gap-1 sm:gap-2 lg:text-lg text-white cursor-pointer"
            >
              <span>Github Code</span>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-7 w-7 fill-white"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Project;
