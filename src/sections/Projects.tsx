import { useState, useEffect } from "react";
import ParentContainer from "../components/Container";
import { client, urlFor } from "@/client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

const Projects = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'works' && !(_id in path('drafts.**'))]";
    client.fetch(query).then((data) => setWorks(data));
  }, []);

  return (
    <section className="h-full py-24 sm:py-32" id="work">
      <ParentContainer>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight gradient-text">
            Projects
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Selected Work
          </p>
        </div>

        <div className="relative text-white text-[20px] w-full">
          <Carousel
            interval={2000}
            infiniteLoop={true}
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
            renderArrowPrev={(clickHandler, hasPrev) => (
              <div
                onClick={clickHandler}
                className="absolute right-[51px] md:right-[70px] bottom-6 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-[#111827] z-10 flex items-center justify-center cursor-pointer rounded-full hover:opacity-80"
              >
                <ArrowLeftIcon className="w-6 h-6" />
              </div>
            )}
            renderArrowNext={(clickHandler, hasNext) => (
              <div
                onClick={clickHandler}
                className="absolute right-4 bottom-6 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-[#111827] z-10 flex items-center justify-center cursor-pointer rounded-full hover:opacity-80"
              >
                <ArrowRightIcon className="w-6 h-6" />
              </div>
            )}
          >
            {works.map((work, index) => (
              <div key={index} className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl">
                  <div className="relative border-2 border-[#111827] overflow-hidden rounded-lg lg:h-[450px]">
                    <div className="absolute inset-0">
                      <img
                        src={urlFor(work?.imgUrl).url()}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div
                      aria-hidden="true"
                      className="relative h-96 w-full lg:hidden"
                    />
                    <div
                      aria-hidden="true"
                      className="relative h-32 w-full lg:hidden"
                    />
                    <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-[#111827] bg-opacity-80 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
                      <div>
                        <h2 className="text-xl font-bold text-white">
                          {work?.title}
                        </h2>
                        <p className="mt-1 text-sm text-gray-300">
                          {work?.description}
                        </p>
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
              </div>
            ))}
          </Carousel>
        </div>
      </ParentContainer>
    </section>
  );
};

export default Projects;
