// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";
import fastAPILogo from "./assets/tech_logo/fastapilogo.webp";
import djangoLogo from "./assets/tech_logo/djangologo.png";
import lanchainLogo from "./assets/tech_logo/langchainlogo.png";
import pandaslogo from "./assets/tech_logo/pandas.svg";
import numpyLogo from "./assets/tech_logo/numpy.png";
import dockerLogo from "./assets/tech_logo/docker.webp";
import renderLoo from "./assets/tech_logo/render.png";
import sqlLogo from "./assets/tech_logo/sql.webp";

// Experience Section Logo's
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import agcLogo from "./assets/company_logo/agc_logo.png";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";
import brandBuilderLogo from "./assets/company_logo/brandbuilder.png";

// Education Section Logo's
import glaLogo from "./assets/education_logo/gla_logo.png";
import bsaLogo from "./assets/education_logo/bsa_logo.png";
import vpsLogo from "./assets/education_logo/vps_logo.png";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/github_det.png";
import csprepLogo from "./assets/work_logo/cs_prep.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import taskremLogo from "./assets/work_logo/task_rem.png";
import npmLogo from "./assets/work_logo/npm.png";
import webverLogo from "./assets/work_logo/web_dig.png";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "MySQL", logo: mysqlLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "FastAPI", logo: fastAPILogo },
      { name: "Django", logo: djangoLogo },
      { name: "LangChain", logo: lanchainLogo },
      { name: "Pandas", logo: pandaslogo },
      { name: "Numpy", logo: numpyLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "SQL", logo: sqlLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Render", logo: renderLoo },
      { name: "Figma", logo: figmaLogo },
      { name: "Docker", logo: dockerLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: brandBuilderLogo,
    role: "Backend Engineer Intern",
    company: "BrandBuilder",
    date: "Nov 2025 - Feb 2026",
    desc: "Built and deployed a production-ready Gen AI-powered personal finance assistant, handling the full backend pipeline from OCR ingestion using PyTesseract and EasyOCR through Gemini 2.5 Flash and LangChain restructuring to Firebase storage. Containerized the FastAPI backend with Docker and deployed on Railway, collaborating cross-functionally with frontend and product teams to ship a market-ready application.",
    skills: [
      "Python",
      "FastAPI",
      "LangChain",
      "Gemini API",
      "Firebase",
      "Docker",
      "Railway",
      "PyTesseract",
      "EasyOCR",
    ],
  },
];
import gcesLogo from "./assets/education_logo/gandaki.png";
import paschimanchalLogo from "./assets/education_logo/pashchimanchal_logo.jpg";
import samataLogo from "./assets/education_logo/samata.png";
export const education = [
  {
    id: 1,
    img: gcesLogo,
    school:
      "Gandaki College of Engineering and Science (GCES), Pokhara University",
    date: "2021 - 2025",
    grade: "3.5 GPA",
    desc: "I completed my Bachelor's degree in Software Engineering from Gandaki College of Engineering and Science (GCES), affiliated with Pokhara University. During my studies, I built a strong foundation in software architecture, data structures, algorithms, and AI/ML. I worked on multiple real-world projects including LLM-powered applications, RAG pipelines, and full-stack deployments, applying academic knowledge to solve practical problems.",
    degree: "Bachelor of Software Engineering",
  },
  {
    id: 2,
    img: paschimanchalLogo,
    school: "Paschimanchal Secondary School",
    date: "2019 - 2020",
    grade: "3.8 GPA",
    desc: "I completed my Higher Secondary Education (+2) from Paschimanchal Secondary School, where I studied Physics, Chemistry, Mathematics, and English. This academic foundation strengthened my analytical and problem-solving skills, which later proved essential in my journey into software engineering and AI/ML.",
    degree: "+2 (Higher Secondary) - Physics, Chemistry, Mathematics & English",
  },
  {
    id: 3,
    img: samataLogo,
    school: "Samata Shiksha Niketan",
    date: "2018",
    grade: "3.6 GPA",
    desc: "I completed my SEE (Secondary Education Examination / Class 10) from Samata Shiksha Niketan, where I studied core subjects along with Basic Computer as an additional subject. This early exposure to computers sparked my interest in technology and programming.",
    degree: "SEE (Class 10) - Science with Basic Computer",
  },
];

import aiQuizLogo from "./assets/work_logo/ai_quizz.png";
import perfectCareLogo from "./assets/work_logo/perfect_Care.png";
import movieRecLogo from "./assets/work_logo/movie_recommendation.png";
import carPriceLogo from "./assets/work_logo/car_price_prediction.png";

export const projects = [
  {
    id: 0,
    title: "AI Quiz App – Intelligent Assessment Platform",
    description:
      "A comprehensive AI-powered quiz application that generates dynamic assessments from multiple document formats including PDFs, Word documents, and YouTube transcripts. Leverages LangChain and Groq/Gemini API models to create intelligent quizzes with real-time, context-aware responses for an interactive learning experience.",
    image: aiQuizLogo,
    tags: [
      "Python",
      "FastAPI",
      "LangChain",
      "Gemini API",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/Anilbk777/ai-quiz-app",
    webapp: "https://ai-quizzes-generator.vercel.app/",
  },
  {
    id: 1,
    title: "PerfectCare NZ – Business Website",
    description:
      "A fully functional, production-ready business website for a New Zealand-based care services company. Built with responsive, mobile-first UI components in React.js with smooth navigation and professional design, now live and actively serving real customers in New Zealand.",
    image: perfectCareLogo,
    tags: ["React.js", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Anilbk777/perfectcare",
    webapp: "https://www.perfectcare.co.nz/",
  },
  {
    id: 2,
    title: "Movie Recommendation System",
    description:
      "A collaborative filtering recommendation engine that suggests movies based on user preferences. Implements cosine similarity for personalized and accurate recommendations, backed by a full data preprocessing pipeline and deployed as an interactive Streamlit web app.",
    image: movieRecLogo,
    tags: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    github: "https://github.com/Anilbk777/movie-recommendation-system",
    webapp:
      "https://anilbk777-movie-recommendation-system-app-vvj9hk.streamlit.app/",
  },
  {
    id: 3,
    title: "Ford Car Price Prediction App",
    description:
      "A machine learning regression app that predicts used Ford car prices based on key features. Built with Ridge, Lasso, and ElasticNet models with feature scaling and hyperparameter tuning, deployed as a real-time inference app using Streamlit.",
    image: carPriceLogo,
    tags: [
      "Python",
      "Scikit-learn",
      "Ridge",
      "Lasso",
      "ElasticNet",
      "Streamlit",
    ],
    github: "https://github.com/Anilbk777/car-price-prediction",
    webapp: "https://machine-learning-ujzzbtckdlqlhrauovxnbh.streamlit.app/",
  },
];
