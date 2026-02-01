import jsPDF from "jspdf";

export type CVLanguage = "sv" | "en";

const cvContent = {
  sv: {
    summary: "Junior fullstackutvecklare med praktisk erfarenhet av att bygga moderna webbapplikationer med React.js och Node.js. Utvecklat responsiva gränssnitt, byggt backend med Firebase och REST-API:er. Microsoft-certifierad (AZ-900, PL-900, AI-900). Söker junior- eller entry-level-roll.",
    skills: "Webbutveckling: HTML5, CSS3, Tailwind CSS, JavaScript, TypeScript, React.js, Vue.js, Node.js, REST APIs. Databaser: SQL (PostgreSQL), NoSQL (MongoDB), Firebase. Verktyg: Git, GitHub, Docker, Figma, Jest, Postman, Jira. Programmeringsspråk: C#, C, Python, Java, PHP.",
    experience: "Arbetslivserfarenhet",
    educationTitle: "Utbildning",
    coursesTitle: "Kurser",
    certificationsTitle: "Certifikat",
    languages: "Språk",
    languagesList: "Svenska: Modersmål | Engelska: Professionell",
    experiences: [
      {
        title: "SEO Specialist (Praktik) – Sveriges Talare, Stockholm",
        period: "Jan 2024 – Maj 2024",
        bullets: [
          "Förbättrade webbplatsens organiska synlighet genom on-page SEO och teknisk optimering",
          "Konkurrent- och sökordsanalys med Semrush, Google Search Console och HubSpot",
          "Optimerade sidstruktur, metadata och innehåll för bättre ranking",
        ],
      },
      {
        title: "Frontend-utvecklare (Praktik) – Junico AB, Stockholm",
        period: "Nov 2023 – Dec 2023",
        bullets: [
          "UI-komponenter i omdesign av utbildningsplattformen 'Lärform MENTOR' med React.js",
          "Interaktiva prototyper i Figma, responsiv design (+25% mobilupplevelse)",
          "Git/GitHub, kodgranskning via pull requests",
        ],
        github: "https://github.com/Mats914/LIA-Project-Mentor",
      },
      {
        title: "IT-administratör – Vetlanda kommun",
        period: "Juni 2021 – Aug 2022",
        bullets: [
          "IT-support, administration av användarkonton och IT-system",
          "Dokumentation av IT-processer, rapporter till ledningen",
          "Samarbete med IT-säkerhetsteam",
        ],
      },
      {
        title: "IT-tekniker – Eksjö kommun",
        period: "Dec 2017 – Dec 2020",
        bullets: [
          "IT-support och administration av IT-system",
          "Dokumentation av IT-processer, IT-säkerhet",
        ],
      },
      {
        title: "Systemadministratör – Alewah Book Store, Syrien",
        period: "Aug 2013 – Juli 2015",
        bullets: [
          "Underhåll och administration av interna IT-system",
          "Antivirus, säkerhetslösningar, IT-inventering",
        ],
      },
    ],
    education: [
      { title: "Yrkeshögskoleexamen, JavaScript-utvecklare", institution: "IT-Högskolan", period: "Sep 2022 – Jun 2024" },
      { title: "Kandidatexamen i juridik", institution: "Der Elzor University, Syrien", period: "Sep 2009 – Jul 2013" },
    ],
    courses: [
      "Pythonprogrammering för AI-utveckling – IT-Högskolan",
      "Introduktion till programmering och C# – Luleå tekniska universitet",
      "Programmering i C – Högskolan Kristianstad",
      "Introduktion till Python – Högskolan i Gävle",
      "Apputveckling för Android – Högskolan i Gävle",
      "Webbutveckling 1 – NTI-skolan",
    ],
    certs: [
      "Microsoft Certified: Azure AI Fundamentals (AI-900)",
      "Microsoft Certified: Power Platform Fundamentals (PL-900)",
      "Microsoft Certified: Azure Fundamentals (AZ-900)",
      "Docker Foundations Professional Certificate",
      "Career Essentials in GitHub Professional Certificate",
      "Google AI Essentials",
      "HubSpot Academy: SEO, Digital Marketing, Service Hub",
    ],
  },
  en: {
    summary: "Junior full-stack developer with practical experience building modern web applications with React.js and Node.js. Developed responsive interfaces, built backend with Firebase and REST APIs. Microsoft Certified (AZ-900, PL-900, AI-900). Seeking junior or entry-level role.",
    skills: "Web Development: HTML5, CSS3, Tailwind CSS, JavaScript, TypeScript, React.js, Vue.js, Node.js, REST APIs. Databases: SQL (PostgreSQL), NoSQL (MongoDB), Firebase. Tools: Git, GitHub, Docker, Figma, Jest, Postman, Jira. Programming: C#, C, Python, Java, PHP.",
    experience: "Work Experience",
    educationTitle: "Education",
    coursesTitle: "Courses",
    certificationsTitle: "Certifications",
    languages: "Languages",
    languagesList: "Swedish: Native | English: Professional",
    experiences: [
      {
        title: "SEO Specialist (Internship) – Sveriges Talare, Stockholm",
        period: "Jan 2024 – May 2024",
        bullets: [
          "Improved organic visibility through on-page SEO and technical optimization",
          "Competitor and keyword analysis with Semrush, Google Search Console, HubSpot",
          "Optimized page structure, metadata, and content for better rankings",
        ],
      },
      {
        title: "Frontend Developer (Internship) – Junico AB, Stockholm",
        period: "Nov 2023 – Dec 2023",
        bullets: [
          "UI components in redesign of education platform 'Lärform MENTOR' with React.js",
          "Interactive prototypes in Figma, responsive design (+25% mobile experience)",
          "Git/GitHub, code review via pull requests",
        ],
        github: "https://github.com/Mats914/LIA-Project-Mentor",
      },
      {
        title: "IT Administrator – Vetlanda Municipality",
        period: "June 2021 – Aug 2022",
        bullets: [
          "IT support, user account and IT system administration",
          "IT process documentation, reports to management",
          "Collaboration with IT security team",
        ],
      },
      {
        title: "IT Technician – Eksjö Municipality",
        period: "Dec 2017 – Dec 2020",
        bullets: [
          "IT support and administration of IT systems",
          "IT process documentation, IT security",
        ],
      },
      {
        title: "System Administrator – Alewah Book Store, Syria",
        period: "Aug 2013 – July 2015",
        bullets: [
          "Maintenance and administration of internal IT systems",
          "Antivirus, security solutions, IT inventory",
        ],
      },
    ],
    education: [
      { title: "Vocational Degree, JavaScript Developer", institution: "IT-Högskolan", period: "Sep 2022 – Jun 2024" },
      { title: "Bachelor of Law", institution: "Der Elzor University, Syria", period: "Sep 2009 – Jul 2013" },
    ],
    courses: [
      "Python Programming for AI Development – IT-Högskolan",
      "Introduction to Programming and C# – Luleå University of Technology",
      "Programming in C – Kristianstad University",
      "Introduction to Python – University of Gävle",
      "Android App Development – University of Gävle",
      "Web Development 1 – NTI-skolan",
    ],
    certs: [
      "Microsoft Certified: Azure AI Fundamentals (AI-900)",
      "Microsoft Certified: Power Platform Fundamentals (PL-900)",
      "Microsoft Certified: Azure Fundamentals (AZ-900)",
      "Docker Foundations Professional Certificate",
      "Career Essentials in GitHub Professional Certificate",
      "Google AI Essentials",
      "HubSpot Academy: SEO, Digital Marketing, Service Hub",
    ],
  },
};

export const generateCVPDF = (lang: CVLanguage = "sv") => {
  try {
    const doc = new jsPDF();
    const content = cvContent[lang];
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 18;
    let yPos = margin;
    const lineHeight = 6;
    const sectionSpacing = 7;

    const addText = (
      text: string,
      fontSize: number,
      isBold = false,
      color: [number, number, number] = [0, 0, 0]
    ) => {
      doc.setFontSize(fontSize);
      doc.setTextColor(color[0], color[1], color[2]);
      doc.setFont(undefined, isBold ? "bold" : "normal");
      const maxWidth = pageWidth - 2 * margin;
      const lines = doc.splitTextToSize(text, maxWidth);
      lines.forEach((line: string) => {
        if (yPos > pageHeight - margin) {
          doc.addPage();
          yPos = margin;
        }
        doc.text(line, margin, yPos);
        yPos += lineHeight;
      });
    };

    const addLink = (text: string, url: string, fontSize: number, isBold = false) => {
      if (yPos > pageHeight - margin) {
        doc.addPage();
        yPos = margin;
      }
      doc.setFontSize(fontSize);
      doc.setTextColor(26, 140, 120);
      doc.setFont(undefined, isBold ? "bold" : "normal");
      if (typeof doc.textWithLink === "function") {
        doc.textWithLink(text, margin, yPos, { url });
      } else {
        doc.text(text, margin, yPos);
      }
      doc.setTextColor(0, 0, 0);
      yPos += lineHeight;
    };

    const addSectionHeader = (text: string) => {
      yPos += sectionSpacing;
      if (yPos > pageHeight - 30) {
        doc.addPage();
        yPos = margin;
      }
      addText(text, 12, true, [26, 140, 120]);
      yPos += 3;
    };

    // Page 1: Header + Summary + Skills + Experience (part 1)
    addText("Mats Alleji", 22, true, [26, 140, 120]);
    yPos += 2;
    addText("Junior Full-Stack Developer | React.js | Node.js | REST APIs | Microsoft Certified (AZ-900, PL-900, AI-900)", 10);
    addLink("Phone: +46 72 929 70 77", "tel:+46729297077", 10);
    addLink("Email: mats.alleji@hotmail.com", "mailto:mats.alleji@hotmail.com", 10);
    addText("Address: Sparres väg 16, 19737 Stockholm", 9);
    addLink("LinkedIn: linkedin.com/in/mats-alleji", "https://www.linkedin.com/in/mats-alleji", 9);
    addLink("GitHub: github.com/Mats914", "https://github.com/Mats914", 9);
    addLink("Portfolio: matsalleji.cloud", "https://matsalleji.cloud", 9);
    yPos += sectionSpacing;

    addSectionHeader(lang === "sv" ? "Sammanfattning" : "Summary");
    addText(content.summary, 10);
    yPos += 2;

    addSectionHeader(lang === "sv" ? "Tekniska färdigheter" : "Technical Skills");
    addText(content.skills, 10);

    addSectionHeader(content.experience);
    content.experiences.forEach((exp) => {
      addText(exp.title, 11, true);
      addText(exp.period, 9);
      exp.bullets.forEach((b) => addText("• " + b, 10));
      if (exp.github) addLink("GitHub: " + exp.github, exp.github, 9);
      yPos += 2.5;
    });

    // Page 2: Education, Courses, Certifications, Languages
    if (yPos > pageHeight - 80) {
      doc.addPage();
      yPos = margin;
    } else {
      yPos += sectionSpacing;
    }

    addSectionHeader(content.educationTitle);
    content.education.forEach((edu) => {
      addText(edu.title + " – " + edu.institution + " (" + edu.period + ")", 10, true);
      yPos += 2;
    });

    addSectionHeader(content.coursesTitle);
    content.courses.forEach((c) => addText("• " + c, 10));
    yPos += 2;

    addSectionHeader(content.certificationsTitle);
    content.certs.forEach((c) => addText("• " + c, 10));
    yPos += 2;

    addSectionHeader(content.languages);
    addText(content.languagesList, 10);

    const pdfBlob = doc.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);

    // Open PDF in new tab (more reliable than download)
    const newWindow = window.open(pdfUrl, "_blank", "noopener,noreferrer");
    if (!newWindow) {
      // Fallback: open via link if popup blocked
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.click();
    }
    // Revoke URL after delay so new tab can load it
    setTimeout(() => URL.revokeObjectURL(pdfUrl), 5000);
  } catch (err) {
    console.error("CV generation failed:", err);
  }
};
