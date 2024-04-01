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
    body: "Amine is a great developer who helped me greatly in a very short amount of time and done all the work I required, I would definitely work with him again!",
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
    <section className="bg-[#111827] my-24 sm:my-32" id="testimonials">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight gradient-text">
              Testimonials
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              I have worked with dozens of amazing people
            </p>
          </div>

          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="pt-8 sm:inline-block sm:w-full sm:px-4"
                >
                  <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6 border-2 border-emerald-600">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
