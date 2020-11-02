import { Theme, ThemeProvider, useMediaQuery } from '@material-ui/core';
import React, { FC, useEffect, useState } from 'react';
import { MyTheme } from '../../../constants/MyTheme';
import { Language } from '../../../core/models';
import { DisplayContext } from '../../../core/providers/DisplayContext';

export const DisplayWrapper: FC = ({ children }) => {
  const [language, setLanguage] = useState<Language>(Language.EN);
  const xs = useMediaQuery((theme: Theme) => theme?.breakpoints.down('xs') ?? "xs");

  useEffect(() => {
    //get preffered language
    let navLanguage: Language = (navigator.language ?? '').split(
      '-',
    )[0] as Language;
    // console.log({ navLanguage, navigator });

    if (!Object.values(Language).includes(navLanguage))
      navLanguage = Language.EN;
    setLanguage(navLanguage);
  }, []);

  // TODO add select language

  return (
    <ThemeProvider theme={MyTheme}>
      <DisplayContext.Provider value={{ language, xs }}>
        {children}
      </DisplayContext.Provider>
    </ThemeProvider>
  );
};
