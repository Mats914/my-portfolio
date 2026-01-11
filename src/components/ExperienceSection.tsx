import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award, BookOpen, Github } from "lucide-react";

const experiences = [
  {
    title: "Eget projekt – Dynamisk webbplats med PHP och MySQL",
    company: "Eget projekt",
    period: "Februari 2025 – Mars 2025",
    type: "work",
    description: "Byggde en dynamisk och responsiv webbplats med PHP och MySQL. Implementerade användarregistrering, inloggning, kontaktformulär och datavisning. Säkerställde säkerhet via prepared statements och validering av inmatning.",
    github: "https://github.com/Mats914/film-bibliotek-PHP",
  },
  {
    title: "SEO Specialist (Praktik)",
    company: "Sveriges Talare, Stockholm",
    period: "Januari 2024 – Maj 2024",
    type: "work",
    description: "Ökade webbplatsens organiska synlighet genom SEO-strategier. Konkurrentanalys och nyckelordsoptimering med Semrush och HubSpot.",
  },
  {
    title: "Frontend-utvecklare (Praktik)",
    company: "Junico AB, Stockholm",
    period: "November 2023 – December 2023",
    type: "work",
    description: "Deltog i omdesign av utbildningsplattformen 'Lärform MENTOR' med React.js, HTML, CSS, JavaScript och MongoDB. Skapade interaktiva prototyper i Figma och förbättrade mobilanvändning med 25%.",
    github: "https://github.com/Mats914/LIA-Project-Mentor",
  },
  {
    title: "Frilansande Webbutvecklare",
    company: "Nederländerna",
    period: "Mars 2023 – Oktober 2023",
    type: "work",
    description: "Utvecklade responsiva webbaserade applikationer med Vue.js, TypeScript, HTML, CSS och JavaScript. Implementerade datalagring med SQL och NoSQL.",
  },
  {
    title: "IT-administratör & IT-tekniker",
    company: "Vetlanda & Eksjö kommuner",
    period: "2017 – 2022",
    type: "work",
    description: "Administrerade användarkonton, IT-system och supportärenden. Dokumenterade IT-processer och deltog i inköp och upphandling. Samarbetade med IT-säkerhetsteam för att upprätthålla datasäkerhet.",
  },
  {
    title: "Systemadministratör",
    company: "Alewah Book Store, Syrien",
    period: "Augusti 2013 – Juli 2015",
    type: "work",
    description: "Ansvarade för företagets IT-system och antiviruslösningar. Skötte IT-inventering och säkerställde systemets tillförlitlighet.",
  },
];

const education = [
  {
    title: "Yrkeshögskoleexamen, Fullstack utvecklare (JavaScript)",
    institution: "IT-Högskolan, Stockholm",
    period: "Sep 2022 – Jun 2024",
  },
  {
    title: "Kandidatexamen i juridik",
    institution: "Der Elzor University, Syrien",
    period: "Sep 2009 – Jul 2013",
  },
];

const courses = [
  {
    title: "Pythonprogrammering för AI-utveckling",
    institution: "IT-Högskolan",
    period: "Mar 2025 – Maj 2025",
  },
  {
    title: "Programmering i C",
    institution: "Kristianstad Högskola",
    period: "Sep 2024 – Jan 2025",
  },
  {
    title: "Python & Android apputveckling (Kotlin)",
    institution: "Gävle Högskola",
    period: "Sep 2024 – Jan 2025",
  },
  {
    title: "C# programmering",
    institution: "Luleå tekniska universitet",
    period: "Sep 2024 – Nov 2024",
  },
];

const certifications = [
  {
    name: "Docker Foundations Professional Certificate",
    issuer: "Professional Certificate",
  },
  {
    name: "Google AI Essentials Specialization",
    issuer: "Google, 2025",
    details: "Kurser: Discover the Art of Prompting, Maximize Productivity With AI Tools, Use AI Responsibly, Stay Ahead of the AI Curve, Introduction to AI",
  },
  {
    name: "ServiceNow IT Leadership Professional Certificate",
    issuer: "LinkedIn Learning, oktober 2025",
    details: "Kompetenser: IT Service Management (ITSM), IT Strategic Planning, IT Architecture, Project & Program Management",
  },
  {
    name: "Succeeding as a First-Time Tech Manager",
    issuer: "LinkedIn Learning, oktober 2025",
    details: "Fokusområden: Tech Leadership, Team Management, Communication, Decision-Making",
  },
  {
    name: "Career Essentials in GitHub Professional Certificate",
    issuer: "GitHub och LinkedIn Learning, November 2025",
    details: "Färdigheter: GitHub Actions, Copilot, Projektledning, Kodsökning, Automatisering",
  },
  {
    name: "HubSpot Academy Certifikat",
    issuer: "HubSpot Academy",
    details: "SEO, Digital Marketing, Service Hub, Sales Software, Frictionless Sales",
  },
  {
    name: "Semrush Academy Certifikat",
    issuer: "Semrush Academy",
    details: "Content Strategy, YouTube SEO, Digital Advertising",
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Arbetslivserfarenhet & <span className="gradient-text">Utbildning</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Min professionella resa och kvalifikationer
          </p>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Experience */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Arbetslivserfarenhet</h3>
              </div>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
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
                        <p className="text-sm text-muted-foreground">{exp.company}</p>
                      </div>
                      <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                        {exp.period}
                      </span>
                    </div>
                    {exp.description && (
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        {exp.description}
                      </p>
                    )}
                    {exp.github && (
                      <a
                        href={exp.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs text-primary hover:text-primary/80 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Visa på GitHub
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="space-y-8">
              {/* Education */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Utbildning</h3>
                </div>
                <div className="space-y-4">
                  {education.map((edu, index) => (
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

              {/* Courses */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Kurser</h3>
                </div>
                <div className="space-y-4">
                  {courses.map((course, index) => (
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

              {/* Certifications */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Certifikat</h3>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.9 }}
                  className="card-gradient p-5 rounded-xl border border-border space-y-4"
                >
                  {certifications.map((cert) => (
                    <div key={cert.name} className="border-b border-border last:border-0 pb-3 last:pb-0">
                      <p className="text-sm font-medium text-foreground">{cert.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                      {cert.details && (
                        <p className="text-xs text-muted-foreground/80 mt-1">{cert.details}</p>
                      )}
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
