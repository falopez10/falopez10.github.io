import { Language } from "../core/models/Language";

interface LabelMap {
    ABOUT_ME: string;
    EXPERIENCE: string;
    EDUCATION: string;
    SKILLS: string;
    PROJECTS: string;
    INTERESTS: string;
}

export const labels: Record<Language, LabelMap> = {
    [Language.EN]: {
        ABOUT_ME: "About me",
        EXPERIENCE: "Experience",
        EDUCATION: "Education",
        SKILLS: "Skills",
        PROJECTS: "Projects",
        INTERESTS: "Interests",
    },
    [Language.ES]: {
        ABOUT_ME: "Sobre mí",
        EXPERIENCE: "Experiencia",
        EDUCATION: "Educación",
        SKILLS: "Habilidades",
        INTERESTS: "Intereses",
        PROJECTS: "Proyectos",
    }
};