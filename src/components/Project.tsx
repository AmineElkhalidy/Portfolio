import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "./atoms/Link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Project = ({ project }: { project: any }) => {
  return (
    <div className="project__container">
      {/* Container */}
      <div className="relative">
        <Dialog>
          <DialogTrigger>
            <div className="h-[250px] sm:h-[350px]">
              <img
                className="h-full w-full border-2 border-black-900 object-cover dark:border-white lg:w-full cursor-pointer"
                src={project.image}
                alt={project.name}
              />
            </div>
          </DialogTrigger>

          <DialogContent className="max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
            <DialogHeader className="text-center w-full">
              <DialogTitle>{project.name}</DialogTitle>
              <DialogDescription>The project description</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        {/* Project description */}
        <div className="bg-black-900 dark:bg-gray-50 p-5 sm:p-8 lg:p-12 -mt-2">
          <h2 className="text-white dark:text-black-900 text-xl font-bold mb-4 lg:text-2xl lg:mb-6 2xl:text-3xl">
            {project.name}
          </h2>

          {/* Technologies used */}
          <div className="w-full flex gap-4 mb-6">
            {project.technologies.map((tech: any, index: any) => (
              <div className="w-[12%] h-[12%] " key={index}>
                <img
                  className="w-full h-full rounded-full"
                  src={tech}
                  alt={tech}
                />
              </div>
            ))}
          </div>

          {/* Buttons container */}
          <div className="flex justify-between lg:text-lg">
            <Link
              href={project.hrefLink}
              target="_blank"
              className="p-3 sm:px-5 sm:py-3 gradient group inline-flex items-center sm:font-medium text-md gap-1 lg:text-lg cursor-pointer text-white font-semibold"
            >
              <span>View Project</span>

              <ArrowRightIcon className="w-4 h-4 duration-300 group-hover:translate-x-1 text-white " />
            </Link>

            <Link
              href={project.githubLink}
              target="_blank"
              className="group inline-flex items-center sm:font-medium text-md gap-1 lg:text-lg text-white dark:text-black-900 cursor-pointer"
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
