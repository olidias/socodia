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
    'header.contact': 'Contact Us',

    'hero.title': '',
    'hero.subtitle': 'Solid Software. Competent Consulting.',

    'entry.teaser': 'Unleash the full potential of your business with our customer-centric consulting services and individualised software!',

    'entry.item-fully-customized.title': 'Fully Customized Solutions',
    'entry.item-fully-customized.description': 'Using modern technologies and creative approaches, we come to the individualized application according to your imagination.',
    
    'entry.item-customer-centricity.title': 'Customer Centricity',
    'entry.item-customer-centricity.description': 'You should be able to determine where your software is heading. We are happy to guide you through the entire process!',

    'entry.item-usability.title': 'Usability Focus',
    'entry.item-usability.description': 'We especially value Usability. Through responsive and engaging applications, we appeal to a wide range of users.',

    'entry.item-quality.title': 'Quality',
    'entry.item-quality.description': 'With selected tools we strive for only the highest quality.',

    'use-cases.title': 'Use Cases',
    'use-cases.subtitle': 'Here to help.',
    

    'use-cases.case1.title': 'Just started?', //TODO rename casing case-1
    'use-cases.case1.description': 'We build your new business website for a successful start to operations!',

    'use-cases.case2.title': 'Your CMS does not offer what you want?',
    'use-cases.case2.description': 'Talk to us and we\'re going to find the best solution to your problem. ',

    'use-cases.case3.title': 'Time for a modernisation?',
    'use-cases.case3.description': 'We work out a new design with your input and implement your portfolio, your wedding page or integrate your webshop.',


    'procedure.title': 'Procedure',
    'procedure.subtitle': 'The way to the optimal solution',

    'procedure.step-1': 'First Touchpoint',
    'procedure.step-1.description': 'You describe your problem and your thoughts and we discuss a suitable solution.',

    'procedure.step-2': 'Analysis & Concept',
    'procedure.step-2.description': 'Based on our first contact we create an analysis and present our concept for your application.',

    'procedure.step-3': 'Iterative Implementation',
    'procedure.step-3.description': 'Now we\'re developing the application based on the evaluated points. You stay involved with recurring exchanges to ensure a successful solution according to your expectations.',

    'procedure.step-4': 'Project Finalisation / Transition to Maintenance Mode',
    'procedure.step-4.description': 'With the successful go-live and with your approval we transition to maintenance mode. Of course we remain at your disposal.',


    'tools.title': 'Tools & Technologies',
    'tools.subtitle': 'These tools help us reach our goals',
    'tools.highlight': 'A brief overview of our preferred tech stack.',

    'tools.frontend': 'Frontend',
    'tools.frontend.description': 'Following technologies are in use for developing the frontend part of our applications:',

    'tools.backend': 'Backend / Databases',
    'tools.backend.description': 'For more complex logic and for the persistence of data we make use of the listed tools.',

    'tools.cms': 'CMS',
    'tools.cms.description': 'There are a number of ways to integrate various CMS with our solutions.',
    
    'reference.title': 'Testimonials',
    'reference.subtitle': 'References',
    'reference.description': 'Check out previous projects.',

    'reference.testimonial.fsma.title': 'Andri Koeferli',
    'reference.testimonial.fsma.subtitle': 'Fitter. Stronger. More Athletic.',
    'reference.testimonial.fmsa.description': 'Oli\'s work was fast, efficient, and personal. He took my individual wishes into account, brought in his own ideas and designed the website even better than I envisioned. I am very satisfied with the result and can definitely recommend him to others.',

    'about.title': 'Who am I?',
    'about.subtitle': 'subtitle',
    'about.highlight': 'About us',
    'about.content': 'With more than 8 years of experience in software development at a number of companies and industries I have been able to gather many valuable insights to the aspects of software engineering and project management.<br /> \
    \ After getting my bachelor\'s degree at university OST in computer science in 2019 I started working at a software consulting company and since 2023, I offer software projects on a smaller scale as a side business.',
    // Projects page keys (EN, no arrays)
    'projects.webapp_roads.highlight1': 'Developed a responsive web application for planning and evaluating maintenance measures for federal roads',
    'projects.webapp_roads.highlight2': 'Built frontend components for data analysis and visualization',
    'projects.webapp_roads.highlight3': 'Designed and implemented backend logic for processing georeferenced data',
    'projects.webapp_roads.highlight4': 'Ensured high software quality through automated testing and CI/CD pipelines',
    'projects.oprisk.highlight1': 'Designed and implemented a platform for managing operational risk controls in the finance sector',
    'projects.oprisk.highlight2': 'Developed both frontend (Angular) and backend (C#/.NET) components',
    'projects.oprisk.highlight3': 'Modeled complex data structures and relationships in MSSQL',
    'projects.oprisk.highlight4': 'Integrated automated testing and DevOps pipelines',
    'projects.oprisk.highlight5': 'Drove continuous improvement and technical optimization',
    'projects.advisory.highlight1': 'Developed a customer advisor portal for a Swiss private bank',
    'projects.advisory.highlight2': 'Implemented the entire web application stack (frontend and backend)',
    'projects.advisory.highlight3': 'Focused on usability and secure data handling',
    'projects.webprojects.highlight1': 'Delivered individualized websites and web solutions for various clients',
    'projects.webprojects.highlight2': 'Experience with modern web frameworks and headless CMS platforms',
    'projects.webprojects.highlight3': 'Adapted solutions to client needs, from simple sites to complex integrations',
    // Add reference to projects page in Who am I section
    'about.projectsLink': 'See selected projects and references',
    'about.projectsLink.de': 'Ausgewählte Projekte und Referenzen ansehen',
    'contact.title': 'Looking forward to hearing from you!',
    'contact.highlight': 'Contact',
    'contact.requestconfirmation': 'Thank you for reaching out, ',
    'contact.confirmationText': 'We will get hold of you as soon as possible.',


    'shared.readmore': 'Read more',

    'projects.title': 'Projects & References',
    'projects.intro': 'Explore selected projects that showcase my expertise in fullstack software development, digital transformation, and people leadership. I deliver robust solutions for business-critical applications, leveraging modern technologies and a customer-focused approach. In addition to my project work, I have experience leading a team of 7 developers as a managerial lead.',
    'projects.cta': 'Looking for a reliable partner for your next software project or digital transformation? Let’s talk!',
    'projects.webapp_roads.title': 'Web Application for Swiss Federal Road Data Management',
    'projects.webapp_roads.period': 'May 2024 – present',
    'projects.webapp_roads.role': 'Fullstack Developer',
    'projects.webapp_roads.tech': 'React, TypeScript, C#, ASP.NET, GIS, Azure DevOps',
    'projects.oprisk.title': 'Application for OpRisk Controls Management',
    'projects.oprisk.period': 'Jan 2022 – Apr 2024',
    'projects.oprisk.role': 'Fullstack Developer',
    'projects.oprisk.tech': 'Angular, TypeScript, ASP.NET, C#, MSSQL, Entity Framework, Azure DevOps',
    'projects.advisory.title': 'Advisory Solution in Banking',
    'projects.advisory.period': 'Jan 2020 – Jan 2022',
    'projects.advisory.role': 'Fullstack Developer',
    'projects.advisory.tech': 'Angular, TypeScript, ASP.NET, C#, MSSQL',
    'projects.webprojects.title': 'Custom Web Projects',
    'projects.webprojects.period': 'Ongoing',
    'projects.webprojects.role': 'Fullstack/Web Developer',
    'projects.webprojects.tech': 'Astro, Wix, DatoCMS, Storyblok, React, TypeScript',
  },
  de: {
    'header.useCases': 'Anwendungsfälle',
    'header.procedure': 'Vorgehen',
    'header.tools': 'Tools & Tech',
    'header.about': 'Über uns',
    'header.contact': 'Kontakt',

    'entry.teaser': 'Entfessle das volle Potential Deines Unternehmens mit unserer kundenorientierten Beratung und massgeschneiderter Software!',

    'entry.item-fully-customized.title': 'Komplett massgeschneiderte Lösungen',
    'entry.item-fully-customized.description': 'Durch moderne Technologien und kreativen Ansätzen kommen wir zur individualisierten Applikation gemäss Deiner Vorstellung. ',

    'entry.item-customer-centricity.title': 'Kundenzentrierung',
    'entry.item-customer-centricity.description': 'Du sollst bestimmen können, wohin es mit deiner Software gehen soll. Wir unterstützen und beraten Dich im gesamten Prozess!',

    'entry.item-usability.title': 'Usability Fokus',
    'entry.item-usability.description': 'Wir legen besonderen Wert auf Usability. Durch responsive und bezaubernde Applikationen sprechen wir eine Vielzahl von Benutzer an.',

    'entry.item-quality.title': 'Qualität',
    'entry.item-quality.description': 'Mit auserwählten Tools streben wir höchste Qualität an.',


    'use-cases.title': 'Anwendungsfälle',
    'use-cases.subtitle': 'Hier, um zu helfen.',

    'use-cases.case1.title': 'Neu gestartet?',
    'use-cases.case1.description': 'Wir helfen mit dem Aufbau deiner neuen Unternehmenswebsite für einen erfolgreichen Start in den Betrieb!',


    'use-cases.case2.title': 'Dein CMS bietet nicht was du dir wünschst?',
    'use-cases.case2.description': 'Sprich mit uns und wir finden gemeinsam die beste Lösung für dein Problem. Viele Wege führen zum Ziel!',

    'use-cases.case3.title': 'Modernisierung gefällig?',
    'use-cases.case3.description': 'Wir erarbeiten mit deinem Input ein neues Design und implementieren dir dein Portfolio, deine Hochzeitspage oder integrieren deinen Webshop.',


    'procedure.title': 'Vorgehen',
    'procedure.subtitle': 'Der Weg zur optimalen Lösung',

    'procedure.step-1': 'Erster Touchpoint',
    'procedure.step-1.description': 'Du beschreibst dein Problem und deine Gedanken und wir diskutieren über eine passende Lösung.',

    'procedure.step-2': 'Analyse & Konzept',
    'procedure.step-2.description': 'Basierend auf unserem Austausch erstellen wir eine Analyse und präsentieren dir das Konzept für deine Applikation.',

    'procedure.step-3': 'Iterative Umsetzung',
    'procedure.step-3.description': 'Nun geht\'s an die Implementation der besprochenen Punkte. Durch regelmässige Abgleiche bleibst du auf dem Laufenden. Zusätzlich stellen wir damit sicher, dass die Lösung deinen Erwartungen entspricht.',

    'procedure.step-4': 'Projektabschluss / Übergang in Maintenance Modus',
    'procedure.step-4.description': 'Mit dem erfolgreichen Go-Live der Applikation und deiner Zustimmung wechseln wir in den Wartungsmodus. Natürlich bleiben wir erreichbar.',


    'tools.title': 'Tools & Technologien',
    'tools.subtitle': 'Mit diesen Werkzeugen kommen wir zum Ziel',
    'tools.highlight': 'Ein kurzer Überblick auf unseren bevorzugten Technologie Stack.',

    'tools.frontend': 'Frontend',
    'tools.frontend.description': 'Folgende Technologien stehen für das Darstellen der Websites im Einsatz:',

    'tools.backend': 'Backend / Datenbanken',
    'tools.backend.description': 'Für komplexere Logik und für die Persistierung von Daten machen wir von den aufgelisteten Tools Gebrauch.',

    'tools.cms': 'CMS',
    'tools.cms.description': 'Verschiedenste Möglichkeiten zur Integration von allerlei Content Management Systemen sind vorhanden.',

    'reference.title': 'Das sagen die Kunden',
    'reference.subtitle': 'Referenzen',
    'reference.description': 'Schau dir die bisherigen Projekte an',

    'reference.testimonial.fsma.title': 'Andri Koeferli',
    'reference.testimonial.fsma.subtitle': 'Fitter. Stronger. More Athletic.',
    'reference.testimonial.fmsa.description': 'Olis Arbeit war schnell, effizient und persönlich. Er ging auf meine individuellen Wünsche ein, brachte eigene Ideen ein und gestaltete die Website noch besser, als ich es mir vorgestellt hatte. Ich bin mit dem Ergebnis sehr zufrieden und kann ihn auf jeden Fall weiterempfehlen.',

    'about.title': 'Wer bin ich?',
    'about.subtitle': 'subtitle',
    'about.highlight': 'Über uns',
    'about.content': 'Mit über 8 Jahre Berufserfahrung im Bereich Software Entwicklung in verschiedenen Branchen und Firmen habe ich schon viele wertvolle Erkenntnisse im Bezug auf verschiedenste Aspekte des Software Engineerings und der Software Projektabwicklung gewonnen. <br />\
  \ Seit meinem Bachelorabschluss in Informatik and der Fachhochschule OST im Jahr 2019 arbeite ich teilzeit bei einem Software Consulting Unternehmen und biete als Nebenerwerb seit 2023 Software Projekte im kleineren Umfang an.',
    // German
    'projects.webapp_roads.highlight1.de': 'Entwicklung einer responsiven Webanwendung zur Planung und Auswertung von Erhaltungsmaßnahmen für Bundesstraßen',
    'projects.webapp_roads.highlight2.de': 'Aufbau von Frontend-Komponenten für Datenanalyse und Visualisierung',
    'projects.webapp_roads.highlight3.de': 'Konzeption und Umsetzung der Backend-Logik für georeferenzierte Daten',
    'projects.webapp_roads.highlight4.de': 'Sicherstellung hoher Softwarequalität durch automatisierte Tests und CI/CD-Pipelines',
    'projects.oprisk.highlight1.de': 'Konzeption und Umsetzung einer Plattform zur Verwaltung operationeller Risiken im Finanzbereich',
    'projects.oprisk.highlight2.de': 'Entwicklung von Frontend- (Angular) und Backend-Komponenten (C#/.NET)',
    'projects.oprisk.highlight3.de': 'Modellierung komplexer Datenstrukturen in MSSQL',
    'projects.oprisk.highlight4.de': 'Integration automatisierter Tests und DevOps-Pipelines',
    'projects.oprisk.highlight5.de': 'Kontinuierliche Verbesserung und technische Optimierung',
    'projects.advisory.highlight1.de': 'Entwicklung eines Kundenberater-Portals für eine Schweizer Privatbank',
    'projects.advisory.highlight2.de': 'Umsetzung der gesamten Webapplikation (Frontend und Backend)',
    'projects.advisory.highlight3.de': 'Fokus auf Usability und sichere Datenverarbeitung',
    'projects.webprojects.highlight1.de': 'Umsetzung individueller Websites und Weblösungen für verschiedene Kunden',
    'projects.webprojects.highlight2.de': 'Erfahrung mit modernen Web-Frameworks und Headless-CMS-Plattformen',
    'projects.webprojects.highlight3.de': 'Anpassung der Lösungen an die jeweiligen Kundenanforderungen – von einfachen Seiten bis zu komplexen Integrationen',
    'contact.title': 'Wir freuen uns von Dir zu hören!',
    'contact.highlight': 'Kontakt',
    'contact.requestconfirmation': 'Vielen Dank für Deine Kontaktanfrage, ',
    'contact.confirmationText': 'Wir werden uns so schnell wie möglich bei Dir melden.',

    'shared.readmore': 'Mehr',

    'projects.title.de': 'Projekte & Referenzen',
    'projects.intro.de': 'Entdecken Sie ausgewählte Projekte, die meine Erfahrung in der Fullstack-Softwareentwicklung, digitalen Transformation und Mitarbeiterführung zeigen. Ich liefere robuste Lösungen für geschäftskritische Anwendungen – mit modernen Technologien und kundenorientiertem Ansatz. Neben meiner Projektarbeit habe ich als Führungskraft ein Team von 7 Entwicklern geleitet.',
    'projects.cta.de': 'Suchen Sie einen zuverlässigen Partner für Ihr nächstes Softwareprojekt oder Ihre digitale Transformation? Kontaktieren Sie mich!',
    'projects.webapp_roads.title.de': 'Webanwendung für Schweizer Bundesstraßenverwaltung',
    'projects.webapp_roads.period.de': '05/2024 – heute',
    'projects.webapp_roads.role.de': 'Fullstack Entwickler',
    'projects.webapp_roads.tech.de': 'React, TypeScript, C#, ASP.NET, GIS, Azure DevOps',
    'projects.oprisk.title.de': 'Anwendung zur Erfassung von OpRisk-Kontrollen',
    'projects.oprisk.period.de': '01/2022 – 04/2024',
    'projects.oprisk.role.de': 'Fullstack Entwickler',
    'projects.oprisk.tech.de': 'Angular, TypeScript, ASP.NET, C#, MSSQL, Entity Framework, Azure DevOps',
    'projects.advisory.title.de': 'Advisory-Lösung im Bankwesen',
    'projects.advisory.period.de': '01/2020 – 01/2022',
    'projects.advisory.role.de': 'Fullstack Entwickler',
    'projects.advisory.tech.de': 'Angular, TypeScript, ASP.NET, C#, MSSQL',
    'projects.webprojects.title.de': 'Individuelle Webprojekte',
    'projects.webprojects.period.de': 'Laufend',
    'projects.webprojects.role.de': 'Fullstack/Web Entwickler',
    'projects.webprojects.tech.de': 'Astro, Wix, DatoCMS, Storyblok, React, TypeScript'}
  } as const;
