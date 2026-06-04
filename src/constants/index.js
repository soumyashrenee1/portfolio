import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  sql,
  css,
  aws,
  azure,
  gcp,
  tfs,
  reactjs,
  flask,
  cl,
  java,
  python,
  net,
  spring,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  tf,
  sl,
  pandas,
  ml,
  nlp,
  cv,
  da,
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
  ocr,
  postgres,
  agents,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education & Work",
  },

  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "BackEnd Developer",
    icon: web,
  },
  {
    title: "FrontEnd Developer",
    icon: mobile,
  },
  {
    title: "AI / ML",
    icon: backend,
  },
  {
    title: "Cloud Computing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "machine learning",
    icon: ml,
  },
  {
    name: "computer vision",
    icon: cv,
  },
  {
    name: "data analysis",
    icon: da,
  },
  {
    name: "nlp",
    icon: nlp,
  },
  {
    name: "tensorflow",
    icon: tf,
  },
  {
    name: "scikitlearn",
    icon: sl,
  },
];

const frameworks = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "DotNet",
    icon: net,
  },
  {
    name: "Springboot",
    icon: spring,
  },
];

const languages = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "C",
    icon: cl,
  },
  {
    name: "Jana",
    icon: java,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "Javascript",
    icon: javascript,
  },
];

const cloudcomputing = [
  {
    name: "azure",
    icon: azure,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "tfs",
    icon: tfs,
  },
  {
    name: "gcp",
    icon: gcp,
  },
];

const databases = [
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "mongodb",
    icon: mongodb,
  },
  {
    name: "postgres",
    icon: postgres,
  },
];
const experiences = [
  {
    title: "Master of Artificial Intelligence",
    company_name: "RMIT University, Melbourne City Campus",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2026 - ongoing",
    points: [],
  },
  {
    title: "AI Consultant",
    company_name: "Freelance",
    icon: agents,
    iconBg: "#E6DEDD",
    date: "March 2026 - ongoing",
    points: [
      "Delivered end-to-end AI products for clients, from understanding requirements and planning the solution to building, testing, and handing over working systems.",
      "Built an agentic marketing system that helped automate campaign ideas, content workflows, lead handling, and marketing decision support.",
      "Developed a sales CRM solution to manage customer data, track leads, improve follow-ups, and support sales operations.",
      "Created an assignment-checking system for TAFE use cases, helping review student work more efficiently while keeping the process clear and practical for users.",
      "Received positive client feedback for being reliable, easy to work with, and able to turn ideas into useful working products.",
    ],
  },
  {
    title: "Software Developer (Consultant)",
    company_name: "Deloitte USI",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Nov 2022 - Feb 2026",
    points: [
      "Project 1: Integrated Eligibility System (IES) Solution - An enterprise platform delivering financial and health services to over 1.2 million users statewide.",
      "Developed scalable full-stack applications using Java, Spring, and SQL, supporting workflows for 1.2M+ users, and enabling $8B+ in benefit distribution.",
      "Built and deployed RESTful APIs and microservices with Spring Boot, improving service modularity, and accelerating feature delivery.",
      "Led cross-functional requirements gathering, improving team velocity by 25%, and reducing planning overhead.",
      "Reverse-engineered 5+ legacy systems, eliminating 95% of redundant code, and boosting system efficiency by 30%. I led the overall modernization journey of the project to cloud-based container architecture, replacing the legacy software and implemented CI/CD pipeline.",
      "Translated 5K+ user requirements and 200+ client documents into 50+ actionable user stories, improving delivery accuracy by 14%.",
      "Project 2: EDBC (Eligibility Determination and Benefit Calculation) Solution - A production-grade eligibility platform used at scale.",
      "Implemented architectural and framework changes using C# .NET and TFS, reducing operational overhead by over 33%.",
      "Resolved critical production issues through data analysis and efficient debugging in high-pressure environments.",
      "Built and optimized 50+ Corticon business decision rules, enabling consistent, rule-driven eligibility determinations across agencies.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Persistent Systems",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Sept 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Bachelors of Technology Computer Science",
    company_name: "Symbiosis International University",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "July 2018 - Aug 2022",
    points: [
      "RESTAURANT RESERVATION SYSTEM : Developed a full‑stack restaurant table reservation platform that allows users to search tablees, check availability, and make secure reservations. Implemented admin panel for restaurant staff to manage tablees, pricing, and bookings.",

      "Secure booking workflow with confirmation system",

      "Admin dashboard for table management & customer records",
      "Search filters for table type, capacity, and pricing",
      "AI/ML DEMENTIA DETECTION MODEL: Designed, developed, and deployed a speech-based dementia detection system using the DementiaBank dataset to identify early cognitive decline. Built a full feature extraction pipeline capturing linguistic and acoustic characteristics such as pitch, pause rate, fluency, and word repetition. Key Contributions:",

      "Engineered linguistic and acoustic feature extraction using Python & Librosa",

      "Implemented an ensemble boosting framework combining multiple ML models",

      "Achieved 83% accuracy, outperforming baseline benchmarks",

      "Performed preprocessing, feature engineering, and model validation to improve generalization",

      "CALORIE COUNTER & NUTRITION TRACKING : Built a mobile application to help users track daily calorie intake, macronutrients, and meal history. Integrated food recognition and nutrition APIs to automate calorie estimation. Designed an intuitive UI with personalized dashboards. Key Features:",

      "Food search with real-time nutrition data",

      "Daily calorie & macro tracker with progress visualization",

      "Meal history, custom food entries, and reminders",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI/ML Dementia Detection Model",
    description: [
      "Designed, developed, and deployed a speech-based dementia detection model using the DementiaBank dataset to identify early cognitive decline.",
      " Engineered a feature extraction pipeline for linguistic attributes such as pitch, pause rate, fluency, and word repetition using Python and Librosa.",
      " Implemented an ensemble learning framework with boosting, combining multiple models to achieve 83% accuracy, surpassing baseline benchmarks.",
      " Performed complete data preprocessing, feature engineering, and model validation to improve performance and generalization.",
      " Authored a research paper with detailed visualizations, statistical insights, and comparative analysis of model results.",
    ],
    tags: [],
    image: carrent,
    source_code_link:
      "https://drive.google.com/file/d/1H1BEW8sgltvGroPK2igarBLhittMzkef/view?usp=sharing",
  },
  {
    name: "Calorie Counter and Nutrition Tracking",
    description: [
      "Conceptualized and built a full-stack diet management platform, offering personalized nutrition tracking and calorie monitoring.",
      " Implemented a searchable food database and recommendation engine that provided tailored meal suggestions based on user goals.",
      " Developed a secure relational database to support user authentication, meal logging, and nutritional data management.",
      " Integrated data-driven insights and feedback loops that dynamically adjusted calorie targets to improve user engagement.",
      " Designed responsive web and mobile interfaces, ensuring a smooth user experience across devices.",
    ],
    tags: [],
    image: jobit,
    source_code_link: "",
  },
  {
    name: "AI chatbot for mental health support & Medicine E-Commerce Platform",
    description: [
      "Developed a conversational AI chatbot capable of providing emotionally adaptive support for users facing stress and anxiety",
      " Built a custom NLP pipeline using Python, NLTK, and Scikit-learn for intent classification, sentiment detection, and entity recognition",
      " Trained and fine-tuned a logistic regression model on curated conversational datasets, reaching 88% intent classification accuracy",
      " Created a rule-augmented dialogue management system to handle contextual fallbacks, improving response quality and coherence",
      " Built a Flask-based backend handling chatbot responses, product management, and order workflows.",
      " Integrated SQL Server for secure storage of user data, product inventory, and order history with optimized relational queries.",
      " Deployed the application on Microsoft Azure App Service, ensuring scalability, uptime, and CI/CD integration.",
    ],
    tags: [],
    image: tripguide,
    source_code_link: "",
  },
];
const projects2 = [
  {
    name: "Automated PDF OCR & Financial Data Extraction System",
    description: [
      " Built an end-to-end OCR pipeline to extract financial metrics from annual reports and earnings PDFs.",
      " Used Tesseract OCR, OpenCV, and Python to clean noisy documents and detect tables with 35% improved accuracy.",
      " Automated extraction of revenue, EPS, ratios, and market indicators.",
      " Normalized raw extracted text into structured datasets for analysis and forecasts.",
      " Integrated results into an Excel + Python analytical model for easy interpretation.",
      " Reduced manual collection time by 70%, improving data availability for AI models.",
    ],
    tags: [],
    image: ocr,
    source_code_link: "",
  },
  {
    name: "Multi-agent Trade-Off Negotiator System",
    description: [
      " Takes an open-ended decision problem and priorities from the user.",
      " Dynamically plans options and criteria.",
      " Runs parallel specialist agents (cost, speed, quality, risk).",
      " Aggregates weighted outcomes into a final decision.",
      " Recommends the best option, with a clear explanation of why.",
      " Multiple specialist AIs analyze the problem in parallel and each agent focuses on one specific concern.",
      " A final “mediator” combines their inputs in a structured, transparent way.",
      " It helps remove gut bias, overthinking, emotional weighting and replaces it with structured reasoning, explicit trade-offs, explainable decisions.",
    ],
    tags: [],
    image: agents,
    source_code_link: "",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  projects2,
  frameworks,
  languages,
  cloudcomputing,
  databases,
};
