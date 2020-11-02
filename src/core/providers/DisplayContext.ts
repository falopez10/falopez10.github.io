import { createContext, Context } from 'react';
import { Language } from '../models';

interface Props {
  language: Language;
}

export const DisplayContext: Context<Props> = createContext<Props>({
  language: Language.EN,
});
