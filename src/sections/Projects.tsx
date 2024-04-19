//@ts-nocheck
import { useState, useEffect } from "react";
import ParentContainer from "../components/Container";
import { client, urlFor } from "@/client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Project from "@/components/Project";

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
              <Project work={work} key={index} />
            ))}
          </Carousel>
        </div>
      </ParentContainer>
    </section>
  );
};

export default Projects;
