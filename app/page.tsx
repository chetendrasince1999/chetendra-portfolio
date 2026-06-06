"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const linkedin = "https://www.linkedin.com/in/chetendra-singh-jadoun-4a347016b";
const email = "mailto:chetendrasince1999@gmail.com";
const whatsapp = "https://wa.me/919251231544";
const github = "https://github.com/chetendrasince1999";

function Reveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.18 }}
    >
      {children}
    </motion.div>
  );
}

function Tile({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white/80 p-8 shadow-sm backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:rotate-1 hover:shadow-[0_35px_90px_rgba(0,0,0,0.16)]">
      {children}
    </div>
  );
}

export default function Home() {
  const skills = [
    "Power BI", "Microsoft Excel", "SQL", "Data Analytics", "Data Visualization",
    "KPI Reporting", "CRM Analytics", "AML & KYC Monitoring", "Customer Success",
    "Lead Generation", "Business Intelligence", "Dashboard Development",
    "Exploratory Data Analysis", "Microsoft Fabric", "HubSpot CRM",
    "Business Operations", "B2B Sales", "Stakeholder Communication", "Digital Marketing"
  ];

  const tools = [
    "Power BI", "Excel", "Microsoft Fabric", "Canva", "React", "Node.js",
    "Google Workspace", "Google Meet", "SQL", "Tableau", "HubSpot CRM",
    "MongoDB", "Next.js", "TypeScript", "Slack"
  ];

  const certifications = [
    "Deloitte Data Analytics Job Simulation",
    "GenAI Powered Data Analytics Job Simulation",
    "HubSpot CRM Learning",
    "Customer Success Foundations by ChurnZero",
    "Power BI Professional Training",
    "Microsoft 365 Administrator Expert Prep",
    "Social Media Marketing Certificate by Hootsuite",
    "AWS Generative AI Developer Prep",
    "Azure AI Engineer Associate Preparation",
    "OMCA Certification for Digital Marketers Prep",
    "Developing a Service Mindset"
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f7f2] text-[#111]">

<div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

  <motion.div
    animate={{
      x: [0, 120, 0],
      y: [0, -80, 0],
      scale: [1, 1.3, 1],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute -left-40 -top-40 h-[38rem] w-[38rem] rounded-full bg-blue-300/40 blur-[160px]"
  />

  <motion.div
    animate={{
      x: [0, -120, 0],
      y: [0, 100, 0],
      scale: [1, 1.4, 1],
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute -right-40 top-20 h-[40rem] w-[40rem] rounded-full bg-purple-300/40 blur-[170px]"
  />

  <motion.div
    animate={{
      x: [0, 80, 0],
      y: [0, 80, 0],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute bottom-[-10rem] left-1/3 h-[34rem] w-[34rem] rounded-full bg-yellow-200/40 blur-[160px]"
  />

  <motion.div
    animate={{
      y: [0, -30, 0],
      rotate: [0, 10, 0],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute right-[10%] top-[15%] h-40 w-40 rounded-[2rem] border border-black/10 bg-white/40 backdrop-blur-xl shadow-2xl"
  />

  <motion.div
    animate={{
      y: [0, 25, 0],
      rotate: [0, -12, 0],
    }}
    transition={{
      duration: 9,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute left-[8%] top-[55%] h-28 w-28 rounded-full border border-black/10 bg-white/40 backdrop-blur-xl shadow-2xl"
  />

</div>

      <nav className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f7f2]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <p className="font-semibold">Chetendra Singh Jadoun</p>
          <div className="hidden gap-6 text-sm md:flex">
            <a href="#projects" className="hover:text-neutral-500">Projects</a>
            <a href="#experience" className="hover:text-neutral-500">Experience</a>
            <a href="#skills" className="hover:text-neutral-500">Skills</a>
            <a href="#contact" className="hover:text-neutral-500">Contact</a>
          </div>
        </div>
      </nav>

      <section
  id="top"
  className="relative mx-auto max-w-7xl px-6 py-24 md:py-32"
>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500"
        >
          Jaipur, India · Available for International Remote Roles
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-5xl text-5xl font-bold tracking-tight md:text-7xl"
        >
          Data Analyst • CRM Intelligence • AML Monitoring • AI Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 max-w-3xl text-xl leading-relaxed text-neutral-600"
        >
          Results-driven Data Analyst and former entrepreneur with experience in
          business operations, reporting, CRM systems, dashboard development, UI design, Web/Software,
          KPI reporting, customer success, AML/KYC monitoring and AI-assisted analytics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#projects" className="rounded-full bg-black px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:shadow-2xl">
            View Projects
          </a>
          <a href="/resume.pdf" download className="rounded-full border border-black/20 bg-white/60 px-7 py-4 font-semibold backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-xl">
            Download Resume
          </a>
          <a href={linkedin} target="_blank" className="rounded-full border border-black/20 bg-white/60 px-7 py-4 font-semibold backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-xl">
            LinkedIn
          </a>
          <a href={whatsapp} target="_blank" className="rounded-full border border-black/20 bg-white/60 px-7 py-4 font-semibold backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-xl">
            WhatsApp
          </a>
          <a href={github} className="rounded-full border border-black/20 bg-white/60 px-7 py-4 font-semibold backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-xl">
            GitHub
          </a>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {["Power BI Dashboarding", "CRM Analytics","UI / Web","Customer Success","Data Management","AML & KYC Monitoring"].map((item) => (
            <div
              key={item}
              className="rounded-[2rem] border border-black/10 bg-white/70 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.15)]"
            >
              <p className="text-xl font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              ["5+", "Enterprise Projects"],
              ["11+", "Certifications"],
              ["500+", "Students Reached"],
              ["Global", "Remote Ready"],
            ].map(([num, label]) => (
              <div key={label} className="rounded-3xl border border-black/10 bg-white/70 p-8 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <p className="text-4xl font-bold">{num}</p>
                <p className="mt-2 text-neutral-500">{label}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <Reveal>
  <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
      Selected Work
    </p>

    <h2 className="mt-4 text-4xl font-bold md:text-5xl">
      Portfolio Projects
    </h2>

    <div className="mt-10 grid gap-6 md:grid-cols-1">
      <div className="relative overflow-hidden rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-10 text-white shadow-[0_40px_120px_rgba(16,185,129,0.25)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_45px_140px_rgba(16,185,129,0.35)]">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative">
          <p className="text-sm text-emerald-300">01</p>

          <div className="mb-5 mt-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 shadow-lg">
              🚀 Flagship Project
            </span>

            <span className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-xs font-bold text-yellow-300">
              ⭐ Executive SaaS Platform
            </span>

            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-bold text-cyan-300">
              AI + CRM + AML
            </span>
          </div>

          <h3 className="text-4xl font-black md:text-5xl">
            Nexus360 – Executive Intelligence Suite
          </h3>

          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-slate-300">
            Enterprise-grade AI powered CRM, AML, Customer Success,
            Executive Reporting and Risk Intelligence Platform.
            Built with Next.js, TypeScript, Recharts, Tailwind CSS and Framer Motion.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "CRM Analytics",
              "AML Monitoring",
              "Customer 360",
              "AI Copilot",
              "Scenario Simulation",
              "Executive Reporting",
              "Risk Intelligence",
              "Boardroom Dashboard",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              ["20+", "Interactive Components"],
              ["15+", "Executive Dashboards"],
              ["100%", "Responsive Design"],
              ["AI", "Risk Copilot"],
            ].map(([num, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
              >
                <p className="text-3xl font-black text-emerald-300">
                  {num}
                </p>
                <p className="text-sm text-slate-400">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
          href="https://nexus360-ai-crm-aml-dashboard.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-500 px-6 py-3 font-bold text-black transition hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.45)]"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/chetendrasince1999/Nexus360-AI-CRM-AML-Dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-emerald-400 px-6 py-3 font-bold text-emerald-300 transition hover:scale-105 hover:bg-emerald-400 hover:text-black"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-cyan-500/40 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-8 text-white shadow-2xl transition duration-500 hover:-translate-y-2 before:absolute before:inset-0 before:-z-10 before:rounded-3xl before:bg-cyan-400/30 before:blur-2xl">
        <p className="text-sm text-cyan-300">02</p>
        <div className="mb-5 flex flex-wrap items-center gap-3">
  <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 shadow-lg">
    🏆 Featured Project
  </span>

  <span className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-xs font-bold text-yellow-300">
    ⭐ Recruiter Ready
  </span>
</div>

        <h3 className="mt-6 text-2xl font-bold">
          InsightFlow – CRM & AML Analytics Dashboard
        </h3>

        <p className="mt-4 text-slate-300">
          Business Intelligence dashboard built using Next.js, TypeScript,
          Tailwind CSS and Recharts. Includes CRM monitoring, Revenue
          Analytics, AML/KYC risk tracking and Customer Success metrics.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://insight-flow-gamma-beryl.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cyan-400 px-4 py-2 text-cyan-300 hover:bg-cyan-500 hover:text-white"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/chetendrasince1999/InsightFlow"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cyan-400 px-4 py-2 text-cyan-300 hover:bg-cyan-500 hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</Reveal>
      </Reveal>

      <Reveal>
        <section id="experience" className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">Experience</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Professional Background</h2>

          <div className="mt-10 space-y-6">
            <Tile>
              <div className="flex flex-wrap justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold">Founder & Business Owner</h3>
                  <p className="text-neutral-500">M/S Govindam Traders</p>
                </div>
                <p className="text-neutral-500">02/2023 – 04/2026</p>
              </div>
              <ul className="mt-6 grid gap-3 text-neutral-700 md:grid-cols-2">
                <li>• Managed procurement, inventory, sales operations and reporting.</li>
                <li>• Built Excel reporting systems for sales, inventory and financial tracking.</li>
                <li>• Managed customer communication, negotiation and post-sales support.</li>
                <li>• Implemented digital workflows and administrative processes.</li>
                <li>• Coordinated with suppliers and business partners.</li>
              </ul>
            </Tile>

            <Tile>
              <div className="flex flex-wrap justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold">Student Partner</h3>
                  <p className="text-neutral-500">Internshala</p>
                </div>
                <p className="text-neutral-500">09/2018 – 03/2024</p>
              </div>
              <ul className="mt-6 grid gap-3 text-neutral-700 md:grid-cols-2">
                <li>• Promoted internship and career opportunities among 500+ students.</li>
                <li>• Supported outreach campaigns and engagement initiatives.</li>
                <li>• Coordinated workshops and awareness programs.</li>
              </ul>
            </Tile>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section id="skills" className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">Skills</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Core Capabilities</h2>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-black/10 bg-white/80 px-5 py-3 text-sm shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">Tools</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Tech Stack</h2>

          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {tools.map((tool) => (
              <div key={tool} className="rounded-2xl border border-black/10 bg-white/80 p-5 text-center shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                {tool}
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">Certifications</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Learning & Certifications</h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {certifications.map((cert) => (
              <div key={cert} className="rounded-2xl border border-black/10 bg-white/80 p-5 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                {cert}
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[2rem] bg-black p-10 text-white shadow-2xl md:p-16">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-400">
              Remote Work Strengths
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {[
                "Self-Management", "Time Management", "Client Handling", "Entrepreneurial Mindset",
                "AI Productivity", "Remote Collaboration", "Problem Solving", "Fast Learning"
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Open to national / international remote opportunities.
          </h2>

          <p className="mt-6 max-w-2xl text-xl text-neutral-600">
            Available for Data Analyst, CRM, Web Development, Virtual Assistant, Business Intelligence, Operations,
            Customer Success, Reporting and Business Development roles.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href={email} className="rounded-full bg-black px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:shadow-2xl">
              Email Me
            </a>
            <a href={whatsapp} target="_blank" className="rounded-full border border-black/20 bg-white/60 px-7 py-4 font-semibold backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-xl">
              WhatsApp
            </a>
            <a href={linkedin} target="_blank" className="rounded-full border border-black/20 bg-white/60 px-7 py-4 font-semibold backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-xl">
              LinkedIn
            </a>
            <a href={github} className="rounded-full border border-black/20 bg-white/60 px-7 py-4 font-semibold backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-xl">
              GitHub
            </a>
            <a href="/resume.pdf" download className="rounded-full border border-black/20 bg-white/60 px-7 py-4 font-semibold backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-xl">
              Resume
            </a>
          </div>

          <div className="mt-10 text-neutral-600">
            <p>Email: chetendrasince1999@gmail.com</p>
            <p>WhatsApp: +91 9251231544</p>
            <p>LinkedIn: www.linkedin.com/in/chetendra-singh-jadoun-4a347016b</p>
            <p>GitHub: github.com/chetendrasince1999</p>
            <p>Location: Jaipur, India</p>
          </div>
        </section>
      </Reveal>
      <a
  href="#top"
  className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-2xl transition hover:-translate-y-1 hover:scale-110"
>
  ↑
</a>
    </main>
  );
}
