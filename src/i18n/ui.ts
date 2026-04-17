export const languages = [
  {
    key: 'en',
    label: 'English',
    icon: 'emojione:flag-for-united-kingdom',
  },
  {
    key: 'de',
    label: 'Deutsch',
    icon: 'emojione:flag-for-switzerland',
  },
];

// export const defaultLang = languages.find(l => l.key === 'en');
export const defaultLang = 'en';

export const ui = {
  en: {
    'header.useCases': 'Use Cases',
    'header.procedure': 'Procedure',
    'header.tools': 'Tools & Tech',
    'header.about': 'About',
    'header.contact': 'Contact',

    'hero.title': '',
    'hero.subtitle': 'Solid Software. Competent Consulting.',

    'entry.teaser': 'From concept to production — fullstack development and consulting with senior-level ownership.',

    'entry.item-fully-customized.title': 'Fully Customized Solutions',
    'entry.item-fully-customized.description': 'Using modern technologies and creative approaches, I personally architect and build applications tailored to your vision.',

    'entry.item-customer-centricity.title': 'Direct Collaboration',
    'entry.item-customer-centricity.description': 'No middlemen, no relay — the person you talk to is the person writing the code. I guide you through the entire process.',

    'entry.item-usability.title': 'Usability Focus',
    'entry.item-usability.description': 'I place special value on usability. Through responsive and engaging applications, I create experiences that appeal to a wide range of users.',

    'entry.item-quality.title': 'Quality',
    'entry.item-quality.description': 'Thorough testing, CI/CD pipelines, and code reviews are part of every project. I strive for only the highest quality.',

    'use-cases.title': 'Use Cases',
    'use-cases.subtitle': 'Here to help.',


    'use-cases.case1.title': 'Enterprise Applications',
    'use-cases.case1.description': 'Need a fullstack developer who can integrate into your team and deliver on complex, business-critical software? I bring years of experience in banking, government, and cross-industry projects.',

    'use-cases.case2.title': 'Leadership',
    'use-cases.case2.description': 'Looking for someone who can lead a sub-project, onboard juniors, or facilitate team processes? I\'ve managed teams of 7 and led initiatives within large organizations.',

    'use-cases.case3.title': 'Web Development & Digital Presence',
    'use-cases.case3.description': 'From corporate websites to custom web applications — I deliver modern, performant solutions using React, Astro, and headless CMS platforms.',


    'procedure.title': 'Procedure',
    'procedure.subtitle': 'The way to the optimal solution',

    'procedure.step-1': 'First Touchpoint',
    'procedure.step-1.description': 'You describe your problem and your thoughts and together we discuss a suitable solution.',

    'procedure.step-2': 'Analysis & Concept',
    'procedure.step-2.description': 'Based on the initial exchange I create an analysis and present a concept for your application.',

    'procedure.step-3': 'Iterative Implementation',
    'procedure.step-3.description': 'Now I develop the application based on the evaluated points. You stay involved with recurring exchanges to ensure a successful solution according to your expectations.',

    'procedure.step-4': 'Project Finalisation / Transition to Maintenance Mode',
    'procedure.step-4.description': 'With the successful go-live and with your approval the project transitions to maintenance mode. Of course I remain at your disposal.',


    'tools.title': 'Tools & Technologies',
    'tools.subtitle': 'These tools help me reach the goals',
    'tools.highlight': 'A brief overview of the preferred tech stack.',

    'tools.frontend': 'Frontend',
    'tools.frontend.description': 'Following technologies are in use for developing the frontend part of applications:',

    'tools.backend': 'Backend / Databases',
    'tools.backend.description': 'For more complex logic and for the persistence of data I make use of the listed tools.',

    'tools.cms': 'CMS',
    'tools.cms.description': 'There are a number of ways to integrate various CMS into the solutions.',

    'reference.title': 'Testimonials',
    'reference.subtitle': 'References',
    'reference.description': 'Check out previous projects.',

    'reference.testimonial.fsma.title': 'Andri Koeferli',
    'reference.testimonial.fsma.subtitle': 'Fitter. Stronger. More Athletic.',
    'reference.testimonial.fmsa.description': 'Oli\'s work was fast, efficient, and personal. He took my individual wishes into account, brought in his own ideas and designed the website even better than I envisioned. I am very satisfied with the result and can definitely recommend him to others.',

    'reference.testimonial.mentalk.title': 'Cameron McNiff',
    'reference.testimonial.mentalk.subtitle': 'President, MenTalk',
    'reference.testimonial.mentalk.description': 'Oli showed a great deal of initiative during the implementation of the website and took full responsibility for delivering a solid and appealing solution. It was a pleasure working with him and I can recommend anyone to benefit from Oli\'s high-quality work.',

    'about.title': 'Who am I?',
    'about.subtitle': 'subtitle',
    'about.highlight': 'About',
    'about.content': 'With over 8 years of professional experience in software development across industries like banking, government, and digital services, I bring a rare combination of technical depth and leadership ability.<br /><br />As a line manager, I led a team of 7 developers — conducting appraisals, facilitating salary conversations, resolving conflicts, and ensuring knowledge flow through regular team meetings. On the technical side, I\'ve delivered fullstack solutions in teams ranging from 2 to 11 people, always with a focus on quality, testing, and clean architecture.<br /><br />Since earning my bachelor\'s degree in computer science from university OST in 2019, I\'ve worked at a software consulting company while building my own freelance practice since 2023 — offering everything from enterprise application development to modern websites.',

    'projects.webapp_roads.highlight1': 'Drove and maintained the project as part of a two-person team with full ownership',
    'projects.webapp_roads.highlight2': 'Fullstack development with .NET, Web Forms, React, Oracle, ArcGIS, and Selenium',
    'projects.webapp_roads.highlight3': 'Reduced technical debt while developing change requests to extend the feature range',
    'projects.webapp_roads.highlight4': 'Took on infrastructure responsibilities and ensured quality through automated testing and CI/CD',
    'projects.oprisk.highlight1': 'Part of a large scrum team (up to 11 people) building an operational risk management platform',
    'projects.oprisk.highlight2': 'Fullstack development with .NET 8, Angular, MSSQL, Cypress, TeamCity, and Octopus',
    'projects.oprisk.highlight3': 'Comprehensive testing strategy: unit, integration, and E2E tests',
    'projects.oprisk.highlight4': 'Led sub-projects and drove continuous technical improvement',
    'projects.oprisk.highlight5': 'Onboarded and mentored interns including dedicated know-how transfer sessions',
    'projects.advisory.highlight1': 'Part of a SAFe team responsible for customer portfolio overview and proposal management',
    'projects.advisory.highlight2': 'Fullstack development with .NET, Angular, MSSQL, Jenkins, and Octopus',
    'projects.advisory.highlight3': 'Executed database migrations across different CRM systems',
    'projects.advisory.highlight4': 'Drove internal initiatives including keyboard navigation and education environments',
    'projects.webprojects.highlight1': 'Delivered individualized websites and web solutions for various clients',
    'projects.webprojects.highlight2': 'Experience with modern web frameworks and headless CMS platforms',
    'projects.webprojects.highlight3': 'Adapted solutions to client needs, from simple sites to complex integrations',

    'projects.archreview.title': 'Architecture Review — ERP-to-DWH Integration',
    'projects.archreview.period': '2023',
    'projects.archreview.role': 'Software Architect',
    'projects.archreview.tech': 'Python, ETL, Data Warehousing',
    'projects.archreview.highlight1': 'Reviewed and evaluated the architecture of an internal Python ERP application',
    'projects.archreview.highlight2': 'Assessed the data pipeline exporting from ERP to a data warehouse',
    'projects.archreview.highlight3': 'Provided actionable recommendations for improving reliability and maintainability',

    'about.projectsLink': 'See selected projects and references',

    'contact.title': 'Looking forward to hearing from you!',
    'contact.highlight': 'Contact',
    'contact.requestconfirmation': 'Thank you for reaching out, ',
    'contact.confirmationText': 'I will get back to you as soon as possible.',


    'shared.readmore': 'Read more',

    'projects.title': 'Projects & References',
    'projects.intro': 'A selection of projects showcasing my expertise in fullstack software development, technical leadership, and web development. I deliver robust solutions for business-critical applications — with personal ownership, modern technologies, and a customer-focused approach.',
    'projects.leadership': 'As a line manager, I led a team of 7 developers — conducting appraisals, facilitating salary conversations, resolving conflicts, and ensuring knowledge flow through regular team meetings.',
    'projects.cta': 'Looking for a reliable partner for your next software project or digital transformation?',
    'projects.ctaButton': 'Get in touch',
    'projects.webapp_roads.title': 'Road Construction Planning & Road Condition Application',
    'projects.webapp_roads.period': 'May 2024 – present',
    'projects.webapp_roads.role': 'Fullstack Developer',
    'projects.webapp_roads.tech': 'React, .NET, Web Forms, Oracle, ArcGIS, Selenium, Azure DevOps',
    'projects.oprisk.title': 'OpRisk Controls Management Platform',
    'projects.oprisk.period': 'Jan 2022 – Apr 2024',
    'projects.oprisk.role': 'Fullstack Developer',
    'projects.oprisk.tech': '.NET 8, Angular, TypeScript, MSSQL, Cypress, TeamCity, Octopus',
    'projects.advisory.title': 'Advisory Solution for a Swiss Private Bank',
    'projects.advisory.period': 'Jan 2020 – Jan 2022',
    'projects.advisory.role': 'Fullstack Developer',
    'projects.advisory.tech': '.NET, Angular, TypeScript, MSSQL, Jenkins, Octopus',
    'projects.webprojects.title': 'Custom Web Projects',
    'projects.webprojects.period': 'Ongoing',
    'projects.webprojects.role': 'Fullstack/Web Developer',
    'projects.webprojects.tech': 'Astro, Wix, DatoCMS, Storyblok, React, TypeScript',
  },
  de: {
    'header.useCases': 'Anwendungsfälle',
    'header.procedure': 'Vorgehen',
    'header.tools': 'Tools & Tech',
    'header.about': 'Über mich',
    'header.contact': 'Kontakt',

    'entry.teaser': 'Vom Konzept bis zur Produktion — Fullstack-Entwicklung und Beratung mit Senior-Level Verantwortung.',

    'entry.item-fully-customized.title': 'Komplett massgeschneiderte Lösungen',
    'entry.item-fully-customized.description': 'Durch moderne Technologien und kreative Ansätze entwerfe und entwickle ich persönlich Applikationen gemäss Deiner Vorstellung.',

    'entry.item-customer-centricity.title': 'Direkte Zusammenarbeit',
    'entry.item-customer-centricity.description': 'Kein Mittelsmann, kein Umweg — die Person, mit der Du sprichst, schreibt auch den Code. Ich begleite Dich durch den gesamten Prozess.',

    'entry.item-usability.title': 'Usability Fokus',
    'entry.item-usability.description': 'Ich lege besonderen Wert auf Usability. Durch responsive und ansprechende Applikationen entstehen Erlebnisse, die für eine Vielzahl von Benutzern funktionieren.',

    'entry.item-quality.title': 'Qualität',
    'entry.item-quality.description': 'Gründliches Testing, CI/CD-Pipelines und Code Reviews sind Teil jedes Projekts. Ich strebe nur höchste Qualität an.',


    'use-cases.title': 'Anwendungsfälle',
    'use-cases.subtitle': 'Hier, um zu helfen.',

    'use-cases.case1.title': 'Enterprise-Applikationen',
    'use-cases.case1.description': 'Du brauchst einen Fullstack-Entwickler, der sich nahtlos in Dein Team integriert und komplexe, geschäftskritische Software liefert? Ich bringe jahrelange Erfahrung in den Bereichen Bankwesen, öffentliche Verwaltung und branchenübergreifenden Projekten mit.',

    'use-cases.case2.title': 'Leadership',
    'use-cases.case2.description': 'Auf der Suche nach jemandem, der ein Teilprojekt leiten, Juniors einarbeiten oder Teamprozesse moderieren kann? Ich habe Teams von 7 Personen geführt und Initiativen in grossen Organisationen vorangetrieben.',

    'use-cases.case3.title': 'Webentwicklung & digitale Präsenz',
    'use-cases.case3.description': 'Von Unternehmenswebsites bis zu massgeschneiderten Webapplikationen — ich liefere moderne, performante Lösungen mit React, Astro und Headless-CMS-Plattformen.',


    'procedure.title': 'Vorgehen',
    'procedure.subtitle': 'Der Weg zur optimalen Lösung',

    'procedure.step-1': 'Erster Touchpoint',
    'procedure.step-1.description': 'Du beschreibst Dein Problem und Deine Gedanken und gemeinsam diskutieren wir über eine passende Lösung.',

    'procedure.step-2': 'Analyse & Konzept',
    'procedure.step-2.description': 'Basierend auf dem Austausch erstelle ich eine Analyse und präsentiere Dir das Konzept für Deine Applikation.',

    'procedure.step-3': 'Iterative Umsetzung',
    'procedure.step-3.description': 'Nun geht\'s an die Implementation der besprochenen Punkte. Durch regelmässige Abgleiche bleibst Du auf dem Laufenden. Zusätzlich stelle ich damit sicher, dass die Lösung Deinen Erwartungen entspricht.',

    'procedure.step-4': 'Projektabschluss / Übergang in Maintenance Modus',
    'procedure.step-4.description': 'Mit dem erfolgreichen Go-Live der Applikation und Deiner Zustimmung wechselt das Projekt in den Wartungsmodus. Natürlich bleibe ich erreichbar.',


    'tools.title': 'Tools & Technologien',
    'tools.subtitle': 'Mit diesen Werkzeugen komme ich zum Ziel',
    'tools.highlight': 'Ein kurzer Überblick auf den bevorzugten Technologie Stack.',

    'tools.frontend': 'Frontend',
    'tools.frontend.description': 'Folgende Technologien stehen für das Darstellen der Websites im Einsatz:',

    'tools.backend': 'Backend / Datenbanken',
    'tools.backend.description': 'Für komplexere Logik und für die Persistierung von Daten mache ich von den aufgelisteten Tools Gebrauch.',

    'tools.cms': 'CMS',
    'tools.cms.description': 'Verschiedenste Möglichkeiten zur Integration von allerlei Content Management Systemen sind vorhanden.',

    'reference.title': 'Das sagen die Kunden',
    'reference.subtitle': 'Referenzen',
    'reference.description': 'Schau Dir die bisherigen Projekte an',

    'reference.testimonial.fsma.title': 'Andri Koeferli',
    'reference.testimonial.fsma.subtitle': 'Fitter. Stronger. More Athletic.',
    'reference.testimonial.fmsa.description': 'Olis Arbeit war schnell, effizient und persönlich. Er ging auf meine individuellen Wünsche ein, brachte eigene Ideen ein und gestaltete die Website noch besser, als ich es mir vorgestellt hatte. Ich bin mit dem Ergebnis sehr zufrieden und kann ihn auf jeden Fall weiterempfehlen.',

    'reference.testimonial.mentalk.title': 'Cameron McNiff',
    'reference.testimonial.mentalk.subtitle': 'Vereinspräsident, MenTalk',
    'reference.testimonial.mentalk.description': 'Oli zeigte während der Umsetzung der Website sehr viel Eigeninitative und übernahm die komplette Verantwortung dafür, dass eine solide und ansprechende Lösung umgesetzt wurde. Es war mir ein Vergnügen mit ihm zusammenzuarbeiten und kann jedem empfehlen, von Oli\'s qualitativ hochwertiger Arbeit provitieren zu können.',

    'about.title': 'Wer bin ich?',
    'about.subtitle': 'subtitle',
    'about.highlight': 'Über mich',
    'about.content': 'Mit über 8 Jahren Berufserfahrung in der Softwareentwicklung in Branchen wie Bankwesen, öffentliche Verwaltung und digitale Dienstleistungen bringe ich eine seltene Kombination aus technischer Tiefe und Führungskompetenz mit.<br /><br />Als Linienvorgesetzter habe ich ein Team von 7 Entwicklern geführt — Mitarbeitergespräche und Lohnverhandlungen durchgeführt, bei Konflikten unterstützt und durch regelmässige Teammeetings den Informationsfluss sichergestellt. Auf der technischen Seite habe ich Fullstack-Lösungen in Teams von 2 bis 11 Personen geliefert, stets mit Fokus auf Qualität, Testing und saubere Architektur.<br /><br />Seit meinem Bachelorabschluss in Informatik an der Fachhochschule OST im Jahr 2019 arbeite ich bei einem Software-Consulting-Unternehmen und baue seit 2023 meine eigene Freelance-Tätigkeit auf — von Enterprise-Applikationen bis hin zu modernen Websites.',

    'about.projectsLink': 'Ausgewählte Projekte und Referenzen ansehen',

    'contact.title': 'Ich freue mich von Dir zu hören!',
    'contact.highlight': 'Kontakt',
    'contact.requestconfirmation': 'Vielen Dank für Deine Kontaktanfrage, ',
    'contact.confirmationText': 'Ich werde mich so schnell wie möglich bei Dir melden.',

    'shared.readmore': 'Mehr',

    'projects.title': 'Projekte & Referenzen',
    'projects.intro': 'Eine Auswahl an Projekten, die meine Erfahrung in der Fullstack-Softwareentwicklung, technischen Führung und Webentwicklung zeigen. Ich liefere robuste Lösungen für geschäftskritische Anwendungen — mit persönlicher Verantwortung, modernen Technologien und kundenorientiertem Ansatz.',
    'projects.leadership': 'Als Linienvorgesetzter habe ich ein Team von 7 Entwicklern geführt — Mitarbeitergespräche und Lohnverhandlungen durchgeführt, bei Konflikten unterstützt und durch regelmässige Teammeetings den Informationsfluss sichergestellt.',
    'projects.cta': 'Auf der Suche nach einem zuverlässigen Partner für Ihr nächstes Softwareprojekt oder Ihre digitale Transformation?',
    'projects.ctaButton': 'Kontakt aufnehmen',
    'projects.webapp_roads.title': 'Strassenbauplanung & Strassenzustandsanwendung',
    'projects.webapp_roads.period': '05/2024 – heute',
    'projects.webapp_roads.role': 'Fullstack Entwickler',
    'projects.webapp_roads.tech': 'React, .NET, Web Forms, Oracle, ArcGIS, Selenium, Azure DevOps',
    'projects.webapp_roads.highlight1': 'Verantwortung und Wartung des Projekts als Teil eines Zweierteams',
    'projects.webapp_roads.highlight2': 'Fullstack-Entwicklung mit .NET, Web Forms, React, Oracle, ArcGIS und Selenium',
    'projects.webapp_roads.highlight3': 'Reduktion technischer Schulden bei gleichzeitiger Entwicklung von Change Requests zur Erweiterung des Funktionsumfangs',
    'projects.webapp_roads.highlight4': 'Infrastrukturverantwortung und Qualitätssicherung durch automatisierte Tests und CI/CD',
    'projects.oprisk.title': 'OpRisk-Kontrollmanagement-Plattform',
    'projects.oprisk.period': '01/2022 – 04/2024',
    'projects.oprisk.role': 'Fullstack Entwickler',
    'projects.oprisk.tech': '.NET 8, Angular, TypeScript, MSSQL, Cypress, TeamCity, Octopus',
    'projects.oprisk.highlight1': 'Teil eines grossen Scrum-Teams (bis zu 11 Personen) für eine Plattform zur Verwaltung operationeller Risiken',
    'projects.oprisk.highlight2': 'Fullstack-Entwicklung mit .NET 8, Angular, MSSQL, Cypress, TeamCity und Octopus',
    'projects.oprisk.highlight3': 'Umfassende Teststrategie: Unit-, Integrations- und E2E-Tests',
    'projects.oprisk.highlight4': 'Leitung von Teilprojekten und kontinuierliche technische Verbesserung',
    'projects.oprisk.highlight5': 'Einarbeitung und Betreuung von Praktikanten inkl. dedizierter Know-how-Transfer-Sessions',
    'projects.advisory.title': 'Advisory-Lösung für eine Schweizer Privatbank',
    'projects.advisory.period': '01/2020 – 01/2022',
    'projects.advisory.role': 'Fullstack Entwickler',
    'projects.advisory.tech': '.NET, Angular, TypeScript, MSSQL, Jenkins, Octopus',
    'projects.advisory.highlight1': 'Teil eines SAFe-Teams verantwortlich für Kundenportfolio-Übersicht und Angebotsmanagement',
    'projects.advisory.highlight2': 'Fullstack-Entwicklung mit .NET, Angular, MSSQL, Jenkins und Octopus',
    'projects.advisory.highlight3': 'Datenbankmigrationen verschiedener CRM-Systeme',
    'projects.advisory.highlight4': 'Vorantreiben interner Initiativen wie Tastaturnavigation und Schulungsumgebungen',
    'projects.webprojects.title': 'Individuelle Webprojekte',
    'projects.webprojects.period': 'Laufend',
    'projects.webprojects.role': 'Fullstack/Web Entwickler',
    'projects.webprojects.tech': 'Astro, Wix, DatoCMS, Storyblok, React, TypeScript',
    'projects.webprojects.highlight1': 'Umsetzung individueller Websites und Weblösungen für verschiedene Kunden',
    'projects.webprojects.highlight2': 'Erfahrung mit modernen Web-Frameworks und Headless-CMS-Plattformen',
    'projects.webprojects.highlight3': 'Anpassung der Lösungen an die jeweiligen Kundenanforderungen — von einfachen Seiten bis zu komplexen Integrationen',

    'projects.archreview.title': 'Architektur-Review — ERP-zu-DWH-Integration',
    'projects.archreview.period': '2023',
    'projects.archreview.role': 'Software Architekt',
    'projects.archreview.tech': 'Python, ETL, Data Warehousing',
    'projects.archreview.highlight1': 'Review und Bewertung der Architektur einer internen Python-ERP-Anwendung',
    'projects.archreview.highlight2': 'Analyse der Datenpipeline vom ERP zum Data Warehouse',
    'projects.archreview.highlight3': 'Erarbeitung konkreter Empfehlungen zur Verbesserung von Zuverlässigkeit und Wartbarkeit',
  }
} as const;
