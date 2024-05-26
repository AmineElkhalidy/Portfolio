import { StarIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const testimonials = [
  {
    body: "I've hired Amine multiple times and every time he completed his work in record time. Amine is friendly and easy to communicate with and goes the extra mile. Will rehire and highly recommend",
    author: {
      name: "Jannetje Van Leeuwen",
    },
  },
  {
    body: "Amine is an AMAZING freelancer. He's smart, dedicated, and gets the job done. Such a pleasure to work with. Amine understands the heart of the job, the client needs, and requires minimal instruction. Really a pleasure to work with, hope we get to work together in the future for more projects!",
    author: {
      name: "Brady Cargle",
    },
  },
  {
    body: "Amine is a great developer who helped me greatly in a very short amount of time and done all the work I required, I would definitely hire him again!",
    author: {
      name: "Hi Ba",
    },
  },
  {
    body: "Amine is dedicated to whatever he does. I would recommend him for any sort of front-end tasks.",
    author: {
      name: "Saswat Das",
    },
  },
  {
    body: "Amine is a skilled developer that deliver quality work.",
    author: {
      name: "Sara F",
    },
  },
  {
    body: "Great work by Amine, his enthusiasm is addictive!",
    author: {
      name: "Production SD",
    },
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#111827]" id="testimonials">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: [0, 0.5, 1] }}
              transition={{ ease: "easeIn", duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              layout
              className="text-lg font-semibold leading-8 tracking-tight gradient-text"
            >
              Testimonials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ y: [20, 0], opacity: [0, 0.5, 1] }}
              transition={{ ease: "easeIn", duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              layout
              className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              I have worked with dozens of amazing people
            </motion.h2>
          </div>

          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0, 0.5, 1] }}
                  transition={{
                    ease: "easeIn",
                    duration: 0.7,
                    delay: index * 0.2,
                  }}
                  key={index}
                  viewport={{ once: true }}
                  layout
                  className="pt-8 sm:inline-block sm:w-full sm:px-4"
                >
                  <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6 border-2 border-emerald-600">
                    <div className="flex mb-3">
                      {[1, 2, 3, 4, 5].map((index) => (
                        <StarIcon
                          key={index}
                          className="w-5 h-5 text-emerald-700"
                        />
                      ))}
                    </div>

                    <blockquote className="text-gray-900">
                      <p>{`“${testimonial.body}”`}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonial.author.name}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 0.5, 1] }}
            transition={{
              ease: "easeIn",
              duration: 0.5,
              delay: 0.5,
            }}
            viewport={{ once: true }}
            layout
            className="inline-block text-sm sm:text-base border p-3 rounded-full duration-300 hover:border-emerald-700"
          >
            <a
              href="https://www.upwork.com/freelancers/~01f55a2d4b119d3119"
              target="_blank"
              className="font-medium px-6 py-2 rounded-full gradient-text"
            >
              View more testimonials on{" "}
              <span className="font-bold inline-flex items-center gap-x-2">
                Upwork{" "}
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
