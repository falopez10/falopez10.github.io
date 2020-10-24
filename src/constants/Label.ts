import { Language } from "../core/models/Language";

interface LabelMap {
    PRESENT: string;

    ABOUT_ME: string;

    // EXPERIENCES
    EXPERIENCE: string;
    ALPINA: string;
    ALPINA_INTERSHIP_TITLE: string;
    ALPINA_INTERSHIP_DESCRIPTION: string;
    UNIANDES: string;
    UNIANDES_TA_TITLE: string;
    UNIANDES_TA_DESCRIPTION: string;
    UNIANDES_RESEARCH_ASSISTANT_CUPITALLER_TITLE: string;
    UNIANDES_RESEARCH_ASSISTANT_CUPITALLER_DESCRIPTION: string;
    JAVEANDINAS: string;
    JAVEANDINAS_TITLE: string;
    JAVEANDINAS_DESCRIPTION: string;
    LEAL: string;
    LEAL_TITLE: string;
    LEAL_DESCRIPTION: string;
    MENIU: string;
    MENIU_TITLE: string;
    MENIU_DESCRIPTION: string;

    EDUCATION: string;
    SAN_CARLOS: string;
    COLLEGE_DEGREE: string;
    SYSTEMS_ENGINEERING_DESCRIPTION: string;
    HIGH_SCHOOL_DEGREE: string;

    SKILLS: string;

    PROJECTS: string;

    INTERESTS: string;

}

const intlLabels = {
    ALPINA: "Alpina - productos alimenticios",
    UNIANDES: "Universidad de Los Andes",
    JAVEANDINAS: "Tutorias Javeandinas",
    LEAL: "Leal Colombia S.A.S.",
    MENIU: "Meniu Colombia S.A.S.",
    SAN_CARLOS: "Colegio San Carlos",
}

export const labels: Record<Language, LabelMap> = {
    [Language.EN]: {
        ...intlLabels,
        PRESENT: "Present",
        ABOUT_ME: "About me",

        EXPERIENCE: "Experience",

        ALPINA_INTERSHIP_TITLE: "Internship in Project Management",
        ALPINA_INTERSHIP_DESCRIPTION: "I helped keeping track of tech projects developing inside the company. I also participated in the roles of QA and analyst in critical financial projects.",
        UNIANDES_TA_TITLE: "Teaching Assistant at University of Los Andes",
        UNIANDES_TA_DESCRIPTION: `As a TA I graded and helped younger students in multiple undergrad courses.
        Said courses include:
        - Structural Math and logic
        - Object-oriented programming I
        - Object-oriented programming II
        - Data structures
        - Enterprise Systems`,
        UNIANDES_RESEARCH_ASSISTANT_CUPITALLER_TITLE: "Research Assistant at Cupitaller",
        UNIANDES_RESEARCH_ASSISTANT_CUPITALLER_DESCRIPTION: "Cupitaller is a private class inside college made for Engineering students. As an assistant I had to look over academic tutors and provide them and students with resources for different programming courses.",
        JAVEANDINAS_TITLE: "Private class tutor",
        JAVEANDINAS_DESCRIPTION: "I did private classes for students from multiple colleges, mainly for programming lessons and early undergrad engineering courses.",
        LEAL_TITLE: "Fullstack Developer",
        LEAL_DESCRIPTION: "Started as a front-end developer, but I quickly started covering back-end and architectural planning inside the startup. I mainly helped in the  development of Leal Coins, a transactional platform for customer-fidelization among businesses",
        MENIU_TITLE: "Fullstack Developer",
        MENIU_DESCRIPTION: "At the early startup, aside from programming, I helped multiple migrations and product decisions. Being a tinier team, I was able to lead the tech area, achieving the design of a scalable infrastructure and a growing data model.",

        EDUCATION: "Education",
        COLLEGE_DEGREE: "Bachelor's degree",
        SYSTEMS_ENGINEERING_DESCRIPTION: `Systems Engineering and computation
        GPA: 4.16`,
        HIGH_SCHOOL_DEGREE: "High school",

        SKILLS: "Skills",
        PROJECTS: "Projects",
        INTERESTS: "Interests",
    },
    [Language.ES]: {
        ...intlLabels,
        PRESENT: "Presente",
        ABOUT_ME: "Sobre mí",

        EXPERIENCE: "Experiencia",

        ALPINA_INTERSHIP_TITLE: "Prácticante en proyectos",
        ALPINA_INTERSHIP_DESCRIPTION: "Ayudé a hacer seguimiento sobre los proyectos de tecnología en la compañía. También tuve el rol de QA y analista en proyectos críticos relacionados con el área financiera.",
        UNIANDES_TA_TITLE: "Monitor académico en la universidad de los Andes",
        UNIANDES_TA_DESCRIPTION: `Como monitor, asesoré y ayudé a calificar estudiantes jóvenes en múliples cursos de pregrado:
        - Matemática estructural y lógica
        - Algorítmica y Programación orientada a objetos I
        - Algorítmica y Programación orientada a objetos II
        - Estructuras de datos
        - Sistemas Empresariales`,
        UNIANDES_RESEARCH_ASSISTANT_CUPITALLER_TITLE: "Monitor de investigación en Cupitaller",
        UNIANDES_RESEARCH_ASSISTANT_CUPITALLER_DESCRIPTION: "Cupitaller es un centro de apoyo a estudiantes en materias de Programación. Como monitor, tuve que supervisar y colaborar con tutores académicos, orgánizandolos y dándoles recursos para varios cursos de programación.",
        JAVEANDINAS_TITLE: "Tutor de clases personalizadas",
        JAVEANDINAS_DESCRIPTION: "Realicé clases privadas para estudiantes de múltiples universidades, principalmente para temas de programación y cursos tempranos de materias de ingeniería.",
        LEAL_TITLE: "Desarrollador Fullstack",
        LEAL_DESCRIPTION: "Empecé siendo un desarrollador front-end, pero rápidamente estuve ayudando en tareas de back-end e incluso con decisiones de arquitectura dentro de la start-up. Principalmente ayudé en el desarrollo de Leal Coins, una plataforma transaccional para fidelización de clientes en múltiples negocios.",
        MENIU_TITLE: "Desarrollador Fullstack",
        MENIU_DESCRIPTION: "Aparte de programar, desde una era temprana de la start-up, ayudé a realizar múltiples migraciónes de tecnología y colaboré en bastantes decisiones de producto. Siendo un equipo pequeño, pude lideral el área de tecnología, alcanzando el diseño de una infraestructura escalable y un modelo de datos en crecimiento.",

        EDUCATION: "Educación",
        COLLEGE_DEGREE: "Profesional",
        SYSTEMS_ENGINEERING_DESCRIPTION: `Ingeniería de SIstemas y Computación
        PGA: 4.16`,
        HIGH_SCHOOL_DEGREE: "",

        SKILLS: "Habilidades",
        INTERESTS: "Intereses",
        PROJECTS: "Proyectos",

    }
};