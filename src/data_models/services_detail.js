import Link from "next/link";
import img1 from "@/public/images/services/serv1.png";
import img2 from "@/public/images/services/serv2.png";
import img3 from "@/public/images/services/serv3.png";
import img4 from "@/public/images/services/serv4.png";
import img5 from "@/public/images/services/serv5.png";
import img6 from "@/public/images/services/serv6.png";
import img7 from "@/public/images/home/services7.jpg"
import img8 from "@/public/images/services/serv7.jpg"
import { v4 as uuidv4 } from "uuid";

const generateId = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

export const serviceHeaders = [
  "ENERGY PLANNING & AUDIT",
  "ENERGY ADVISORY",
  "MINI-GRID DESIGN",
  "CLEAN COOKING SOLUTIONS",
  "ENERGY SYSTEMS DESIGN & DEVELOPMENT",
  "ENERGY EDUCATION & ADVOCACY",
  "PURE TECHNOLOGY SOLUTIONS",
  "E-WASTE DISPOSAL & RECYCLING",
];

export const serviceInfo = [
  {
    id: 1,
    image: img1,
    title: "ENERGY PLANNING & AUDIT",
    description:
      "Our Energy Planning & Audit services provide comprehensive assessments of your energy consumption and efficiency. We conduct thorough audits of your current energy usage, identify areas of inefficiency, and develop customized plans to optimize energy consumption and reduce costs. By implementing energy-saving measures and leveraging the latest technologies, we help you achieve greater efficiency and sustainability in your energy usage.",
  },
  {
    id: 2,
    image: img2,
    title: "ENERGY ADVISORY",
    description:
      "Navigating the complex landscape of energy regulations, policies, and market dynamics can be daunting. Our Energy Advisory services offer expert guidance and consultation to help you make informed decisions about your energy investments. We provide strategic advice tailored to your specific needs, helping you navigate regulatory requirements, assess market trends, and identify opportunities for growth and optimization in the energy sector.",
  },
  {
    id: 3,
    image: img3,
    title: "MINI-GRID DESIGN",
    description:
      "Our Mini-grid Design services are tailored to meet the unique energy needs of off-grid or underserved communities, businesses, and industries. We specialize in designing and implementing customized mini-grid solutions that provide reliable and sustainable energy access. From site assessment and system design to installation and maintenance, we deliver turnkey solutions that empower communities with access to clean and affordable energy.",
  },
  {
    id: 4,
    image: img4,
    title: "CLEAN COOKING SOLUTIONS",
    description:
      "Traditional cooking methods can have significant environmental and health impacts. Our Clean Cooking Solutions offer innovative technologies and alternative cooking fuels to promote healthier and more environmentally friendly cooking practices. From e-cooking, clean cookstoves to biogas digesters, we provide solutions that reduce indoor air pollution, minimize deforestation, and improve livelihoods in communities around the world.",
  },
  {
    id: 5,
    image: img5,
    title: "ENERGY SYSTEMS DESIGN & DEVELOPMENT",
    description:
      "Our Energy Systems Design and Development services encompass the full lifecycle of energy infrastructure projects, from conceptualization and design to implementation and optimization. Whether you're integrating renewable energy sources, implementing energy storage solutions, or deploying smart grid technologies, we leverage our expertise to design and develop resilient and efficient energy systems that meet your specific requirements and goals.",
  },
  {
    id: 6,
    image: img6,
    title: "ENERGY EDUCATION & ADVOCACY",
    description: `Tovero Energy Ltd is a leading voice in the clean energy advocacy space through the flagship Tonipash Sustainable Energy Talk™ (TSET). The major objective of Tonipash Sustainable Energy Talk™ is to spark up behavioural change through monthly virtual renewable energy and climate change awareness and advocacy sessions.From the inception of Tonipash Sustainable Energy Talk™ (TSET) till date, 52 speakers from different parts of the world have featured on the advocacy and awareness event (65% of which were male and 35% female), and over 1,500 participants have been reached (90% of them youths). Visit our Youtube channel to see the various topics and discussions so far https://www.youtube.com/@toveroenergy3932/videos.This in addition to the annual Africa International Conference on Clean Energy and Energy Storage (AICCEES) provide a platform for exchange of ideas and updates on new and emerging trends in the industry.`,
  },
  {
    id: 7,
    image: img7,
    title: "PURE TECHNOLOGY SOLUTIONS",
    description: `Design and construction of PURE(Productive Use of Renewable Energy) systems that are efficient and sustainable.`,
    
  },
  {
    id: 8,
    image: img8,
    title: "E-WASTE DISPOSAL & RECYCLING",
    description: `Tovero Energy Ltd is a leading expert in handling all kinds of electronic waste disposal and recycling`,
  },
];
