import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Linkedin, Github, Globe, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefonnummer",
    value: "+46 72 929 70 77",
    href: "tel:+46729297077",
  },
  {
    icon: Mail,
    label: "E-postadress",
    value: "mats.alleji@hotmail.com",
    href: "mailto:mats.alleji@hotmail.com",
  },
  {
    icon: MapPin,
    label: "Adress",
    value: "Sparres väg 16, 19737 Stockholm",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mats-alleji/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Mats914",
  },
];

const languages = [
  { language: "Svenska", level: "Flytande" },
  { language: "Engelska", level: "Avancerad" },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Kontakta <span className="gradient-text">Mig</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Låt oss diskutera ditt nästa projekt eller möjlighet
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info - First position */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:col-span-2"
              >
                <div className="card-gradient p-6 rounded-xl border border-border">
                  <h3 className="text-lg font-semibold mb-4">Kontaktinformation</h3>
                  <div className="space-y-4">
                    {contactInfo.map((item) => (
                      <div key={item.label} className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-foreground hover:text-primary transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-foreground">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Social Links - Second position */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="card-gradient p-6 rounded-xl border border-border">
                  <h3 className="text-lg font-semibold mb-4">Kontakta mig</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300 group"
                      >
                        <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="text-sm font-medium group-hover:text-primary transition-colors">
                          {social.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Languages - Third position */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="card-gradient p-6 rounded-xl border border-border">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    Språk
                  </h3>
                  <div className="flex gap-4">
                    {languages.map((lang) => (
                      <div key={lang.language} className="flex-1 text-center p-3 rounded-lg bg-secondary/50">
                        <p className="font-medium text-foreground">{lang.language}</p>
                        <p className="text-xs text-muted-foreground">{lang.level}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
