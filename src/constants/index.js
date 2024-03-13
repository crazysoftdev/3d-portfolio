import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  code1,
  movie,
  shop,
  youtube,
  python,
} from "../assets";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Fullstack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "SHOPPING APP",
    icon: code1,
    iconBg: "#383E56",
    date: "2022",
    points: [
      "Developed and maintained an e-commerce website using Gatsby, React Helmet, CSS Modules, and Prettier.",
      "Implemented user authentication, product listings, and transaction capabilities for the website using Simple JWT to ensure secure access.",
      "Deployed the site on Netlify, using the Netlify CLI to initialize the project and set up continuous deployment",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "CAMPSIGHT APP",
    icon: code1,
    iconBg: "#E6DEDD",
    date: "2022",
    points: [
      "Successfully led a team of engineers in the development and deployment of a high-performance API web application within a tight six-week timeframe.",
      "Designed and implemented a scalable backend service utilizing MongoDB and FastAPI, following a test-driven development approach, ensuring a stable and well-tested codebase.",
      "Implemented secure user authentication by integrating Simple JWT, ensuring secure access to sensitive user information and a seamless user experience.",
    ],
  },
  {
    title: "Fulstack Developer",
    company_name: "YOUTUBE CLONE",
    icon: code1,
    iconBg: "#383E56",
    date: "2023",
    points: [
      "Developed a responsive React JS application consisting of stunning video sections, custom categories, channel pages, and, most importantly, you can play videos straight from this app.",
      "Used RAPID API to access various endpoints to retrieve data such as suggested videos, search video details, channel details, and channel videos.",
      "Ensured cross-browser and cross-platform compatibility.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "MOVIE APP",
    icon: code1,
    iconBg: "#E6DEDD",
    date: "2023",
    points: [
      "Developed and maintained an application using React.js, Material UI, Alan AI and other related technologies.",
      "Enhanced user experience by implementing secure user authentication, providing a sleek dark mode option, and allowing users to sort movies by categories or genres. Users can now access movie and actor details and easily add movies to their favorites or watchlist, in addition to other convenient functionalities.",
      "Integrated voice assistant to application.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I can't say enough good things about Jeff. He's a true team player who always puts the needs of the project first. If you're looking for a software engineer who can deliver results, Jeff is your guy.",
    name: "Sara Lee",
    designation: "",
    company: "Hack Reactor",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Jeff is an incredible problem solver. Whenever we ran into a roadblock on our project, he was always able to come up with creative solutions that kept us moving forward.",
    name: "Chris Brown",
    designation: "",
    company: "Hack Reactor",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I've worked with a lot of engineers over the years, and Jeff is one of the best. His technical skills are top-notch, but what really sets him apart is his ability to communicate complex ideas in a way that everyone on the team can understand.",
    name: "Lisa Wang",
    designation: "",
    company: "Hack Reactor",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Movie App",
    description:
      "This app is an online database of information related to movies. Users can search for movies and learn about movies, as well as the cast of the movie. Navigating through the application is made simple with help of a AI voice chatbot. Also provides ratings of movies. Tech stack: JavaScript tools including React.js, Redux, Material UI, Alan AI, and more.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/jeffjiang13/movie-app",
  },
  {
    name: "Ecommerce App",
    description:
      "Fully responsive, full-stack e-commerce application with payments. It includes advanced React and Next.js best practices, and integrates Stripe for payment processing. The content of the app can be managed using Sanity, which allows for dynamic modifications of the store's home page and product details. The app is mobile-responsive and includes features such as adding and editing products, advanced card functionalities, and a complete checkout process.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe",
        color: "green-text-gradient",
      },
      {
        name: "Sanity",
        color: "pink-text-gradient",
      },
    ],
    image: shop,
    source_code_link: "https://github.com/jeffjiang13/ecommerce_sanity",
  },
  {
    name: "YouTube Clone",
    description:
      "A responsive React JS application consisting of stunning video sections, custom categories, channel pages, and, most importantly, you can play videos straight from this app!",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "RAPIDAPI",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/jeffjiang13/youtube-clone",
  },


];

export { services, technologies, experiences, testimonials, projects };
