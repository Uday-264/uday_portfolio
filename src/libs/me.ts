import {
    FaDocker,
    FaGit,
    FaNode,
    FaReact,
  } from "react-icons/fa";
  import {
    SiJavascript,
    SiMongodb,
    SiPostgresql,
    SiPython,
    SiTypescript,
    SiExpress,
    SiShadcnui,
    SiDrizzle,
    SiPrisma,
    SiMongoose,
    SiRedux
  } from "react-icons/si";
  import { RiNextjsFill,RiTailwindCssFill,RiJavaFill } from "react-icons/ri";
  import { TbBrandSocketIo } from "react-icons/tb";
  export const me={
    socialLinks : {
      github: 'https://github.com/uday-264/',
      linkedin: 'https://www.linkedin.com/in/udaykumarBethi/',
      resume: '/Resume.pdf',
    },
    education : [
      {
        degree: 'Bachelor of Technology in Computer Science',
        institution: 'Example University',
        date: '2018-2022',
        location: 'City, Country',
      }],
       projects : [
          {
            title: "Schedular",
            description:
              "Developed a full-stack scheduling application with secure user authentication and efficient database management. The app allows users to view individual timelines and manage appointments through personalized profiles.",
            technologies: [
              "Next.js",
              "Postgresql",
              "Prisma",
              "Socket io",
              "Docker",
              "Clerk Auth",
            ],
            github: "https://github.com/Uday-264/schedular",
          },
          {
            title: "Discord Clone",
            description:
              "Developed a Discord clone featuring real-time chat, voice channels, and screen sharing. Users can create servers and join channels, facilitating seamless communication in a modern, user-friendly interface. Ideal for community building and collaboration.",
            technologies: [
              "Nextjs",
              "Postgresql",
              "zustand",
              "primsa",
              "Clerk Auth",
              "SocketIo",
              "TailwindCSS",
              "Shadcn",
            ],
            github: "https://github.com/Uday-264/discord-clone",
          },
          {
            title: "SwiftVid",
            description:
              "Created a landing page that showcases key features, pricing, customer reviews, and FAQs. The design is straightforward and user-friendly, making it easy for visitors to understand the value of the service.",
            technologies: ["Nextjs", "TypeScript", "TailwindCSS"],
            github: "https://github.com/Uday-264/SwiftVid",
          },
        ],
        skills: [
          {
            name: "TypeScript",
            icon: SiTypescript,
          },
          {
            name: "JavaScript",
            icon: SiJavascript,
          },
          {
            name:"Nextjs",
            icon:RiNextjsFill,
          },
      
          {
            name: "React",
            icon: FaReact,
          },
          {
            name: "Node.js",
            icon: FaNode,
          },
          {
            name:"Exressjs",
            icon:SiExpress,
           },
           {
            name:"Socket.io",
            icon:TbBrandSocketIo,
           },
           {
            name:"Redux Toolkit",
            icon:SiRedux,
           },
          {
            name: "Python",
            icon: SiPython,
          },
          {
            name:"Java",
            icon:RiJavaFill
          },
          {
            name:"Prisma",
            icon:SiPrisma,
          },
          {
            name:"Drizzle",
            icon:SiDrizzle,
          },
          {
            name:"Mongoose",
            icon:SiMongoose,
          },
          {
            name: "Docker",
            icon: FaDocker,
          },
          {
            name: "MongoDB",
            icon: SiMongodb,
          },
          {
            name: "PostgreSQL",
            icon: SiPostgresql,
          },
          {
            name:"TailwindCSS",
            icon:RiTailwindCssFill
          },
          
          {
            name:"Shadcn",
            icon: SiShadcnui,
          },
          {
            name: "Git",
            icon: FaGit,
          },
        ],
  }