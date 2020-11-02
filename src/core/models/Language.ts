import { es, enUS } from 'date-fns/locale';

export enum Language {
  EN = 'en',
  ES = 'es',
}

export const dateFNSLocale: Record<Language, Locale> = {
  [Language.EN]: enUS,
  [Language.ES]: es,
};
