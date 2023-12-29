// Technologies
import Html from "../assets/images/html.webp";
import Css from "../assets/images/css.webp";
import JavaScript from "../assets/images/javascript.webp";
import ReactImg from "../assets/images/react.webp";
import Sass from "../assets/images/sass.webp";
import Node from "../assets/images/node.webp";
import NextLight from "../assets/images/nextjs-light.webp";
import Tailwind from "../assets/images/tailwind.webp";
import Redux from "../assets/images/redux.webp";
import TypeScript from "../assets/images/typescript.webp";
import Git from "../assets/images/git.webp";
import Bootstrap from "../assets/images/bootstrap.webp";
import MongoDB from "../assets/images/mongodb.webp";
import MUI from "../assets/images/mui.webp";
import Wordpress from "../assets/images/wordpress.webp";
import Svelte from "../assets/images/svelte.webp";

// Projects
import Mamiru from "../assets/images/projects/mamiro.webp";
import Tasty from "../assets/images/projects/tasty.webp";
import Omnifood from "../assets/images/projects/omnifood.webp";
import Clipboarding from "../assets/images/projects/clipboarding.webp";
import Shoesit from "../assets/images/projects/shoesit.webp";
import Rotinniajad from "../assets/images/projects/rotinniajad.webp";
import Funiro from "../assets/images/projects/funiro.webp";
import Userhive from "../assets/images/projects/userhive.webp";
import AirTransfer from "../assets/images/projects/airtransfer.webp";
import AirTransferY from "../assets/images/projects/airtransfer-yellow.webp";
import EcoCentar from "../assets/images/projects/Eco-centar.webp";
import Miriam from "../assets/images/projects/miriamsimon.webp";
import Mamiro from "../assets/images/projects/mamiro.webp";
import GradesBar from "../assets/images/projects/dashboard.webp";
import Shoes from "../assets/images/projects/shoes.webp";
import Shoppy from "../assets/images/projects/shoppy.webp";
import FixClinic from "../assets/images/projects/fixclinic.webp";
import BodyReset from "../assets/images/projects/bodyreset.webp";
import Railflow from "../assets/images/projects/railflow.webp";
import Cars from "../assets/images/projects/cars.webp";
import Veezen from "../assets/images/projects/veezen.webp";
import Shippium from "../assets/images/projects/shippium.webp";

// Data
export const work = [
  {
    id: 1,
    image: Mamiro,
    description:
      "Mamiru is an e-commerce website under construction built using react and redux with Typescript.",
    techStack: ["React", "Redux", "TypeScript"],
    sourceCode: "https://github.com/SamoudiAnas/Mamirou",
    link: "https://mamirou.vercel.app/",
  },
  {
    id: 2,
    image: Shoesit,
    description:
      "An e-commerce website where you can choose your favorite shoes from your favorite brand.",
    techStack: ["React", "SASS"],
    sourceCode: "https://github.com/AmineElkhalidy/shoesit",
    link: "https://shoesit.vercel.app/",
  },
  {
    id: 3,
    image: Omnifood,
    description:
      "Omnifood is an AI-powered food suscription that will make you eat healty again, 365 days per days. It's tailored to your personal tastes and nutritional needs.",
    techStack: ["HTML", "CSS", "JavaScript"],
    sourceCode: "https://github.com/AmineElkhalidy/omnifood",
    link: "https://foodformood.vercel.app/",
  },
  {
    id: 4,
    image: Clipboarding,
    description:
      "Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.",
    techStack: ["HTML", "TailwindCSS"],
    sourceCode: "https://github.com/AmineElkhalidy/omnifood",
    link: "https://foodformood.vercel.app/",
  },
  {
    id: 5,
    image: Rotinniajad,
    description:
      "Simple static website which showcase an entreprise products called ROTIN-NIAJAD",
    techStack: ["HTML", "CSS", "JavaScript"],
    sourceCode: "https://github.com/AmineElkhalidy/rotinniajad",
    link: "https://www.rotinniajad.com",
  },
];

export const firstRowOfProjects = [
  {
    name: "Veezen",
    image: Veezen,
    hrefLink: "https://veezen-official.vercel.app/",
    githubLink: "https://github.com/AmineElkhalidy/veezen",
    technologies: [NextLight, Tailwind, Git],
  },
  {
    name: "Shippium",
    image: Shippium,
    hrefLink: "https://shippium-app.vercel.app/login",
    githubLink: "https://github.com/AmineElkhalidy/shippium",
    technologies: [ReactImg, Tailwind, TypeScript, Git],
  },
  {
    name: "Cars",
    image: Cars,
    hrefLink: "https://cars-exhibition.vercel.app/",
    githubLink: "https://github.com/AmineElkhalidy",
    technologies: [NextLight, Tailwind, MongoDB, Git],
  },
  {
    name: "Fix Clinic",
    image: FixClinic,
    hrefLink: "https://thefixclinic.com/",
    githubLink: "https://github.com/AmineElkhalidy",
    technologies: [Html, Css, JavaScript, Bootstrap, Git],
  },
];

export const secondRowOfProjects = [
  {
    name: "Mindset Body Reset",
    image: BodyReset,
    hrefLink: "https://mindsetbodyreset.com/",
    githubLink: "https://github.com/AmineElkhalidy",
    technologies: [Html, Css, JavaScript, Bootstrap, Git],
  },
  {
    name: "Railflow",
    image: Railflow,
    hrefLink: "https://railflow-website-v2.vercel.app/",
    githubLink: "https://github.com/AmineElkhalidy/railflow",
    technologies: [NextLight, Tailwind, Node, Git],
  },
  {
    name: "Shoppy(Under construction)",
    image: Shoppy,
    hrefLink: "https://e-shoppy.vercel.app/",
    githubLink: "https://github.com/AmineElkhalidy/e-commerce",
    technologies: [ReactImg, Redux, Bootstrap, Css, Node],
  },
  {
    name: "Shoesit",
    image: Shoes,
    hrefLink: "https://shoesit.vercel.app/",
    githubLink: "https://github.com/AmineElkhalidy/shoesit",
    technologies: [NextLight, ReactImg, Tailwind, Redux],
  },
  {
    name: "Mamiru",
    image: Mamiru,
    hrefLink: "https://mamirou.vercel.app/",
    githubLink: "https://github.com/SamoudiAnas/Mamirou",
    technologies: [ReactImg, Redux, TypeScript, Git],
  },
  {
    name: "GradesBar",
    image: GradesBar,
    hrefLink: "#",
    githubLink: "https://github.com/AmineElkhalidy/",
    technologies: [MUI, Tailwind, ReactImg, Git],
  },
  {
    name: "Eco-Centar",
    image: EcoCentar,
    hrefLink: "https://eco-centar.vercel.app/",
    githubLink: "https://github.com/AmineElkhalidy/EcoCentar.git",
    technologies: [Html, Tailwind, Git],
  },

  {
    name: "Rotin Niajad",
    image: Rotinniajad,
    hrefLink: "https://rotinniajad.netlify.app",
    githubLink: "https://github.com/AmineElkhalidy/rotinniajad",
    technologies: [NextLight, Tailwind, Git],
  },
  {
    name: "Userhive",
    image: Userhive,
    hrefLink: "https://www.userhive.co/",
    githubLink: "https://github.com/AmineElkhalidy/userhive",
    technologies: [NextLight, Tailwind, Git],
  },
  {
    name: "Funiro",
    image: Funiro,
    hrefLink: "https://funiro-app.vercel.app/",
    githubLink: "https://github.com/AmineElkhalidy/funiro",
    technologies: [NextLight, Tailwind, Git],
  },
  {
    name: "Clipboarding",
    image: Clipboarding,
    hrefLink: "https://clipboarding.vercel.app/",
    githubLink: "https://github.com/AmineElkhalidy/clipboarding",
    technologies: [Html, Tailwind, Git],
  },
  {
    name: "Tasty",
    image: Tasty,
    hrefLink: "https://tasty.vercel.app/",
    githubLink: "https://github.com/AmineElkhalidy/restauranttasty",
    technologies: [Html, Css, JavaScript, Git],
  },
  {
    name: "Omnifood",
    image: Omnifood,
    hrefLink: "https://foodformood.vercel.app/",
    githubLink: "https://github.com/AmineElkhalidy/omnifood",
    technologies: [Html, Css, JavaScript, Git],
  },
];

export const allReviews = [
  {
    id: "r18",
    name: "Jannetje Van Leeuwen",
    description:
      "I've hired Amine multiple times and every time he completed his work in record time. Amine is friendly and easy to communicate with and goes the extra mile. Will rehire and highly recommend",
  },
  {
    id: "r16",
    name: "Jannetje Van Leeuwen",
    description:
      "Amine is super knowledgeable, helpful and proactive. Initiating recommendations for improvements that I hadn't even considered. Excelelnt communication. Will 100% rehire",
  },
  {
    id: "r13",
    name: "Brady Cargle",
    description:
      "Amine is an AMAZING freelancer. He's smart, dedicated, and gets the job done. Such a pleasure to work with. Amine understands the heart of the job, the client needs, and requires minimal instruction. Really a pleasure to work with, hope we get to work together in the future for more projects!",
  },
  {
    id: "r14",
    name: "James Chris",
    description: "Great developer",
  },
  {
    id: "r11",
    name: "Jannetje Van Leeuwen",
    description:
      "Great and speedy communication from Amine. Very helpful and delivered great work in half the time requested. Will definitely use again and recommned.",
  },
  {
    id: "r12",
    name: "Marco Netto",
    description:
      "I would very much recommend this freelancer, quick work, good communication",
  },
  {
    id: "r15",
    name: "Marco Netto",
    description: "Another excellent experience working with Amine!",
  },
  {
    id: "r1",
    name: "Mossaab Talbi",
    description:
      "Amine is one of the best and skilled developers I have known, he did an amazing job with my project, I will definitely work with him again",
  },
  {
    id: "r2",
    name: "Hi Ba",
    description:
      "Amine is a great developer who helped me greatly in a very short amount of time and done all the work I required.",
  },
  {
    id: "r3",
    name: "Sacreed Groves",
    description: "Amine did an amazing job with my react project",
  },
  {
    id: "r4",
    name: "Aaron Sangerson",
    description:
      "Amine made significant changes to an existing react project, integrating additional functionality. I can highly recommend him as a frontend dev",
  },
  {
    id: "r5",
    name: "Saswat Das",
    description:
      "Amine is dedicated to whatever he does. I would recommend him for any sort of front-end tasks.",
  },
  {
    id: "r6",
    name: "Sara F",
    description: "Excellent job as always",
  },
  {
    id: "r7",
    name: "Rachid Chatoui",
    description:
      "Amine helped me a lot with defining the content and layout of my product landing page, definitely recommended!",
  },
  {
    id: "r8",
    name: "Et-thamry Ashraf",
    description:
      "A best friend and best developer, helped me to build my own website and launch it to the internet",
  },
  {
    id: "r9",
    name: "Anas Samoudi",
    description: "Great developer, with sharpen eye on quality check.",
  },
  {
    id: "r10",
    name: "Tom Elliot",
    description:
      "Amine was very quick to deliver exactly what I was asking for, I'd recommend him.",
  },
  {
    id: "r17",
    name: "Production SD",
    description: "Great work by Amine, his enthusiasm is addictive!",
  },
];

export const rowreviews1 = [
  {
    id: "r17",
    name: "Production SD",
    description: "Great work by Amine, his enthusiasm is addictive!",
  },
  {
    id: "r16",
    name: "Jannetje Van Leeuwen",
    description:
      "Amine is super knowledgeable, helpful and proactive. Initiating recommendations for improvements that I hadn't even considered. Excelelnt communication. Will 100% rehire",
  },
  {
    id: "r13",
    name: "Brady Cargle",
    description:
      "Amine is an AMAZING freelancer. He's smart, dedicated, and gets the job done. Such a pleasure to work with. Amine understands the heart of the job, the client needs, and requires minimal instruction. Really a pleasure to work with, hope we get to work together in the future for more projects!",
  },
  {
    id: "r11",
    name: "Jannetje Van Leeuwen",
    description:
      "Great and speedy communication from Amine. Very helpful and delivered great work in half the time requested. Will definitely use again and recommned.",
  },
  {
    id: "r14",
    name: "James Chris",
    description: "Great developer",
  },
  {
    id: "r1",
    name: "Mossaab Talbi",
    description:
      "Amine is one of the best and skilled developers I have known, he did an amazing job with my project, I will definitely work with him again",
  },
  {
    id: "r2",
    name: "Hi Ba",
    description:
      "Amine is a great developer who helped me greatly in a very short amount of time and done all the work I required, I would definitely work with him again!",
  },
  {
    id: "r3",
    name: "Sacreed Groves",
    description: "Amine did an amazing job with my react project",
  },
  {
    id: "r4",
    name: "Aaron Sangerson",
    description:
      "Amine made significant changes to an existing react project, integrating additional functionality. I can highly recommend him as a frontend dev",
  },
  {
    id: "r5",
    name: "Saswat Das",
    description:
      "Amine is dedicated to whatever he does. I would recommend him for any sort of front-end tasks.",
  },
];

export const rowreviews2 = [
  {
    id: "r18",
    name: "Jannetje Van Leeuwen",
    description:
      "I've hired Amine multiple times and every time he completed his work in record time. Amine is friendly and easy to communicate with and goes the extra mile. Will rehire and highly recommend",
  },
  {
    id: "r15",
    name: "Marco Netto",
    description: "Another excellent experience working with Amine!",
  },
  {
    id: "r6",
    name: "Sara F",
    description: "Amine is a skilled developer that deliver quality work.",
  },
  {
    id: "r7",
    name: "Rachid Chatoui",
    description:
      "Amine helped me a lot with defining the content and layout of my product landing page, definitely recommended!",
  },
  {
    id: "r8",
    name: "Et-thamry Ashraf",
    description:
      "A best friend and best developer, helped me to build my own website and launch it to the internet",
  },
  {
    id: "r9",
    name: "Anas Samoudi",
    description: "Great developer, with sharpen eye on quality check.",
  },
  {
    id: "r10",
    name: "Tom Elliot",
    description:
      "Amine was very quick to deliver exactly what I was asking for, I'd recommend him.",
  },
  {
    id: "r12",
    name: "Marco Netto",
    description:
      "I would very much recommend this freelancer, quick work, good communication",
  },
];

export const skills = [
  {
    image: Html,
    name: "HTML5",
  },
  {
    image: Css,
    name: "CSS3",
  },
  {
    image: JavaScript,
    name: "JavaScript",
  },
  {
    image: TypeScript,
    name: "TypeScript",
  },
  {
    image: ReactImg,
    name: "React",
  },
  {
    image: NextLight,
    name: "Next",
  },
  {
    image: Svelte,
    name: "Svelte",
  },
  {
    image: Redux,
    name: "Redux",
  },
  {
    image: Node,
    name: "Node",
  },
  {
    image: Tailwind,
    name: "TailwindCss",
  },
  {
    image: Sass,
    name: "Sass",
  },
  {
    image: Git,
    name: "Git",
  },
];

export const techs = {
  Html,
  Css,
  JavaScript,
  ReactImg,
  NextLight,
  Node,
  Bootstrap,
  Sass,
  Tailwind,
  MUI,
  MongoDB,
  TypeScript,
  Redux,
  TypeScript,
  Git,
  MUI,
  Wordpress,
  Svelte,
};

export const projects = {
  Mamiru,
  Tasty,
  Omnifood,
  Clipboarding,
  Shoesit,
  Rotinniajad,
  Funiro,
  Userhive,
  AirTransfer,
  AirTransferY,
  EcoCentar,
  Miriam,
  GradesBar,
  Shoes,
  Shoppy,
  FixClinic,
  BodyReset,
  Railflow,
  Cars,
  Veezen,
  Shippium,
};

// {
//   name: "Miriam Simon Retail",
//   image: Miriam,
//   hrefLink: "https://miriamsimon.ie/",
//   githubLink: "https://github.com/AmineElkhalidy",
//   technologies: [Wordpress],
// },
// {
//   name: "IPTV Premium",
//   image: IPTVPREMIUM,
//   hrefLink: "https://iptvsmarterspremium.net/",
//   githubLink: "https://github.com/AmineElkhalidy",
//   technologies: [Wordpress],
// },
// {
//   name: "IPTV Pole",
//   image: Iptv,
//   hrefLink: "https://iptvpole.com/",
//   githubLink: "https://github.com/AmineElkhalidy",
//   technologies: [Wordpress],
// },
// {
//   name: "Digital Pole",
//   image: DigitalPole,
//   hrefLink: "https://digitalpole.shop",
//   githubLink: "https://github.com/AmineElkhalidy/",
//   technologies: [Wordpress],
// },
// {
//   name: "Noormedia",
//   image: Noormedia,
//   hrefLink: "https://noormedia-agency.vercel.app/",
//   githubLink: "https://github.com/AmineElkhalidy/noormedia",
//   technologies: [Html, Css, Js],
// },
