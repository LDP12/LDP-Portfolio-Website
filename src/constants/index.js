import {
  csharp,
  mysql,
  wpf,
  html,
  css,
  reactjs,
  tailwind,
  git,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  CompileVortex,
  javascript,
  redpanda,
  pantel,
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

export const services = [
  { title: "C#", icon: csharp },
  { title: "MySQL", icon: mysql },
  { title: "JavaScript", icon: javascript },
  { title: "React JS", icon: reactjs },
  { title: "Three JS", icon: threejs },
  { title: "Tailwind CSS", icon: tailwind },
  { title: "Git", icon: git },
  { title: "WPF", icon: wpf },
  { title: "HTML 5", icon: html },
  { title: "CSS 3", icon: css }
];

export const technologies = [
  { title: "C#", icon: csharp },
  { name: "MySQL", icon: mysql },
  { title: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Three JS", icon: threejs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Git", icon: git },
  { title: "WPF", icon: wpf },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css }
];

export const experiences = [
  {
    title: ".NET Software Engineer",
    company_name: "redPanda | redAcademy",
    icon: redpanda,
    iconBg: "#161329",
    date: "Jan 2023 - Dec 2023",
    points: [
      "Acquired hands-on knowledge of AWS Cloud Foundation, delving into cloud infrastructure, services, and deployment.",
      "also gaining a solid foundation in Machine Learning, covering topics like algorithms, data analysis, and model building.",
    ],
  },
  {
    title: "Pantel Elektronik AG",
    company_name: "Pantel Elektronik AG | Pantel Services SA",
    icon: pantel,
    iconBg: "#161329",
    date: "Jan 2024 - Current",
    points: [
      "Completed virtual internship, gaining a strong foundation in MATLAB, including data analysis and processing.",
      "Acquired practical skills in image and signal processing, including segmentation, batch processing, and spectral analysis.",
      "Developed expertise in machine learning models for clustering, classification, and regression, and customized deep learning techniques for image classification.",
    ],
  }
];

export const projects = [
  {
    name: "WeatherPedia",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
    tags: [
      { name: "MySQL", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
  },
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
    ],
    image: termpw,
  },
  {
    name: "Mental Health Fitness Tracker",
    description:
      "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: mhft,
  }
];
