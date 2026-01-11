import jsPDF from 'jspdf';

export const generateCVPDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  let yPos = margin;
  const lineHeight = 7;
  const sectionSpacing = 10;

  // Helper function to add text with word wrap
  const addText = (text: string, fontSize: number, isBold = false, color: [number, number, number] = [0, 0, 0]) => {
    doc.setFontSize(fontSize);
    doc.setTextColor(color[0], color[1], color[2]);
    if (isBold) {
      doc.setFont(undefined, 'bold');
    } else {
      doc.setFont(undefined, 'normal');
    }
    
    const maxWidth = pageWidth - 2 * margin;
    const lines = doc.splitTextToSize(text, maxWidth);
    
    if (yPos + (lines.length * lineHeight) > pageHeight - margin) {
      doc.addPage();
      yPos = margin;
    }
    
    lines.forEach((line: string) => {
      doc.text(line, margin, yPos);
      yPos += lineHeight;
    });
    
    return yPos;
  };

  // Helper function to add section header
  const addSectionHeader = (text: string) => {
    yPos += sectionSpacing;
    if (yPos > pageHeight - 30) {
      doc.addPage();
      yPos = margin;
    }
    // Using teal color to match portfolio theme (hsl(173 80% 40%))
    addText(text, 16, true, [26, 140, 120]);
    yPos += 3;
  };

  // Header
  addText('Mats Alleji', 24, true, [26, 140, 120]);
  yPos += 2;
  addText('Telefonnummer: +46729297077 | E-postadress: mats.alleji@hotmail.com', 10);
  addText('Adress: Sparres väg 16, 19737 Stockholm | Födelsedatum: 1990 | Körkort: B', 10);
  addText('LinkedIn: https://www.linkedin.com/in/mats-alleji/', 10);
  addText('GitHub: https://github.com/Mats914', 10);
  yPos += sectionSpacing;

  // Sammanfattning
  addSectionHeader('Sammanfattning');
  addText('Nyfiken och resultatinriktad Fullstackutvecklare med erfarenhet av både frontend- och backendprojekt. Specialist på React.js, Node.js, Vue.js och modern webbutveckling. Van att arbeta agilt och leverera högkvalitativa lösningar som förbättrar användarupplevelsen. Söker möjlighet att bidra med teknisk kunskap och kreativ problemlösning i ett innovativt team.', 11);

  // Tekniska färdigheter
  addSectionHeader('Tekniska färdigheter');
  addText('• Webbutveckling: HTML5, CSS3, Flexbox, JavaScript, TypeScript, Vue.js, React.js, Bootstrap, AJAX, WebSockets, Node.js, EJS', 10);
  addText('• Databaser: SQL (PostgreSQL), NoSQL (MongoDB, Firebase)', 10);
  addText('• Verktyg och ramverk: Git, GitHub, Docker, Azure DevOps, Figma, AWS, WordPress, Jest, PowerShell, Linux, CMD', 10);
  addText('• Programmeringsspråk: C#, C, Python, Java, Kotlin, PHP, XML', 10);
  addText('• Metodologier: Agile, UX/UI-design, Scrum, Testning', 10);
  addText('• Apputveckling: Android, React Native', 10);

  // Arbetslivserfarenhet
  addSectionHeader('Arbetslivserfarenhet');
  
  addText('Eget projekt – Dynamisk webbplats med PHP och MySQL', 12, true);
  addText('Februari 2025 – Mars 2025', 10);
  addText('• Byggde en dynamisk och responsiv webbplats med PHP och MySQL.', 10);
  addText('• Implementerade användarregistrering, inloggning, kontaktformulär och datavisning.', 10);
  addText('• Säkerställde säkerhet via prepared statements och validering av inmatning.', 10);
  addText('Länk till GitHub: https://github.com/Mats914/film-bibliotek-PHP', 10);
  yPos += 3;

  addText('SEO Specialist (Praktik) – Sveriges Talare, Stockholm', 12, true);
  addText('Januari 2024 – Maj 2024', 10);
  addText('• Ökade webbplatsens organiska synlighet genom SEO-strategier.', 10);
  addText('• Konkurrentanalys och nyckelordsoptimering med Semrush och HubSpot.', 10);
  yPos += 3;

  addText('Frontend-utvecklare (Praktik) – Junico AB, Stockholm', 12, true);
  addText('November 2023 – December 2023', 10);
  addText('• Deltog i omdesign av utbildningsplattformen "Lärform MENTOR" med React.js, HTML, CSS, JavaScript och MongoDB.', 10);
  addText('• Skapade interaktiva prototyper i Figma och förbättrade mobilanvändning med 25%.', 10);
  addText('Länk till GitHub: https://github.com/Mats914/LIA-Project-Mentor', 10);
  yPos += 3;

  addText('Frilansande Webbutvecklare – Nederländerna', 12, true);
  addText('Mars 2023 – Oktober 2023', 10);
  addText('• Utvecklade responsiva webbaserade applikationer med Vue.js, TypeScript, HTML, CSS och JavaScript.', 10);
  addText('• Implementerade datalagring med SQL och NoSQL.', 10);
  yPos += 3;

  addText('IT-administratör & IT-tekniker – Vetlanda & Eksjö kommuner', 12, true);
  addText('2017 – 2022', 10);
  addText('• Administrerade användarkonton, IT-system och supportärenden.', 10);
  addText('• Dokumenterade IT-processer och deltog i inköp och upphandling.', 10);
  addText('• Samarbetade med IT-säkerhetsteam för att upprätthålla datasäkerhet.', 10);
  yPos += 3;

  addText('Systemadministratör – Alewah Book Store, Syrien', 12, true);
  addText('Augusti 2013 – Juli 2015', 10);
  addText('• Ansvarade för företagets IT-system och antiviruslösningar.', 10);
  addText('• Skötte IT-inventering och säkerställde systemets tillförlitlighet.', 10);

  // Utbildning
  addSectionHeader('Utbildning');
  addText('Yrkeshögskoleexamen, Fullstack utvecklare (JavaScript) – IT-Högskolan, Stockholm', 11, true);
  addText('Sep 2022 – Jun 2024', 10);
  yPos += 3;
  addText('Kandidatexamen i juridik – Der Elzor University, Syrien', 11, true);
  addText('Sep 2009 – Jul 2013', 10);

  // Kurser
  addSectionHeader('Kurser');
  addText('• Pythonprogrammering för AI-utveckling – IT-Högskolan (Mar 2025 – Maj 2025)', 10);
  addText('• Programmering i C – Kristianstad Högskola (Sep 2024 – Jan 2025)', 10);
  addText('• Python & Android apputveckling (Kotlin) – Gävle Högskola (Sep 2024 – Jan 2025)', 10);
  addText('• C# programmering – Luleå tekniska universitet (Sep 2024 – Nov 2024)', 10);

  // Certifikat
  addSectionHeader('Certifikat');
  addText('• Docker Foundations Professional Certificate', 10);
  addText('• HubSpot Academy: SEO, Digital Marketing, Service Hub, Sales Software, Frictionless Sales', 10);
  addText('• Semrush Academy: Content Strategy, YouTube SEO, Digital Advertising', 10);
  addText('• Google AI Essentials Specialization – Google, 2025', 10);
  addText('  Kurser inkluderade: Discover the Art of Prompting, Maximize Productivity With AI Tools, Use AI Responsibly, Stay Ahead of the AI Curve, Introduction to AI', 9);
  yPos += 2;
  addText('• ServiceNow IT Leadership Professional Certificate', 10);
  addText('  Utfärdat av: LinkedIn Learning, oktober 2025', 9);
  addText('  Kompetenser: IT Service Management (ITSM), IT Strategic Planning, IT Architecture, Project & Program Management', 9);
  yPos += 2;
  addText('• Succeeding as a First-Time Tech Manager', 10);
  addText('  Utfärdat av: LinkedIn Learning, oktober 2025', 9);
  addText('  Fokusområden: Tech Leadership, Team Management, Communication, Decision-Making', 9);
  yPos += 2;
  addText('• Career Essentials in GitHub Professional Certificate', 10);
  addText('  Utfärdad av: GitHub och LinkedIn Learning, November 2025', 9);
  addText('  Färdigheter: GitHub Actions, Copilot, Projektledning, Kodsökning, Automatisering', 9);

  // Språk
  addSectionHeader('Språk');
  addText('• Svenska: Flytande', 10);
  addText('• Engelska: Avancerad', 10);

  // Open PDF in new tab instead of downloading
  const pdfBlob = doc.output('blob');
  const pdfUrl = URL.createObjectURL(pdfBlob);
  window.open(pdfUrl, '_blank');
  
  // Clean up the URL after a delay
  setTimeout(() => {
    URL.revokeObjectURL(pdfUrl);
  }, 100);
};

