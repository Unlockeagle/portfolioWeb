export const languageList = {
    'es': 'Español',
    'it': "Italiano",
    'en': "English"
}

export const labels = {
    es: {
        'nav.home': 'Inicio',
        'nav.projects': 'Proyectos',
        'nav.about': 'Sobre mi',
        'nav.education': 'Educación',
        'home.description': 'Soy un desarrollador web me encanta crear experiencias digitales sólidas y atractivas.',
        'home.about': 'Trabajo con tecnologías como JavaScrip, ReactJs, Node.js, ExpressJS, MongoDB, Html, CSS, y CMSs como Wordpress, PrestaShop y Joomla, para construir aplicaciones con interfaces modernas y sistemas backend eficientes. Me gusta combinar código limpio con diseño funcional.'
    },
    it: {
        'nav.home': 'Home',
        'nav.projects': 'Progetti',
        'nav.about': 'Chi sono',
        'nav.education': 'Istruzione',
        'home.description': 'Sono uno sviluppatore web e adoro creare esperienze digitali solide e coinvolgenti.',
        'home.about': 'Utilizzo tecnologie come JavaScript, ReactJS, Node.js, ExpressJS, MongoDB, HTML, CSS e CMS come WordPress, PrestaShop e Joomla per creare applicazioni con interfacce moderne e sistemi backend efficienti. Mi piace combinare codice pulito e design funzionale.'
    },
    en: {
        'nav.home': 'Home',
        'nav.projects': 'Projects',
        'nav.about': 'About me',
        'nav.education': 'Education',
        'home.description': 'I am a web developer and I love creating solid and engaging digital experiences.',
        'home.about': 'I work with technologies such as JavaScript, ReactJS, Node.js, ExpressJS, MongoDB, HTML, CSS, and CMSs like WordPress, PrestaShop, and Joomla to build applications with modern interfaces and efficient backend systems. I enjoy combining clean code with functional design.'
    }
}

export const projectTranslations: Record<string, Record<string, { title: string; description: string }>> = {
    'project-1': {
        es: { title: 'React E-commerce', description: 'Desarrollado implementando servicios de Google para la base de datos.' },
        en: { title: 'React E-commerce', description: 'Developed using Google Firebase services for the database.' },
        it: { title: 'React E-commerce', description: 'Sviluppato implementando i servizi Google Firebase per il database.' },
    },
    'project-2': {
        es: { title: 'Sistema de inventarios', description: 'Desarrollado con JavaScript vanilla y localStorage.' },
        en: { title: 'Inventory System', description: 'Built with vanilla JavaScript and localStorage.' },
        it: { title: 'Sistema di inventario', description: 'Sviluppato con JavaScript vanilla e localStorage.' },
    },
    'project-3': {
        es: { title: 'API E-commerce', description: 'API funcional para un E-commerce con login de usuario utilizando Express y MongoDB.' },
        en: { title: 'E-commerce API', description: 'Functional REST API for an E-commerce with user authentication using Express and MongoDB.' },
        it: { title: 'API E-commerce', description: 'API REST funzionale per un E-commerce con autenticazione utente usando Express e MongoDB.' },
    },
    'project-4': {
        es: { title: 'Web Menu-Raíces', description: 'Web sencilla para un menú de restaurante de comida latina, desarrollada con HTML, Sass y Bootstrap.' },
        en: { title: 'Web Menu-Raíces', description: 'Simple website for a Latin food restaurant menu, built with HTML, Sass and Bootstrap.' },
        it: { title: 'Web Menu-Raíces', description: 'Sito web semplice per un menu di un ristorante di cucina latina, sviluppato con HTML, Sass e Bootstrap.' },
    },
    'project-5': {
        es: { title: 'CatirePremia', description: 'Web app para venta de tickets de lotería con panel administrativo para gestionar órdenes y enviar detalles por email.' },
        en: { title: 'CatirePremia', description: 'Web app for lottery ticket sales with an admin panel to manage orders and send ticket details by email.' },
        it: { title: 'CatirePremia', description: 'Web app per la vendita di biglietti della lotteria con pannello admin per gestire gli ordini e inviare i dettagli via email.' },
    },
}

export type EducationCourse = {
    title: string;
    items: string[];
}

export const educationData: Record<string, EducationCourse[]> = {
    es: [
        {
            title: 'TypeScript - Fernando Herrera (Udemy)',
            items: [
                'Tipos básicos',
                'Funciones y objetos',
                'Objetos y tipos personalizados en TypeScript',
                'Depuración de errores y el archivo tsconfig.json',
                'Características de ES6 disponibles en TypeScript',
                'Clases en TypeScript',
                'Interfaces',
                'NameSpaces',
                'Genéricos (Generics)',
                'Decoradores',
                'Usar librerías que no están escritas en TypeScript',
            ],
        },
        {
            title: 'Programación Backend III: Testing y Escalabilidad - CoderHouse',
            items: [
                'Realizar pruebas y monitoreo de aplicaciones REST.',
                'Implementar estrategias de optimización, incluyendo normalización, Gzip y manejo de logs.',
                'Manejar la gestión de versiones y paquetes en entornos Node.js.',
                'Configurar y asegurar aplicaciones, enfocándote en la seguridad del backend.',
                'Desarrollar pruebas unitarias y pruebas avanzadas de funcionalidades.',
                'Utilizar y comprender el funcionamiento de Clusters para la escalabilidad.',
                'Aplicar prácticas de desarrollo con frameworks como NestJS.',
                'Documentar APIs REST de manera efectiva con Swagger.',
            ],
        },
        {
            title: 'Programación Backend II: Diseño y Arquitectura Backend - CoderHouse',
            items: [
                'Utilizar framework Express.',
                'Utilizar Mongoose.',
                'Implementar sistemas de autenticación y autorización.',
                'Usar el framework Handlebars para manejar plantillas HTML.',
                'Crear APIs RESTful.',
                'Testear y monitorear aplicaciones REST.',
                'Normalizar/denormalizar datos en formato JSON.',
                'Manejar patrones de diseño y code style para aplicaciones de alta concurrencia.',
                'Diseñar servidores web desarrollando en capas con MVC.',
            ],
        },
        {
            title: 'Programación Backend I: Desarrollo Avanzado de Backend - CoderHouse',
            items: [
                'Comprender el ecosistema Node.js/JavaScript.',
                'Dominar los lenguajes JavaScript ES5, ES6, ES7, ES8, ES9, ES10, ES11.',
                'Programar en JavaScript asincrónico avanzado del lado del servidor.',
                'Utilizar framework Express.',
                'Usar el framework Handlebars para manejar plantillas HTML.',
                'Crear APIs RESTful.',
                'Dominar la tecnología Websockets.',
                'Hacer la instalación de MongoDB.',
                'Comprender los principios SQL y sus diferencias con MongoDB.',
                'Trabajar con la consola de MongoDB y clientes UI/Web.',
                'Manejar MongoDB desde Node.js a través de Mongoose.',
                'Realizar CRUD con MongoDB.',
                'Implementar proyectos en la nube a través de plataformas como Heroku y MongoAtlas.',
            ],
        },
        {
            title: 'React Js - CoderHouse',
            items: [
                'Crear desde cero SPA, haciendo foco en las interfaces de usuario.',
                'JavaScript y ES6.',
                'Desarrollar aplicaciones web en JavaScript utilizando ReactJS.',
                'Diseñar soluciones web rápidas, escalables, flexibles y potentes.',
                'Manejo de rutas utilizando Firebase.',
                'Aplicar los conocimientos del lenguaje a otras librerías y frameworks JavaScript.',
                'Comprender paradigmas y patrones de programación empleados en el desarrollo web.',
            ],
        },
        {
            title: 'JavaScript - CoderHouse',
            items: [
                'Distinguir sintaxis y casos de aplicación de instrucciones, estructuras y métodos de JavaScript.',
                'Crear páginas y/o secciones web interactivas con JavaScript.',
                'Determinar medio y formato de almacenamiento de datos generados por el usuario.',
                'Construir soluciones cuyo frontend se comunica con el backend usando AJAX.',
                'Aplicar los conocimientos del lenguaje a otras librerías y frameworks JavaScript.',
                'Comprender paradigmas y patrones de programación empleados en el desarrollo web.',
            ],
        },
        {
            title: 'Desarrollo Web - CoderHouse',
            items: [
                'Prototipar un sitio web.',
                'Maquetar una web con HTML y CSS, siguiendo las mejores prácticas.',
                'Crear animaciones con CSS.',
                'Manejar SASS como preprocesador, y BEM como metodología.',
                'Versionar código con GIT y GitHub.',
                'Usar herramientas de SEO y tips de seguridad.',
                'Trabajar con Bootstrap y Material Design.',
                'Subir web a un servidor y configurarlo.',
                'Presentar presupuestos y entablar negociación con los clientes.',
            ],
        },
    ],
    en: [
        {
            title: 'TypeScript - Fernando Herrera (Udemy)',
            items: [
                'Basic types',
                'Functions and objects',
                'Custom objects and types in TypeScript',
                'Error debugging and the tsconfig.json file',
                'ES6 features available in TypeScript',
                'Classes in TypeScript',
                'Interfaces',
                'NameSpaces',
                'Generics',
                'Decorators',
                'Using libraries not written in TypeScript',
            ],
        },
        {
            title: 'Backend Programming III: Testing & Scalability - CoderHouse',
            items: [
                'Perform tests and monitoring of REST applications.',
                'Implement optimization strategies including normalization, Gzip and log management.',
                'Manage versioning and packages in Node.js environments.',
                'Configure and secure applications, focusing on backend security.',
                'Develop unit tests and advanced feature tests.',
                'Use and understand Clusters for scalability.',
                'Apply development practices with frameworks such as NestJS.',
                'Effectively document REST APIs with Swagger.',
            ],
        },
        {
            title: 'Backend Programming II: Backend Design & Architecture - CoderHouse',
            items: [
                'Use the Express framework.',
                'Use Mongoose.',
                'Implement authentication and authorization systems.',
                'Use the Handlebars framework to manage HTML templates.',
                'Create RESTful APIs.',
                'Test and monitor REST applications.',
                'Normalize/denormalize data in JSON format.',
                'Handle design patterns and code style for high-concurrency applications.',
                'Design web servers using layered MVC architecture.',
            ],
        },
        {
            title: 'Backend Programming I: Advanced Backend Development - CoderHouse',
            items: [
                'Understand the Node.js/JavaScript ecosystem.',
                'Master JavaScript ES5, ES6, ES7, ES8, ES9, ES10, ES11.',
                'Program advanced asynchronous server-side JavaScript.',
                'Use the Express framework.',
                'Use the Handlebars framework to manage HTML templates.',
                'Create RESTful APIs.',
                'Master WebSockets technology.',
                'Install and set up MongoDB.',
                'Understand SQL principles and their differences with MongoDB.',
                'Work with the MongoDB console and UI/Web clients.',
                'Handle MongoDB from Node.js through Mongoose.',
                'Perform CRUD operations with MongoDB.',
                'Deploy projects to the cloud using platforms like Heroku and MongoAtlas.',
            ],
        },
        {
            title: 'React Js - CoderHouse',
            items: [
                'Build SPAs from scratch, focusing on user interfaces.',
                'JavaScript and ES6.',
                'Develop web applications in JavaScript using ReactJS.',
                'Design fast, scalable, flexible, and powerful web solutions.',
                'Route management using Firebase.',
                'Apply language knowledge to other JavaScript libraries and frameworks.',
                'Understand programming paradigms and patterns used in web development.',
            ],
        },
        {
            title: 'JavaScript - CoderHouse',
            items: [
                'Distinguish syntax and application cases of JavaScript instructions, structures and methods.',
                'Create interactive web pages and/or sections with JavaScript.',
                'Determine the medium and format for storing user-generated data.',
                'Build solutions where the frontend communicates with the backend using AJAX.',
                'Apply language knowledge to other JavaScript libraries and frameworks.',
                'Understand programming paradigms and patterns used in web development.',
            ],
        },
        {
            title: 'Web Development - CoderHouse',
            items: [
                'Prototype a website.',
                'Layout a website with HTML and CSS, following best practices.',
                'Create CSS animations.',
                'Use SASS as a preprocessor and BEM as a methodology.',
                'Version code with GIT and GitHub.',
                'Use SEO tools and security tips.',
                'Work with Bootstrap and Material Design.',
                'Upload a website to a server and configure it.',
                'Present budgets and negotiate with clients.',
            ],
        },
    ],
    it: [
        {
            title: 'TypeScript - Fernando Herrera (Udemy)',
            items: [
                'Tipi base',
                'Funzioni e oggetti',
                'Oggetti e tipi personalizzati in TypeScript',
                'Debug degli errori e il file tsconfig.json',
                'Funzionalità ES6 disponibili in TypeScript',
                'Classi in TypeScript',
                'Interfacce',
                'NameSpaces',
                'Generics',
                'Decoratori',
                'Usare librerie non scritte in TypeScript',
            ],
        },
        {
            title: 'Programmazione Backend III: Testing e Scalabilità - CoderHouse',
            items: [
                'Eseguire test e monitoraggio di applicazioni REST.',
                'Implementare strategie di ottimizzazione, incluse normalizzazione, Gzip e gestione dei log.',
                'Gestire il versioning e i pacchetti in ambienti Node.js.',
                'Configurare e proteggere applicazioni, con focus sulla sicurezza backend.',
                'Sviluppare unit test e test avanzati di funzionalità.',
                'Utilizzare e comprendere i Cluster per la scalabilità.',
                'Applicare pratiche di sviluppo con framework come NestJS.',
                'Documentare le API REST in modo efficace con Swagger.',
            ],
        },
        {
            title: 'Programmazione Backend II: Design e Architettura Backend - CoderHouse',
            items: [
                'Utilizzare il framework Express.',
                'Utilizzare Mongoose.',
                'Implementare sistemi di autenticazione e autorizzazione.',
                'Usare il framework Handlebars per gestire i template HTML.',
                'Creare API RESTful.',
                'Testare e monitorare applicazioni REST.',
                'Normalizzare/denormalizzare dati in formato JSON.',
                'Gestire design pattern e code style per applicazioni ad alta concorrenza.',
                'Progettare server web sviluppando a livelli con MVC.',
            ],
        },
        {
            title: 'Programmazione Backend I: Sviluppo Avanzato di Backend - CoderHouse',
            items: [
                "Comprendere l'ecosistema Node.js/JavaScript.",
                'Padroneggiare JavaScript ES5, ES6, ES7, ES8, ES9, ES10, ES11.',
                'Programmare JavaScript asincrono avanzato lato server.',
                'Utilizzare il framework Express.',
                'Usare il framework Handlebars per gestire i template HTML.',
                'Creare API RESTful.',
                'Padroneggiare la tecnologia WebSockets.',
                'Installare e configurare MongoDB.',
                'Comprendere i principi SQL e le loro differenze con MongoDB.',
                'Lavorare con la console MongoDB e client UI/Web.',
                'Gestire MongoDB da Node.js tramite Mongoose.',
                'Eseguire operazioni CRUD con MongoDB.',
                "Distribuire progetti nel cloud tramite piattaforme come Heroku e MongoAtlas.",
            ],
        },
        {
            title: 'React Js - CoderHouse',
            items: [
                "Creare SPA da zero, con focus sulle interfacce utente.",
                'JavaScript e ES6.',
                'Sviluppare applicazioni web in JavaScript usando ReactJS.',
                'Progettare soluzioni web veloci, scalabili, flessibili e potenti.',
                'Gestione delle route con Firebase.',
                'Applicare le conoscenze del linguaggio ad altre librerie e framework JavaScript.',
                'Comprendere paradigmi e pattern di programmazione usati nello sviluppo web.',
            ],
        },
        {
            title: 'JavaScript - CoderHouse',
            items: [
                'Distinguere sintassi e casi di applicazione di istruzioni, strutture e metodi JavaScript.',
                'Creare pagine web e/o sezioni interattive con JavaScript.',
                "Determinare il mezzo e il formato di archiviazione dei dati generati dall'utente.",
                'Costruire soluzioni in cui il frontend comunica con il backend usando AJAX.',
                'Applicare le conoscenze del linguaggio ad altre librerie e framework JavaScript.',
                'Comprendere paradigmi e pattern di programmazione usati nello sviluppo web.',
            ],
        },
        {
            title: 'Sviluppo Web - CoderHouse',
            items: [
                'Prototipare un sito web.',
                'Strutturare un sito con HTML e CSS seguendo le best practice.',
                'Creare animazioni con CSS.',
                'Usare SASS come preprocessore e BEM come metodologia.',
                'Versionare il codice con GIT e GitHub.',
                'Usare strumenti SEO e suggerimenti di sicurezza.',
                'Lavorare con Bootstrap e Material Design.',
                'Caricare un sito web su un server e configurarlo.',
                'Presentare preventivi e negoziare con i clienti.',
            ],
        },
    ],
}