import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";


export const INTRO_CONTENT = `Computer Science Engineering graduate with a specialization in Artificial Intelligence and Data Science, complemented by comprehensive training in Full Stack Development. Possesses a robust understanding of machine learning, data science, and software development principles. Demonstrates a strong ability to apply theoretical knowledge to practical scenarios through various projects and internships. Eager to leverage technical skills and enthusiasm for technology in a dynamic and growth-oriented environment.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Paytm Wallet",
    image: project1,
    description:
      "A fully functional  website with features like showing Account Balance, Transaction History ,debit and Credit money .",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: " Adaptive Ensemble Contrastive Learning for Vessel Type Recognition",
    image: project3,
    description:
    "Developed a G.A.N architecture to generate synthetic images to overcome the data scarcity problem.	Used transfer learning, contrastive learning to fine tune two inception v3 CNN models and then used Ensemble learning to more accurately predict vessel types",
    technologies: ["G.A.N", "CNN", "Inception V3", "Ensemble Learning"],
  },
  
];

export const CONTACT = {
  address: "1/30,Sai Nagar ,Mudigubba,515511 ",
  phoneNo: "8121199497 ",
  email: "125156123@sastra.ac.in",
};
