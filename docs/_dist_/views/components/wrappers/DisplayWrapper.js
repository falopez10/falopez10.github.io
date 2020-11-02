import {ThemeProvider, useMediaQuery} from "../../../../web_modules/@material-ui/core.js";
import React, {useEffect, useState} from "../../../../web_modules/react.js";
import {MyTheme as MyTheme2} from "../../../constants/MyTheme.js";
import {Language} from "../../../core/models/index.js";
import {DisplayContext as DisplayContext2} from "../../../core/providers/DisplayContext.js";
export const DisplayWrapper = ({children}) => {
  const [language, setLanguage] = useState(Language.EN);
  const xs = useMediaQuery((theme) => theme?.breakpoints.down("xs") ?? "xs");
  useEffect(() => {
    let navLanguage = (navigator.language ?? "").split("-")[0];
    if (!Object.values(Language).includes(navLanguage))
      navLanguage = Language.EN;
    setLanguage(navLanguage);
  }, []);
  return /* @__PURE__ */ React.createElement(ThemeProvider, {
    theme: MyTheme2
  }, /* @__PURE__ */ React.createElement(DisplayContext2.Provider, {
    value: {language, xs}
  }, children));
};
