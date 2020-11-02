import {createContext} from "../../../web_modules/react.js";
import {Language} from "../models/index.js";
export const DisplayContext = createContext({
  language: Language.EN,
  xs: true
});
