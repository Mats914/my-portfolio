import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Database, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  {
    key: "php",
    tags: ["PHP", "MySQL", "Authentication", "CRUD", "Security"],
    icon: Database,
    github: "https://github.com/Mats914/film-bibliotek-PHP",
    period: "Feb 2025 – Mar 2025",
  },
  {
    key: "mentor",
    tags: ["React.js", "MongoDB", "Figma", "UX/UI", "Responsive"],
    icon: Layout,
    github: "https://github.com/Mats914/LIA-Project-Mentor",
    period: "Nov 2023 – Dec 2023",
  },
] as const;

export const ProjectsSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {t.projects.title.split(" ")[0]}{" "}
            <span className="gradient-text">{t.projects.title.split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12 w-full min-w-0">
            {projects.map((project, index) => {
              const content = t.projects[project.key];
              const ProjectIcon = project.icon;
              return (
                <motion.div
                  key={project.key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group card-gradient rounded-xl border border-border overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <ProjectIcon className="w-6 h-6 text-primary" />
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {content.title}
                    </h3>
                    <p className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mb-3">
                      {project.period}
                    </p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {content.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {content.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="text-xs text-muted-foreground flex items-center gap-1"
                        >
                          <span className="w-1 h-1 rounded-full bg-primary" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="px-6 pb-6 md:px-8 md:pb-8">
                    <Button variant="outline" size="sm" className="w-full group/btn" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        {t.projects.viewOnGitHub}
                        <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center"
          >
            <Button size="lg" className="group px-8 py-6 text-base font-semibold" asChild>
              <a
                href="https://github.com/Mats914"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{t.projects.allProjects}</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
