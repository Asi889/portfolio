export type Project = {
  title: string;
  body: string;
  stacks: string[];
  sourceCode?: string;
  liveWebsite?: string;
  imgSrc: string;
};
export default function projectData() {
  const projects: Project[] = [
    {
      title: `Final Bootcamp Project`,
      body: `GIG-Me, is a full C2C App, task manager app. Imagine Fiverr meets task manager, but designed for consumers and professionals.  Developed with React JS for the frontend and powered by a robust NODE JS server, GIG-Me leverages the efficiency of MongoDB as its database. This winning tech stack ensures seamless communication between users and delivers a dynamic platform for managing tasks, transforming the way consumers and professionals collaborate.`,
      stacks: ["Node.js", "MongoDB", "React", "MobX"],
      sourceCode: "https://github.com/Asi889/gigMeApp",
      liveWebsite: "",
      imgSrc:
        "https://res.cloudinary.com/dvdzjj8jo/image/upload/v1639134532/gigme_n1q1ml.png",
    },
    {
      title: `Tsofen landing page`,
      body: `Tsophen is a landing page  I built Tsofen, an impactful landing page using PHP within the WordPress framework. This project served a noble initiative, connecting Israel's Arab community with meaningful tech job opportunities. The combination of PHP, WordPress, and CSS enabled a dynamic user experience while ensuring an intuitive and visually appealing interface.`,
      stacks: ["PHP", "Wordpress", "CSS"],
      liveWebsite: "",
      imgSrc:
        "https://res.cloudinary.com/dvdzjj8jo/image/upload/v1639134536/tsofen_agfaab.png",
    },
    {
      title: `Angular Weather App`,
      body: `The Angular Weather App marks the inception of my journey into the world of Angular, representing my first foray into this exciting technology as I pursued self-learning. This mini-project showcases my passion for exploring new frontiers in web development. With a keen focus on Angular, I skillfully combined JavaScript, Tailwind CSS, and other essential tools to build this immersive weather application. By harnessing the power of Angular, I created a seamless and dynamic user interface that provides real-time weather updates and an intuitive user experience.`,
      stacks: ["Angular", "JavaScript", "Tailwind", "CSS"],
      sourceCode: "https://github.com/Asi889/angular-weather-app",
      liveWebsite: "https://asi-angular-weather-app.vercel.app/",
      imgSrc:
        "https://res.cloudinary.com/dvdzjj8jo/image/upload/v1659710127/weatherappimage_i58lvq.png",
    },

    {
      title: `Maya landing page`,
      body: `Maya Landing Page: Crafted as a captivating landing page for the esteemed company Adam Milo, the Maya project showcases my expertise in PHP within the WordPress framework. With a focus on delivering a compelling user experience, the landing page serves as a gateway to Adam Milo's world, providing essential information and enticing visitors to explore their offerings further.`,
      stacks: ["PHP", "WordPress", "CSS"],
      sourceCode: "https://github.com/Asi889/maya-landingPage",
      liveWebsite: "https://landing.am-maya.com/",
      imgSrc:
        "https://res.cloudinary.com/dvdzjj8jo/image/upload/v1639134533/mayalp_vjmw4c.png",
    },
    {
      title: `Chat Room`,
      body: `The Vanilla JS Chat Room emerged from a challenging interview task that pushed me to showcase my prowess in pure JavaScript. With an unwavering determination to excel, I embraced the opportunity to enhance my skills in Vanilla JS, ultimately delivering a remarkable chat room application. Using Node.js, Socket.IO, and Express, I adeptly crafted a robust server that enables seamless real-time communication among users within the chat room. On the front side i used a very simple UI with Tailwind CSS ensuring an elegant and user-friendly interface that promotes effortless navigation and engagement. `,
      stacks: ["Node.js", "Javascript", "Socket.IO", "Tailwind", "CSS"],
      sourceCode: "",
      liveWebsite:
        "http://nodechat-env-1.eba-kxrknrwn.us-east-2.elasticbeanstalk.com/chat.html?username=Ness&room=General",
      imgSrc:
        "https://res.cloudinary.com/dvdzjj8jo/image/upload/v1659299284/chatapp_xuhory.png",
    },
    {
      title: `Carnival Cruse`,
      body: `An end-to-end app developed using the React framework, Carnival Cruise exemplifies my expertise in JavaScript, React, Redux, and CSS. While I collaborated with a team on this project, my substantial contributions primarily involved debugging, refining, and implementing exciting new features to enhance the app's functionality and user experience.`,
      stacks: ["JavaScript", "React", "Redux", "CSS"],
      sourceCode: "https://github.com/Asi889/frontcarnivalwhitelabel",
      liveWebsite: "https://betabundles.com/",
      imgSrc:
        "https://res.cloudinary.com/dvdzjj8jo/image/upload/v1639134535/carnival_nwjjst.png",
    },
    {
      title: `Unicorn Design`,
      body: `Unicorn Design stands out as an exceptional website I crafted for a valued web designer client. Leveraging the powerful combination of WordPress, PHP, JS, and Tailwind, I designed a remarkable online platform that perfectly encapsulates the client's creative vision. for this project i created a theme from scratch using carbon fileds which is a WordPress custom fileds library optimized for developers. A key aspect of my development approach is ensuring that all my projects are fully responsive, effortlessly adapting to diverse screens and devices. `,
      stacks: ["PHP", "WordPress", "Javascript", "Tailwind", "CSS", "HTML"],
      sourceCode: "",
      liveWebsite: "https://uniqorn-design.adamshriki.co.il/",
      imgSrc:
        "https://res.cloudinary.com/dvdzjj8jo/image/upload/v1656425485/Screenshot_2022-06-28_171100_ev5rfw.png",
    },
    {
      title: `Mass Points Explorer (Big Data Visualization)`,
      body: `Mass Points Explorer is a performance-focused geographic dashboard capable of rendering and filtering 250,000 data points at 60 FPS. The core challenge was implementing a "live scrubbing" filter system that remains perfectly fluid without freezing the browser UI. To achieve this, I bypassed traditional CPU-heavy array operations and moved the filtering logic directly to the GPU via custom WebGL shaders.`,
      stacks: ["Vue 3", "TypeScript", "deck.gl (WebGL)", "Mapbox GL", "Tailwind CSS", "Vitest"],
      sourceCode: "https://github.com/Asi889/home-assignment-cyber",
      liveWebsite: "https://home-assignment-cyber.vercel.app/",
      imgSrc:
        "https://res.cloudinary.com/dvdzjj8jo/image/upload/v1769297003/Screenshot_2026-01-25_012154_yfmqno.png",
    },
    {
      title: `Wordle in Hebrew`,
      body: `Wordle is a viral game I built during the hype of its popularity. It's my first project in Vue.js. I decided to build the app to work on my skills, learn new technologies - and I really enjoyed the development process.`,
      stacks: ["JavaScript", "Vue.js", "tailwind", "CSS"],
      sourceCode: "https://github.com/Asi889/wordel-game",
      liveWebsite: "https://wordel-game.vercel.app/",
      imgSrc:
        "https://res.cloudinary.com/dvdzjj8jo/image/upload/v1644915796/ggg_apxx6c.png",
    },
    {
      title: `What's 4 Dinner`,
      body: `Don't know what to order? Whats4Dinner is a smart random restaurant selector designed to rescue you from indecision when choosing where to order your meal. Developed with an exceptional tech stack, this web application integrates the restaurant lists from Wolt and 10Bis. Through the power of these cutting-edge technologies, the app presents you with a delightful, spontaneous dining choice, making the decision-making process a breeze.`,
      stacks: [
        "Typscript",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind",
        "CSS",
      ],
      sourceCode: "https://github.com/Asi889/restaurant-picker",
      liveWebsite: "https://www.whats4dinner.co.il/",
      imgSrc:
        "https://res.cloudinary.com/dvdzjj8jo/image/upload/v1656425068/Screenshot_2022-06-28_170410_qpikgu.png",
    },
   
    {
      title: `Vered Tours`,
      body: `Tailor made Full WordPress Theme - from UX, UI all the way to full-stack developmnet`,
      stacks: ["PHP", "WordPress", "Javascript", "Tailwind", "CSS", "HTML"],
      sourceCode: "",
      liveWebsite: "https://veredtours.com/",
      imgSrc:
        "https://res.cloudinary.com/dvdzjj8jo/image/upload/v1769068702/veredtours_yakest.png",
    },
    {
      title: `Garage Web (io)`,
      body: `Garage Web (io) stands out as an exceptional website I crafted for a the company i work at. Leveraging the powerful combination of Next.js, Typesscript, and Tailwind, A key aspect of my development approach is ensuring that all my projects are fully responsive, effortlessly adapting to diverse screens and devices. `,
      stacks: ["Next.js", "typscript", "Tailwind", "CSS", "HTML"],
      sourceCode: "https://github.com/nemo369/garageweb",
      liveWebsite: "https://garageweb.io/",
      imgSrc:
        "https://res.cloudinary.com/dvdzjj8jo/image/upload/v1710757413/garageio/WhatsApp_Image_2024-03-12_at_13.36.26_hbnbvn.jpg",
    },
    {
      title: `Knotted.`,
      body: `Knotted  is ecommerce store. its bult with PHP wordpress on the backend as a headles CMS. The frontend is built with Next.js and tailwind css. The project is a full stack project and i was the only developer on the project. `,
      stacks: ["PHP", "Wordpress", "Next.js", "typscript", "Tailwind", "CSS", "HTML","woocommerce", "Zustand"],
      sourceCode: "https://github.com/Asi889/gabi-store",
      liveWebsite: "https://gabi-store-eigm.vercel.app",
      imgSrc:
        "https://res.cloudinary.com/dvdzjj8jo/image/upload/v1767476424/newportfolio/Screenshot_2026-01-03_233708_xq6gvv.png"
    },
    {
      title: `Adam Milo `,
      body: `A large-scale, year-long project. Project Maya is a full end-to-end systeProject Maya stands as a comprehensive end-to-end system, skillfully crafted with React Next.js for the front end and backed by the robust PHP framework. This ambitious undertaking involved working and collaboration in a team of two other talented programmers and various stakeholders. Leveraging an impressive tech stack comprising PHP, JavaScript, React Next.js, state management, CSS, and Tailwind, Project Maya delivers an unparalleled user experience, marking a significant milestone in web development and fostering efficient teamwork.`,
      stacks: [
        "PHP",
        "JavaScript",
        "React Next.js",
        "State-Managment",
        "CSS",
        "Tailwind",
      ],
      sourceCode: "https://github.com/Asi889/maya-front",
      liveWebsite: "https://am-maya.com/",
      imgSrc:
        "https://res.cloudinary.com/dvdzjj8jo/image/upload/v1639134534/mayaproject_mubvzz.png",
    },
    {
      title: `Pass Pass`,
      body: `PassPass is a sports betting and tournament platform where users create groups, make predictions, track scores, and view dynamic leaderboards. It features real-time updates, automated scoring, and a smooth, user-friendly experience.

A key highlight is the integrated AI-powered WhatsApp chatbot, which provides instant answers about matches, bets, rankings, and app support by accessing live platform data.

This project demonstrates strong full-stack architecture, AI integration, and automation across web and messaging interfaces.`,
      stacks: [
        "Nest.js",
        "PostgreSQL",
        "TypeScript",
        "Next.js",
        "Tailwind",
        "CSS",
        "OpenAI",
        "WhatsApp API",
      ],
      sourceCode: "https://github.com/nemo369/passpass",
      liveWebsite: "https://www.passpass.win/",
      imgSrc:
        "https://res.cloudinary.com/dvdzjj8jo/image/upload/v1765792513/newportfolio/c1f71fe6-63fe-4413-9ccd-1e583c40c584.png",
    },
  ];

  return projects.reverse();
}
