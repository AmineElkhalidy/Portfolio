import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "./atoms/Link";
import { urlFor } from "@/client";

const Project = ({ project }: { project: any }) => {
  return (
    <div className="project__container">
      <div className="relative">
        <div className="h-[250px] sm:h-[350px]">
          <img
            className="h-full border-2 border-black-900 object-cover cursor-pointer"
            src={urlFor(project.imgUrl).url() || ""}
            alt={project.title}
          />
        </div>

        <div className="w-full bg-[#111827] p-5 sm:p-8 lg:p-12 -mt-2">
          <h2 className="text-white text-xl font-bold mb-4 lg:text-2xl lg:mb-6 2xl:text-3xl">
            {project.title}
          </h2>

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
              className="p-3 sm:px-5 sm:py-3 gradient group inline-flex items-center sm:font-medium text-md gap-1 lg:text-lg cursor-pointer text-white font-semibold"
            >
              <span>View Project</span>

              <ArrowRightIcon className="w-4 h-4 duration-300 group-hover:translate-x-1 text-white " />
            </Link>

            <Link
              href={project.codeLink}
              target="_blank"
              className="group inline-flex items-center sm:font-medium text-md gap-1 lg:text-lg text-white cursor-pointer"
            >
              <span>Github Repo</span>
              <ArrowRightIcon className="w-4 h-4 duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
