import { Project, Certificate, EducationItem, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Milakshi Vithana",
  role: "Software Engineering Undergraduate",
  tagline: "Building scalable solutions with modern web technologies.",
  summary: "I'm an IT undergraduate specializing in Software Engineering at SLIIT. I have hands-on experience in Java, Python, web development, and database systems, with a strong foundation in OOP and software development life cycle practices. I have contributed to real-world projects, including a Bike Rental & Ride-Sharing Platform and a Web-based Apartment Sales System, focusing on feature development, code quality, and team collaboration. I am eager to leverage my technical skills and problem-solving abilities to contribute effectively as a Software Engineer Intern or Trainee Software Engineer.",
  email: "milakshivithana@gmail.com",
  linkedin: "https://www.linkedin.com/in/milakshi-vithana",
  github: "https://github.com/it24103200",
  location: "Matara, Sri Lanka"
};

export const EDUCATION: EducationItem[] = [
  {
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    degree: "Bachelor of Science in Information Technology",
    years: "2024 – Present",
    description: "Currently pursuing a BSc in IT with a specialization in Software Engineering. Gaining expertise in software development, databases, network security, and emerging technologies. Passionate about applying knowledge to innovative IT projects."
  },
  {
    institution: "St. Mary’s Convent, Matara",
    degree: "School Education",
    years: "2010 – 2023",
    description: "Completed both primary and secondary education at St. Mary’s Convent, gaining a strong foundation in core subjects. Developed a curiosity for technology and a passion for learning, paving the way for a career in IT."
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Java", "TypeScript", "JavaScript", "C++", "SQL"]
  },
  {
    category: "Frontend",
    items: ["React", "Tailwind CSS", "GSAP", "Vite", "HTML5/CSS3"]
  },
  {
    category: "Backend & Tools",
    items: ["Node.js", "MySQL", "Git/GitHub", "Postman", "VS Code"]
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "c1",
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    date: "2025 Dec",
    badgeUrl: "https://open.uom.lk/verify",
    skills: ["Python", "Programming Fundamentals"]
  },
  {
    id: "c2",
    title: "AI/ML Engineer - Stage 1",
    issuer: "Centre for Open and Distance Education - SLIIT",
    date: "December 2025",
    badgeUrl: "https://code.sliit.org/certificates/vahhv1fnnk",
    skills: ["Artificial Intelligence", "Machine Learning"]
  },
  {
    id: "c3",
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "2025 Nov",
    badgeUrl: "https://www.hackerrank.com/certificates/d5a9d8dce0da",
    skills: ["SQL", "Queries", "Database Basics"]
  },
  {
    id: "c4",
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "2025 Nov",
    badgeUrl: "https://www.hackerrank.com/certificates/e2f6f005a640",
    skills: ["Python", "Programming Fundamentals"]
  },
  {
    id: "c5",
    title: "SQL (Advanced)",
    issuer: "HackerRank",
    date: "2025 Nov",
    badgeUrl: "https://www.hackerrank.com/certificates/237edee2b2b4",
    skills: ["Advanced SQL", "Window Functions", "Joins"]
  },
  {
    id: "c6",
    title: "Java (Basic)",
    issuer: "HackerRank",
    date: "2025 Nov",
    badgeUrl: "https://www.hackerrank.com/certificates/e96a4c36cd83",
    skills: ["Java", "OOP"]
  },
  {
    id: "c7",
    title: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    date: "2025 Nov",
    badgeUrl: "https://www.hackerrank.com/certificates/40bbbc8c9f50",
    skills: ["Algorithms", "Data Structures"]
  },
  {
    id: "c8",
    title: "CSS (Basic)",
    issuer: "HackerRank",
    date: "2025 Nov",
    badgeUrl: "https://www.hackerrank.com/certificates/e9425b776b81",
    skills: ["CSS", "Web Styling Basics"]
  },
  {
    id: "c9",
    title: "React (Basic)",
    issuer: "HackerRank",
    date: "2025 Nov",
    badgeUrl: "https://www.hackerrank.com/certificates/e4981337c08b",
    skills: ["React", "Hooks", "Components"]
  },
  {
    id: "c10",
    title: "R (Basic)",
    issuer: "HackerRank",
    date: "2025 Nov",
    badgeUrl: "https://www.hackerrank.com/certificates/898fef16fcb8",
    skills: ["R Programming", "Data Analysis"]
  },
  {
    id: "c11",
    title: "Node (Basic)",
    issuer: "HackerRank",
    date: "2025 Nov",
    badgeUrl: "https://www.hackerrank.com/certificates/aac030b16bc0",
    skills: ["Node.js", "Backend Basics"]
  },
  {
    id: "c12",
    title: "JavaScript (Basic)",
    issuer: "HackerRank",
    date: "2025 Nov",
    badgeUrl: "https://www.hackerrank.com/certificates/61ae0f8850ae",
    skills: ["JavaScript", "Programming"]
  },
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "BikeRenting-RideSharing",
    year: "2025",
    description: "A comprehensive platform for bicycle rentals and ride-sharing. It features real-time availability tracking, user booking management, and a seamless rental interface.",
    techStack: ["Java", "OOP"],
    repoLink: "https://github.com/it24103200/BikeRenting-RideSharing",
    image: "/bike-rental.png",
  },
  {
    id: "p2",
    title: "AppartmentX System",
    year: "2025",
    description: "A comprehensive management system for apartment booking and administration, streamlining tenant interactions and property maintenance.",
    techStack: ["Java", "CSS", "JavaScript", "TSQL", "Maven"],
    repoLink: "https://github.com/it24103200/ApartmentX-System.git",
    image: "/apartment-x.png",
  },
  {
    id: "p3",
    title: "ErrorXplorer",
    year: "2025",
    description: "A web application that helps developers quickly find and fix errors with clear messages, detailed logs, and easy tracking.",
    techStack: ["NEXT.js", "Tailwind CSS", "Radix UI", "MySQL"],
    repoLink: "https://github.com/it24103200/error-xplorer.git",
    image: "/error-xplorer-dashboard.png"
  },
  {
    id: "p4",
    title: "Pixel Plaza",
    year: "2025",
    description: "Web-based shopping mall system designed to revolutionize the shopping experience by providing advanced product discovery features.",
    techStack: ["MERN Stack", "Vite", "Tailwind CSS", "DaisyUI"],
    repoLink: "https://github.com/it24103200",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089&auto=format&fit=crop"
  },
  {
    id: "p5",
    title: "HealthCare Management",
    year: "2025",
    description: "A comprehensive web application for e-channeling and securely sharing medical details, designed to improve patient care.",
    techStack: ["MERN Stack", "Vite", "Tailwind CSS", "JavaScript"],
    repoLink: "https://github.com/it24103200",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
  }
];