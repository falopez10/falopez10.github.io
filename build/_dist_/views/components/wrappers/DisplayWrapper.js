import React, {useEffect, useState} from "../../../../web_modules/react.js";
import {Language} from "../../../core/models/index.js";
import {DisplayContext as DisplayContext2} from "../../../core/providers/DisplayContext.js";
export const DisplayWrapper = ({children}) => {
  const [language, setLanguage] = useState(Language.EN);
  useEffect(() => {
    let navLanguage = (navigator.language ?? "").split("-")[0];
    if (!Object.values(Language).includes(navLanguage))
      navLanguage = Language.EN;
    setLanguage(navLanguage);
  }, []);
  return /* @__PURE__ */ React.createElement(DisplayContext2.Provider, {
    value: {language}
  }, children);
};
