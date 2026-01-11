import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Briefcase, Code2, Users } from "lucide-react";

const highlights = [
  { icon: Code2, text: "Nyfiken & Resultatinriktad" },
  { icon: Users, text: "Agil Teamspelare" },
  { icon: MapPin, text: "Baserad i Stockholm" },
  { icon: Briefcase, text: "Öppen för möjligheter" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Om <span className="gradient-text">Mig</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Lär dig känna mig bättre
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-foreground/90 leading-relaxed">
                Jag är en <strong className="text-primary">nyfiken och resultatinriktad Fullstackutvecklare</strong> med 
                erfarenhet av både frontend- och backendprojekt. Specialist på React.js, Node.js, Vue.js och modern webbutveckling.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Van att arbeta agilt och leverera högkvalitativa lösningar som förbättrar användarupplevelsen. 
                Min approach kombinerar teknisk excellens med ett agilt mindset, vilket säkerställer att jag levererar 
                värde genom effektivt teamarbete.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Baserad i Stockholm, Sverige, söker jag möjlighet att bidra med teknisk kunskap och kreativ problemlösning 
                i ett innovativt team. Öppen för heltidsanställningar, konsultuppdrag och projektmöjligheter.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="card-gradient p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 group"
                >
                  <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium text-foreground">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
