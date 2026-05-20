import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar } from "lucide-react";

const projects = [
  {
    title: "Agri-Trek: Precision Clustering of Aerial Objects",
    date: "May 2025",
    description:
      "Developed a full-stack web application to streamline land registration and help farmers access government schemes efficiently. Designed a responsive and user-friendly frontend and improved accessibility for farmers to manage land records and government support services.",
    tech: ["HTML", "CSS", "JavaScript", "React.js", "PHP", "MySQL"],
    github: "https://github.com/KartheekGitty/HTMLproject/blob/main/agri-trek.zip",
  },
  {
    title: "University Events Calendar",
    date: "December 2025",
    description:
      "Developed a responsive full-stack event management platform for students to view, manage, and plan campus activities. Designed an intuitive UI ensuring smooth navigation and enhanced user experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/KartheekGitty/Gmail-Productivity-Analyzer",
  },
  {
    title: "Port Mate: Professional Portfolio Builder for Developers",
    date: "May 2026",
    description:
      "Engineered a full-stack platform enabling professionals to present achievements, technical expertise, and personal details through adaptable layouts. Crafted an interactive React interface with modular sections for showcasing work samples, integrated seamlessly with a Laravel-powered backend. Designed and deployed RESTful services to handle portfolio data, ensuring efficient retrieval and smooth scalability. Elevated usability by adding responsive views and external project linking.",
    tech: ["React.js", "Laravel", "PHP", "MySQL", "REST API", "Tailwind CSS"],
    github: "https://github.com/KartheekGitty/PortMate",
    live: "https://portmate.vercel.app",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="bg-muted/40">
    <div className="section-container">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2 className="section-title">My <span className="gradient-text">Projects</span></h2>
        <p className="section-subtitle">Things I've built</p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="glass-card overflow-hidden group hover-lift"
            >
              <div className="h-2 bg-gradient-to-r from-primary to-accent" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar size={14} />
                  {project.date}
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
                >
                  <Github size={16} /> View on GitHub <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-sm text-muted-foreground text-center italic"
        >
          I have participated in building complete websites involving frontend, backend, and database connectivity.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
