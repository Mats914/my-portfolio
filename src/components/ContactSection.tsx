import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Linkedin, Github, Globe, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const contactData = [
  { key: "phone" as const, value: "+46 72 929 70 77", href: "tel:+46729297077" },
  { key: "email" as const, value: "mats.alleji@hotmail.com", href: "mailto:mats.alleji@hotmail.com" },
  { key: "address" as const, value: "Sparres väg 16, 19737 Stockholm", href: null },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mats-alleji/" },
  { icon: Github, label: "GitHub", href: "https://github.com/Mats914" },
];

export const ContactSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactTitleParts = t.contact.title.split(" ");
  const titleHighlight = contactTitleParts.pop() || "";
  const titleMain = contactTitleParts.join(" ");

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
            {titleMain} <span className="gradient-text">{titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:col-span-2"
              >
                <div className="card-gradient p-6 rounded-xl border border-border">
                  <h3 className="text-lg font-semibold mb-4">{t.contact.contactInfo}</h3>
                  <div className="space-y-4">
                    {contactData.map((item) => (
                      <div key={item.key} className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          {item.key === "phone" && <Phone className="w-5 h-5 text-primary" />}
                          {item.key === "email" && <Mail className="w-5 h-5 text-primary" />}
                          {item.key === "address" && <MapPin className="w-5 h-5 text-primary" />}
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{t.contact[item.key]}</p>
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

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="card-gradient p-6 rounded-xl border border-border">
                  <h3 className="text-lg font-semibold mb-4">{t.contact.contactMe}</h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300 group min-w-0"
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

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="card-gradient p-6 rounded-xl border border-border">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    {t.contact.languages}
                  </h3>
                  <div className="flex gap-3 sm:gap-4 flex-wrap">
                    {t.contact.langs.map((lang) => (
                      <div
                        key={lang.language}
                        className="flex-1 min-w-[80px] sm:min-w-[100px] text-center p-3 rounded-lg bg-secondary/50"
                      >
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
