import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Database,
  Wrench,
  Languages,
  Lightbulb,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const categoryKeys = ["webdev", "databases", "tools", "languages", "methodologies", "mobile"] as const;

export const SkillsSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const icons = {
    webdev: Code2,
    databases: Database,
    tools: Wrench,
    languages: Languages,
    methodologies: Lightbulb,
    mobile: Lightbulb,
  };

  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {t.skills.title.split(" ")[0]}{" "}
            <span className="gradient-text">{t.skills.title.split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryKeys.map((key, categoryIndex) => {
              const Icon = icons[key];
              const title = t.skills[key];
              const skills = t.skills.skillLists[key];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="card-gradient p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 min-w-0">
                    {skills.map((skill) => (
                      <span key={skill} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
