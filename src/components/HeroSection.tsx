import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { generateCVPDF } from "@/lib/generateCV";

export const HeroSection = () => {
  const { t } = useLanguage();

  const handleDownloadCV = (lang: "sv" | "en") => {
    generateCVPDF(lang);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-x-hidden py-20 md:py-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(173_80%_40%_/_0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(hsl(217_33%_17%_/_0.3)_1px,_transparent_1px),_linear-gradient(90deg,_hsl(217_33%_17%_/_0.3)_1px,_transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,_black_20%,_transparent_70%)]" />

      <div className="section-container relative z-10 w-full max-w-full">
        <div className="max-w-4xl mx-auto text-center w-full px-2 sm:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {t.hero.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 break-words"
          >
            {t.hero.greeting} <span className="gradient-text">Mats Alleji</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-4 break-words"
          >
            {t.hero.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-base md:text-lg text-primary/90 mb-2 font-medium"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground/80 mb-10 max-w-2xl mx-auto break-words"
          >
            {t.hero.description}{" "}
            <span className="text-foreground/90 font-medium">{t.hero.ctaExplore}</span> 👇
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto"
          >
            <Button size="lg" asChild className="group">
              <a href="#projects">
                {t.hero.viewProjects}
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                type="button"
                size="lg"
                variant="outline"
                className="gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleDownloadCV("sv");
                }}
              >
                <Download className="w-4 h-4" />
                {t.cv.downloadSv}
              </Button>
              <Button
                type="button"
                size="lg"
                variant="outline"
                className="gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleDownloadCV("en");
                }}
              >
                <Download className="w-4 h-4" />
                {t.cv.downloadEn}
              </Button>
            </div>
            <Button size="lg" variant="secondary" asChild>
              <a href="#contact">
                <Mail className="mr-2 w-4 h-4" />
                {t.hero.contactMe}
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm">{t.hero.scrollDown}</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
