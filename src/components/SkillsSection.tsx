import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Database, 
  Server, 
  Wrench, 
  Languages, 
  Lightbulb 
} from "lucide-react";

const skillCategories = [
  {
    title: "Webbutveckling",
    icon: Code2,
    skills: ["HTML5", "CSS3", "Flexbox", "JavaScript", "TypeScript", "Vue.js", "React.js", "Bootstrap", "AJAX", "WebSockets", "Node.js", "EJS"],
  },
  {
    title: "Databaser",
    icon: Database,
    skills: ["SQL (PostgreSQL)", "NoSQL (MongoDB)", "Firebase"],
  },
  {
    title: "Verktyg & Plattformar",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "Azure DevOps", "Figma", "AWS", "WordPress", "Jest", "PowerShell", "Linux", "CMD"],
  },
  {
    title: "Programmeringsspråk",
    icon: Languages,
    skills: ["C#", "C", "Python", "Java", "Kotlin", "PHP", "XML"],
  },
  {
    title: "Metodologier",
    icon: Lightbulb,
    skills: ["Agile", "UX/UI-design", "Scrum", "Testning"],
  },
  {
    title: "Apputveckling",
    icon: Lightbulb,
    skills: ["Android", "React Native"],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Tekniska <span className="gradient-text">Färdigheter</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Teknologier och verktyg jag arbetar med
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="card-gradient p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
