//@ts-nocheck
import { useState, useEffect } from "react";
import ParentContainer from "../components/Container";
import { client, urlFor } from "@/client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Project from "@/components/Project";
import { motion } from "framer-motion";

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
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 0.5, 1] }}
            transition={{ ease: "easeIn", duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            layout
            className="text-lg font-semibold leading-8 tracking-tight gradient-text"
          >
            Projects
          </motion.span>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ y: [20, 0], opacity: [0, 0.5, 1] }}
            transition={{ ease: "easeIn", duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            layout
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
          >
            Selected Work
          </motion.h2>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-10">
          {works.map((work, index) => (
            <Project project={work} key={index} />
          ))}
        </div>
      </ParentContainer>
    </section>
  );
};

export default Projects;
