import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award, BookOpen, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const ExperienceSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const expTitleParts = t.experience.title.split(" ");
  const titleHighlight = expTitleParts.pop() || "";
  const titleMain = expTitleParts.join(" ");

  return (
    <section id="experience" className="section-padding bg-card/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {titleMain} <span className="gradient-text">{titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {t.experience.subtitle}
          </p>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto w-full min-w-0">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t.experience.work}</h3>
              </div>
              <div className="space-y-4">
                {t.experience.experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title + exp.company}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="card-gradient p-5 rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <div>
                        <h4 className="font-medium text-foreground">{exp.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {exp.company} · {exp.location}
                        </p>
                      </div>
                      <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {exp.description}
                    </p>
                    {exp.github && (
                      <a
                        href={exp.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs text-primary hover:text-primary/80 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        {t.experience.viewOnGitHub}
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{t.experience.educationTitle}</h3>
                </div>
                <div className="space-y-4">
                  {t.experience.education.map((edu, index) => (
                    <motion.div
                      key={edu.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="card-gradient p-5 rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
                    >
                      <h4 className="font-medium text-foreground text-sm">{edu.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{edu.institution}</p>
                      <span className="text-xs text-primary mt-2 block">{edu.period}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{t.experience.coursesTitle}</h3>
                </div>
                <div className="space-y-4">
                  {t.experience.courses.map((course, index) => (
                    <motion.div
                      key={course.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="card-gradient p-5 rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
                    >
                      <h4 className="font-medium text-foreground text-sm">{course.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{course.institution}</p>
                      <span className="text-xs text-primary mt-2 block">{course.period}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{t.experience.certificationsTitle}</h3>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.9 }}
                  className="card-gradient p-5 rounded-xl border border-border space-y-4"
                >
                  {t.experience.certifications.map((cert) => (
                    <div
                      key={cert.name}
                      className="border-b border-border last:border-0 pb-3 last:pb-0"
                    >
                      <p className="text-sm font-medium text-foreground">{cert.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
