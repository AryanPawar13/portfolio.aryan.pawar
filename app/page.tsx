"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  SiPython,
  SiPytorch,
  SiChainlink,
  SiMysql,
  SiFlask,
} from "react-icons/si";

import {
  AiOutlineRobot,
  AiOutlineBarChart,
  AiOutlineLineChart,
  AiOutlineFundProjectionScreen,
  AiOutlineCalculator,
  AiOutlineRise,
  AiOutlineWarning,
  AiOutlineSafety,
  AiOutlineNodeIndex,
  AiOutlineDashboard,
  AiOutlineGlobal,
  AiOutlineDeploymentUnit,
} from "react-icons/ai";

import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";


import { MdOutlineVisibility } from "react-icons/md";





/* =======================
   EXPERIENCE DATA
======================= */
const experience = [
  {
    role: "UDA Summer Intern",
    org: "Maritime Research Centre, Pune",
    time: "May 2025 – July 2025",
    points: [
      "Built a Python-based geospatial analytics platform using Flask and Leaflet.js to visualize submarine cable routes and environmental risk layers.",
      "Optimized and processed 1.7GB+ geospatial datasets to support infrastructure planning and maritime risk assessment.",
    ],
  },
  {
    role: "Summer Intern",
    org: "Industrial Research & Consultancy Centre (IRCC), IIT Bombay",
    time: "May 2025 – July 2025",
    points: [
      "Documented 33 of 41 patent sign-offs (80.5%) across engineering domains, coordinating with faculty to ensure compliance.",
      "Supported commercialization and technology licensing through structured documentation and accountability.",
    ],
  },
  {
    role: "Research & Data Analyst Intern",
    org: "World of Steel",
    time: "May 2024 – July 2024",
    points: [
      "Automated Salesforce workflows and integrated CRM, Mailchimp, and Google Analytics for 200+ accounts.",
      "Built Power BI and Excel dashboards for green steel market analysis, earning CEO recognition.",
    ],
  },
];

/* =======================
   PROJECTS DATA
======================= */
const featuredProjects = [
  {
    title: "Agentic Document AI System",
    problem:
      "Automated understanding and extraction of complex technical documents at scale.",
    impact: "50+ PDFs · 1000+ chunks · Multi-agent RAG",
    primary: ["Agentic AI", "Document Intelligence"],
    secondary: ["PaddleOCR", "LangChain", "RAG", "Python"],
    github: "https://github.com/AryanPawar13/agentic-document-ai",
    drive: null,
    details:
      "Built an end-to-end agentic document intelligence system capable of parsing layouts, extracting structured data from tables and charts, and answering complex questions using multi-agent orchestration and RAG pipelines.",
  },
  {
    title: "Panchayat-Led Agro-Processing Investment Proposal",
    problem:
      "Evaluating financial viability of rural agro-processing infrastructure.",
    impact: "IRR 18.3% · NPV ₹5.9M · ~3-year payback",
    primary: ["Financial Modeling", "Infrastructure Finance"],
    secondary: ["Valuation", "Risk Analysis", "Excel"],
    github: null,
    drive:
      "https://drive.google.com/drive/folders/1A1LtZiayQxOAdeNZdPhOfAJd6bMKbCmj?usp=sharing",
    details:
      "Developed a ₹10 crore investment proposal including 6-year financial projections, value chain analysis, blended financing structures, and sensitivity analysis for rural agro-processing.",
  },
  {
    title: "Conser-vision: Wildlife Image Classification",
    problem:
      "Automated wildlife species classification from camera trap images.",
    impact: "10 classes · Transfer learning",
    primary: ["Computer Vision", "Deep Learning"],
    secondary: ["CNN", "PyTorch", "Data Augmentation"],
    github:
      "https://github.com/AryanPawar13/World_Quant_University_Projects",
    drive: null,
    details:
      "Implemented a CNN-based image classification system using PyTorch and transfer learning techniques to classify wildlife species with robust generalization.",
  },
];

const additionalProjects = [
  {
    title: "Health Insurance Medical Costs Analysis",
    description:
      "Statistical distribution fitting and risk analysis on health insurance medical cost data using Python, including K-S tests and descriptive metrics.",
    tags: ["Risk Analytics", "Statistics", "Python"],
  },
  {
    title: "MLB Team Runs Scored Prediction",
    description:
      "Linear regression models (R² = 90.3%) built on SQL-extracted data to identify key performance drivers in baseball analytics.",
    tags: ["Predictive Modeling", "Regression", "SQL"],
  },
];

const skills = [
  {
    category: "AI & Machine Learning",
    items: [
      { name: "Python", icon: "SiPython" },
      { name: "PyTorch", icon: "SiPytorch" },
      { name: "LangChain", icon: "SiChainlink" },
      { name: "RAG", icon: "AiOutlineRobot" },
      { name: "Computer Vision", icon: "MdOutlineVisibility" },
      { name: "CNNs", icon: "AiOutlineDeploymentUnit" },
    ],
  },
  {
    category: "Data & Analytics",
    items: [
      { name: "SQL", icon: "SiMysql" },
      { name: "Statistics", icon: "AiOutlineBarChart" },
      { name: "Regression", icon: "AiOutlineLineChart" },
      { name: "Risk Analytics", icon: "AiOutlineFundProjectionScreen" },
    ],
  },
  {
    category: "Finance & Valuation",
    items: [
      { name: "Financial Modeling", icon: "AiOutlineCalculator" },
      { name: "NPV / IRR", icon: "AiOutlineRise" },
      { name: "Risk Modeling", icon: "AiOutlineWarning" },
      { name: "Insurance Analytics", icon: "AiOutlineSafety" },
    ],
  },
  {
    category: "Engineering & Systems",
    items: [
      { name: "Optimization", icon: "AiOutlineNodeIndex" },
      { name: "Control Systems", icon: "AiOutlineDashboard" },
      { name: "GIS Analytics", icon: "AiOutlineGlobal" },
      { name: "Flask", icon: "SiFlask" },
    ],
  },
];



function ExperienceItem({ exp }: { exp: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Timeline Node */}
      <motion.div
        animate={{
          scale: isInView ? 1.4 : 1,
          opacity: isInView ? 1 : 0.4,
          boxShadow: isInView
            ? "0 0 16px rgba(79,140,255,0.9)"
            : "0 0 0px rgba(0,0,0,0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute -left-12 top-2 w-4 h-4 rounded-full bg-[#4F8CFF]"
      />

      <h3 className="text-xl font-semibold">
        {exp.role} —{" "}
        <span className="text-[var(--muted)]">{exp.org}</span>
      </h3>

      <p className="text-sm text-[var(--muted)] mt-1">
        {exp.time}
      </p>

      <ul className="mt-3 space-y-2 text-[var(--muted)] list-disc list-inside max-w-3xl">
        {exp.points.map((point: string, i: number) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </motion.div>
  );
}

const iconMap: any = {
  SiPython,
  SiPytorch,
  SiChainlink,
  SiMysql,
  SiFlask,
  AiOutlineRobot,
  AiOutlineBarChart,
  AiOutlineLineChart,
  AiOutlineFundProjectionScreen,
  AiOutlineCalculator,
  AiOutlineRise,
  AiOutlineWarning,
  AiOutlineSafety,
  AiOutlineNodeIndex,
  AiOutlineDashboard,
  AiOutlineGlobal,
  AiOutlineDeploymentUnit,
  MdOutlineVisibility,
};

const skillUsage: Record<string, string[]> = {
  Python: [
    "Agentic Document AI System",
    "Health Insurance Medical Costs Analysis",
  ],
  PyTorch: ["Conser-vision: Wildlife Image Classification"],
  LangChain: ["Agentic Document AI System"],
  RAG: ["Agentic Document AI System"],
  SQL: ["MLB Team Runs Scored Prediction"],
  CNNs:["Academic"],
  Regression: ["MLB Team Runs Scored Prediction"],
  MySQL: ["MLB Team Runs Scored Prediction"],
  Statistics: ["Health Insurance Medical Costs Analysis"],
  "Financial Modeling": [
    "Panchayat-Led Agro-Processing Investment Proposal",
  ],
  "Risk Modeling": [
    "Panchayat-Led Agro-Processing Investment Proposal",
    "Health Insurance Medical Costs Analysis",
  ],
  "Computer Vision": ["Conser-vision: Wildlife Image Classification"],
};

function SkillTooltip({
  skill,
  children,
}: {
  skill: string;
  children: React.ReactNode;
}) {
  const projects = skillUsage[skill];

  if (!projects) return <>{children}</>;

  return (
    <div className="relative group">
      {children}

      <div className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 w-64 -translate-x-1/2 scale-95 rounded-lg bg-[var(--card)] p-3 text-xs text-[#E6EAF2] opacity-0 shadow-xl transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
        <p className="mb-1 font-medium text-[var(--accent)]">
          Used in:
        </p>
        <ul className="space-y-1 text-[var(--muted)]">
          {projects.map((proj, i) => (
            <li key={i}>• {proj}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* =======================
   PAGE COMPONENT
======================= */
export default function Home() {
  const experienceRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<any>(null);


  const { scrollYProgress } = useScroll({
    target: experienceRef,
    offset: ["start end", "end start"],
  });
  const [theme, setTheme] = useState<"light" | "dark">("dark");

useEffect(() => {
  const saved = localStorage.getItem("theme") as "light" | "dark" | null;
  const initial = saved ?? "dark";
  setTheme(initial);
  document.documentElement.setAttribute("data-theme", initial);
}, []);

const toggleTheme = () => {
  const next = theme === "dark" ? "light" : "dark";
  setTheme(next);
  localStorage.setItem("theme", next);
  document.documentElement.setAttribute("data-theme", next);
};


  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--fg)] px-6 py-20 sm:px-12 lg:px-24 transition-colors duration-300">
      <div className="fixed right-6 top-6 z-50">
        <button
          onClick={toggleTheme}
          className="rounded-full border border-black/10 dark:border-white/10 bg-white/10 px-4 py-2 text-sm backdrop-blur transition hover:bg-white/20"
        >
          {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>

      {/* ================= HERO ================= */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs sm:text-sm text-[var(--muted)] tracking-widest"
        >
          IIT BOMBAY · AI · DATA · FINANCE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-4xl font-bold sm:text-6xl lg:text-7xl"
        >
          Aryan Pawar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-5 max-w-xl text-base text-[var(--muted)] sm:text-lg lg:text-xl"
        >
          Building intelligent systems for data-driven decision making.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:gap-6"
        >
          {/* Primary CTA */}
          <a
            href="#projects"
            className="rounded-xl bg-[#4F8CFF] px-7 py-3 text-center font-medium text-white transition hover:opacity-90"
          >
            View Projects
          </a>
        
          {/* Secondary CTA */}
          <a
            href="#experience"
            className="rounded-xl border border-[#4F8CFF]/60 px-7 py-3 text-center font-medium text-[#4F8CFF] transition hover:bg-[#4F8CFF]/10"
          >
            View Experience
          </a>
        
          {/* Resume (Tertiary CTA) */}
          <a
            href="https://drive.google.com/file/d/1i7v1X16T5wDmendn799dFcNFNXELbPkt/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-black/10 px-7 py-3 text-center font-medium text-[var(--muted)] transition hover:border-[#4F8CFF] hover:text-[var(--fg)] dark:border-white/15"
          >
            Download Resume
          </a>
        </motion.div>




      {/* ================= EXPERIENCE ================= */}
      <section id="experience" className="mt-40 relative" ref={experienceRef}>

        {/* Static background path */}
        <div className="absolute left-4 top-0 h-full w-px bg-white/10" />

        {/* Animated path */}
        <motion.div
          style={{ height: pathHeight }}
          className="absolute left-4 top-0 w-px bg-linear-to-b from-[#4F8CFF] to-[#4F8CFF]/20"
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold mb-16 ml-16"
        >
          Experience
        </motion.h2>

        <div className="space-y-16 ml-16">
          <div className="space-y-16 ml-16">
            {experience.map((exp, index) => (
            <ExperienceItem key={index} exp={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      
      <section id="projects" className="mt-40">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold mb-12"
        >
          Selected Projects
        </motion.h2>

        <h3 className="text-xl font-semibold mb-8 text-[var(--muted)]">
          Featured Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              onClick={() => setActiveProject(project)}
              className="cursor-pointer group bg-[var(--card)] p-8 rounded-2xl border border-white/5 hover:border-[#4F8CFF]/40 transition"
            >
              <h4 className="text-2xl font-semibold mb-2">
                {project.title}
              </h4>

              <p className="text-[var(--muted)] text-sm mb-4">
                {project.problem}
              </p>

              <p className="text-sm font-medium text-[var(--accent)] mb-6">
                {project.impact}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.primary.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-[#4F8CFF]/15 text-[var(--accent)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.secondary.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 text-[var(--muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <h3 className="text-xl font-semibold mt-20 mb-8 text-[var(--muted)]">
          Additional Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {additionalProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-[var(--card)]/60 p-6 rounded-xl border border-white/5"
            >
              <h4 className="text-lg font-semibold mb-2">
                {project.title}
              </h4>

              <p className="text-sm text-[var(--muted)] mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 text-[var(--muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setActiveProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0B0E14] max-w-2xl w-full mx-6 p-8 rounded-2xl border border-black/10 dark:border-white/10 relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 text-[var(--muted)] hover:text-white"
            >
              ✕
            </button>

            <h3 className="text-2xl font-semibold mb-3">
              {activeProject.title}
            </h3>

            <p className="text-[var(--muted)] mb-4">
              {activeProject.details}
            </p>

            <p className="text-sm font-medium text-[var(--accent)] mb-6">
              {activeProject.impact}
            </p>

            <div className="flex gap-4">
              {activeProject.github && (
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#4F8CFF] hover:bg-white/20 transition"
                >
                  GitHub →
                </a>
              )}

              {activeProject.drive && (
                <a
                  href={activeProject.drive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#4F8CFF] hover:bg-white/20 transition"
                >
                  Drive →
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}

      </section>
      {/* ================= SKILLS ================= */}
      <section className="mt-40">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold mb-12"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-[var(--card)] p-8 rounded-2xl border border-white/5 hover:border-[#4F8CFF]/40 transition"
            >
              <h3 className="text-xl font-semibold mb-6">
                {group.category}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {group.items.map((skill, i) => {
                  const Icon = iconMap[skill.icon];
                  return (
                    <SkillTooltip skill={skill.name}>
                      <div className="flex items-center gap-3 text-[var(--muted)] cursor-default">
                        {Icon && <Icon className="text-xl text-[var(--accent)]" />}
                        <span className="text-sm">{skill.name}</span>
                      </div>
                    </SkillTooltip>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* ================= RESUME & CONTACT ================= */}
      <section className="mt-40 mb-32 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold mb-6"
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mb-10 max-w-xl text-lg text-[var(--muted)]"
        >
          I’m interested in research, data, AI, and finance-oriented roles.
          Always open to meaningful conversations and collaborations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-6 sm:flex-row"
        >
          {/* Contact buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            {/* Email */}
            <a
              href="mailto:aryan.pawar.iitb@gmail.com"
              className="flex items-center gap-3 rounded-xl bg-[#EA4335]/10 px-6 py-4 text-sm text-[#EA4335] transition hover:bg-[#EA4335]/20"
            >
              <SiGmail className="text-xl" />
              Email
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/pawararyan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl bg-[#0A66C2]/10 px-6 py-4 text-sm text-[#0A66C2] transition hover:bg-[#0A66C2]/20"
            >
              <SiLinkedin className="text-xl" />
              LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/AryanPawar13"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl bg-white/10 px-6 py-4 text-sm text-[var(--muted)] transition hover:bg-white/20 hover:text-white"
            >
              <SiGithub className="text-xl" />
              GitHub
            </a>
          </div>

        </motion.div>
      </section>




    </main>
  );
}
