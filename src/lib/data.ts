export const personalInfo = {
  name: "Filip Karika",
  title: "Full Stack Developer",
  email: "filip.karika1@gmail.com",
  phone: "+420 725 250 010",
  location: "Prague, Czech Republic",
  bio: "I'm a 21-year-old passionate web developer with expertise in full-stack development. I love building responsive and user-friendly web applications using modern technologies. Currently looking for new opportunities to grow and contribute to innovative projects.",
  socialLinks: {
    github: "https://github.com/sknefi",
    linkedin: "https://www.linkedin.com/in/filip-karika-13b5072b0/",
    instagram: "https://www.instagram.com/f_karika_/",
  },
};

export const emailInfo = {
  serviceId: "7c2a192201c0de1a3f4a4e89",
  templateId: "template_te4gc8o",
  publicKey: "OFzVAryCQXk4po3vO",
};

export const skills = {
  daily: [
    { name: "VS Code", icon: "vscode" },
    { name: "ChatGPT", icon: "chatgpt" },
    { name: "LinkedIn", icon: "linkedin" },
    { name: "Slack", icon: "slack" },
    { name: "Discord", icon: "discord" },
    { name: "GitHub Copilot", icon: "githubcopilot" },
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
  ],
  proficient: [
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Bootstrap", icon: "bootstrap" },
    { name: "HTMX", icon: "htmx" },
    { name: "Python", icon: "python" },
    { name: "Arduino", icon: "arduino" },
  ],
  webDevelopment: [
    { name: "React", icon: "react" },
    { name: "React Bootstrap", icon: "reactbootstrap" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Express.js", icon: "expressjs" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Mongoose", icon: "mongoose" },
    { name: "Insomnia", icon: "insomnia" },
    { name: "Postman", icon: "postman" },
    { name: "JSON", icon: "json" },
    { name: "JWT", icon: "jwt" },
    { name: "npm", icon: "npm" },
  ],
  lowLevel: [
    { name: "C", icon: "c" },
    { name: "Terminal", icon: "terminal" },
    { name: "Vim", icon: "vim" },
    { name: "Bash", icon: "bash" },
  ],
};

export const experience = [
  {
    title: "Lektor",
    company: "Lionscz",
    location: "Brno, Czech Republic",
    period: "June 2024 - Present",
    description:
      "Creating manuals for students for python and web development course. Remote work.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Node.js",
      "Express.js",
      "MongoDB",
      "npm",
      "Auth",
      "RESTful APIs",
      "...",
    ],
  },
  {
    title: "Bartender",
    company: "Frýdek-Místek Tančírna",
    location: "Frýdek-Místek, Czech Republic",
    period: "September 2022 - Present",
    description:
      "Helping with preparation of events. Making drinks and serving them to the guests. I am participating in this event every 1-2 months.",
    technologies: ["Bartending", "Communication", "Teamwork"],
  },
  {
    title: "Life Guard",
    company: "Grandhotel Permon 4*",
    location: "Pribylina, Slovakia",
    period: "July 2023 - August 2023",
    description:
      "Taking care of the guests, swimming pool, tobogans, and other facilities. Helping injured guests and guests with disabilities.",
    technologies: ["First Aid", "Swimming", "Communication", "Teamwork"],
  },
  {
    title: "CNC machine operator",
    company: "Stolárstvo u Kunaja",
    location: "Štrba, Slovakia",
    period: "July 2022 - August 2022",
    description:
      "Assisted in CNC machine operation, we were processing doors and windows from unprocessed wood.",
    technologies: ["CNC", "Manual work"],
  },
];

export const projects = [
  {
    title: "Webdev course - Lionscz",
    description:
      "Teaching students web development from scratch to advanced topics. Not published for public, only for purchase.",
    image: "/projects/webdevman.png",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Mongosh",
      "Auth",
      "RESTful APIs",
      "npm",
      "JWT",
      "Bcrypt",
      "...",
    ],
    liveLink: "https://lionscz.cz/",
    repoLink: "https://lionscz.cz/",
  },
  {
    title: "FdF (Fil Der Fer)",
    description:
      "3D rendering of a 3D model of a 3D object. Projection from 3D model to 2D image using MLX42 library.",
    image: "/projects/fdf.png",
    technologies: ["C", "Git", "MLX42", "Projection"],
    liveLink: "-",
    repoLink: "https://github.com/sknefi/FdF",
  },
  {
    title: "MeetUs",
    description:
      "My first full stack project. It is a social media platform for meeting new people with a login system, a profile page, joining events and checking previous events.",
    image: "/projects/meetus.png",
    technologies: [
      "React",
      "Bootstrap",
      "JSX",
      "Node.js",
      "Express.js",
      "Server storage",
      "Socket.io",
    ],
    liveLink: "-",
    repoLink: "https://github.com/sknefi/react-app-MeetUS",
  },
  {
    title: "Creative Agency",
    description:
      "My first project with HTML and CSS. It is a simple landing page for a creative agency. I combined all my skills from HTML and CSS.",
    image: "/projects/creativeagency.png",
    technologies: ["HTML", "CSS"],
    liveLink: "-",
    repoLink: "https://github.com/sknefi/Creative-Agency",
  },
  {
    title: "Schelling's segregation",
    description:
      "Implementation of Schelling's segregation in Python. The program simulates the behavior of people moving into a new neighborhood and choosing their position based on the preferences of their neighbors.",
    image: "/projects/schellings.png",
    technologies: ["Python", "Matplotlib", "Numpy"],
    liveLink: "-",
    repoLink: "https://github.com/sknefi/ai_uu/tree/main/p_02/uloha",
  },
  {
    title: "Lumberjack Jano",
    description:
      "My first 2D game in Python. The player has to kill skeletons to gain points. The game never ends, purpose is to gain as many points as possible and enjoy the game.",
    image: "/projects/lumberjack.png",
    technologies: ["Python", "Pygame"],
    liveLink: "-",
    repoLink: "https://github.com/sknefi/drevorubac-jano",
  },
  {
    title: "Local search - Graph coloring",
    description:
      "Coloring of a graph using local search algorithm. Implementation hill climbing and random walk which is used to find the best solution when stuck in local optimum.",
    image: "/projects/graphcoloring.png",
    technologies: ["Python", "Matplotlib", "Numpy"],
    liveLink: "-",
    repoLink: "https://github.com/sknefi/ai_uu/blob/main/p_03/uloha/",
  },
  {
    title: "Terain - Evolution algorithm",
    description:
      "Evolution algorithm for terrain generation. The algorithm is used to generate a terrain for a 2D visualisation. Based on the fitness function, the algorithm is able to generate a terain based on some parameters.",
    image: "/projects/terrain.png",
    technologies: ["Python", "Matplotlib", "Numpy"],
    liveLink: "-",
    repoLink: "https://github.com/sknefi/ai_uu/blob/main/p_04/uloha/",
  },
  {
    title: "Libft - 42 library",
    description:
      "Implementation of a library for 42. We created alibrary of functions that are used in the 42 curriculum.",
    image: "/projects/libft.png",
    technologies: ["C"],
    liveLink: "-",
    repoLink: "https://github.com/sknefi/libft_divinus",
  },
  {
    title: "Minitalk",
    description:
      "Creating a simple client-server application using signals. The client sends a message to the server and the server sends a response back to the client.",
    image: "/projects/minitalk.png",
    technologies: ["C"],
    liveLink: "-",
    repoLink: "https://github.com/sknefi/minitalk",
  },
  {
    title: "Other small projects",
    description:
      "Other small projects and algorithms that I have created for fun or for learning purposes you can find here on my github.",
    image: "/projects/more.png",
    technologies: ["C", "JavaScript", "Python", "..."],
    liveLink: "https://github.com/sknefi/",
    repoLink: "https://github.com/sknefi/",
  },
];

export const education = [
  {
    degree: "Software Engineering - Bachelor degree / certificate",
    institution: "42 Prague",
    location: "Prague, Czech Republic",
    period: "2024 - present",
    description:
      "Focus on low level programming, algorithms, data structures, system administration and communication skills.",
  },
  {
    degree: "Software Development - Bachelor degree",
    institution: "Unicorn University",
    location: "Prague, Czech Republic",
    period: "2023 - present",
    description:
      "Focus on web development, algorithms, software engineering and database management.",
  },
  {
    degree: "Informatics",
    institution: "Charles University",
    location: "Prague, Czech Republic",
    period: "2022 - 2023",
    description:
      "Focus on programming, algorithms, data structures and mathematics.",
  },
  {
    degree: "High School",
    institution: "Tatranská Akadémia - Súkromná stredná odborná škola",
    location: "Poprad, Slovakia",
    period: "2018 - 2022",
    description:
      "Focus on programming, networking, graphics, electronics and web development.",
  },
];

export const certificates = [
  {
    name: "Algorithms and Data Structures",
    issuer: "Unicorn University",
    date: "2024",
    image: "/cert_imgs/unicornuni.png",
    link: "/cert_pdfs/ads.pdf",
    description: "Comprehensive study of data structures and algorithms including sorting, searching, and graph algorithms with practical implementations."
  },
  {
    name: "Basics of Web Development",
    issuer: "Unicorn University",
    date: "2024",
    image: "/cert_imgs/unicornuni.png",
    link: "/cert_pdfs/basicwebdev.pdf",
    description: "Introduction to HTML, CSS, and JavaScript. Building responsive websites with modern web development practices."
  },
  {
    name: "MongoDB Essentials",
    issuer: "Unicorn University",
    date: "2024",
    image: "/cert_imgs/unicornuni.png",
    link: "/cert_pdfs/mongodb.pdf",
    description: "Core concepts of MongoDB database system including CRUD operations, aggregation framework, and data modeling strategies."
  },
  {
    name: "Introduction to Git and GitHub",
    issuer: "Unicorn University",
    date: "2024",
    image: "/cert_imgs/unicornuni.png",
    link: "/cert_pdfs/git.pdf",
    description: "Version control fundamentals using Git and GitHub, including branching strategies and collaborative development workflows."
  },
  {
    name: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "2024",
    image: "/cert_imgs/freecodecamp.png",
    link: "/cert_pdfs/rwd.png",
    description: "Creating responsive layouts with CSS flexbox, grid, and media queries to ensure applications work across all device sizes."
  },
  {
    name: "React JS",
    issuer: "Unicorn University",
    date: "2024",
    image: "/cert_imgs/unicornuni.png",
    link: "/cert_pdfs/react.pdf",
    description: "Building modern single-page applications with React, including state management, hooks, and component architecture."
  },
  {
    name: "Introduction to Software Development",
    issuer: "Unicorn University",
    date: "2024",
    image: "/cert_imgs/unicornuni.png",
    link: "/cert_pdfs/itsd.pdf",
    description: "Overview of software development practices, methodologies, and lifecycles including Agile, DevOps, and testing approaches."
  },
  {
    name: "Programming in JavaScript",
    issuer: "Unicorn University",
    date: "2024",
    image: "/cert_imgs/unicornuni.png",
    link: "/cert_pdfs/js.pdf",
    description: "Core JavaScript concepts including DOM manipulation, async programming, and modern ES6+ features."
  },
  {
    name: "Basics concepts of cybersecurity",
    issuer: "Unicorn University",
    date: "2025",
    image: "/cert_imgs/unicornuni.png",
    link: "/cert_pdfs/cybersec.pdf",
    description: "Introduction to information security principles, common vulnerabilities, and defensive measures for web applications."
  },
  {
    name: "Introduction to software architecture",
    issuer: "Unicorn University",
    date: "2024",
    image: "/cert_imgs/unicornuni.png",
    link: "/cert_pdfs/itsa.pdf",
    description: "Understanding architectural patterns, system design principles, and making architectural decisions for scalable solutions."
  },
  {
    name: "IoT Essentials",
    issuer: "Unicorn University",
    date: "2024",
    image: "/cert_imgs/unicornuni.png",
    link: "/cert_pdfs/iot.pdf",
    description: "Fundamentals of Internet of Things technologies, protocols, and application design for connected devices."
  },
  {
    name: "Relational databases",
    issuer: "Unicorn University",
    date: "2024",
    image: "/cert_imgs/unicornuni.png",
    link: "/cert_pdfs/relational.pdf",
    description: "Database design, SQL, normalization, transaction management, and performance optimization for relational database systems."
  },
  {
    name: "IT in business",
    issuer: "Unicorn University",
    date: "2024",
    image: "/cert_imgs/unicornuni.png",
    link: "/cert_pdfs/itb.pdf",
    description: "Using information technology to drive business value, align with business strategy, and enable digital transformation."
  },
  {
    name: "Management",
    issuer: "Unicorn University",
    date: "2024",
    image: "/cert_imgs/unicornuni.png",
    link: "/cert_pdfs/management.pdf",
    description: "Principles of project management, team leadership, and organizational behavior in technology environments."
  },
  {
    name: "Basic concepts of business",
    issuer: "Unicorn University",
    date: "2024",
    image: "/cert_imgs/unicornuni.png",
    link: "/cert_pdfs/bcob.pdf",
    description: "Introduction to business fundamentals including economics, marketing, finance, and strategic planning."
  },
  {
    name: "Elementary functions of mathematics",
    issuer: "Unicorn University",
    date: "2024",
    image: "/cert_imgs/unicornuni.png",
    link: "/cert_pdfs/elmath.pdf",
    description: "Study of elementary functions, their properties, graphs, and applications in mathematical problem-solving."
  },
  {
    name: "Complex numbers",
    issuer: "Unicorn University",
    date: "2024",
    image: "/cert_imgs/unicornuni.png",
    link: "/cert_pdfs/complex.pdf",
    description: "Understanding complex number systems, operations, and their applications in various mathematical and engineering contexts."
  },
  {
    name: "Derivatives and Integrals",
    issuer: "Unicorn University",
    date: "2024",
    image: "/cert_imgs/unicornuni.png",
    link: "/cert_pdfs/calculus.pdf",
    description: "Calculus concepts focusing on differentiation, integration, and their practical applications in problem-solving."
  },
  {
    name: "Statistics",
    issuer: "Unicorn University",
    date: "2024",
    image: "/cert_imgs/unicornuni.png",
    link: "/cert_pdfs/statistics.pdf",
    description: "Statistical methods for data analysis including probability, hypothesis testing, regression, and data visualization."
  },
  {
    name: "uu5 - Intern framework",
    issuer: "Unicorn University",
    date: "2025",
    image: "/cert_imgs/unicornuni.png",
    link: "/cert_pdfs/uu5.pdf",
    description: "Building applications with Unicorn's proprietary uu5 framework, focused on component-based frontend development."
  },
  {
    name: "uuAppServer - Intern framework",
    issuer: "Unicorn University",
    date: "2024",
    image: "/cert_imgs/unicornuni.png",
    link: "/cert_pdfs/uuapps.pdf",
    description: "Server-side development using Unicorn's uuAppServer framework for creating scalable business applications."
  },
  {
    name: "Business English",
    issuer: "Unicorn University",
    date: "2024",
    image: "/cert_imgs/unicornuni.png",
    link: "/cert_pdfs/be.pdf",
    description: "Professional English communication skills for business environments, technical documentation, and presentations."
  },
];
