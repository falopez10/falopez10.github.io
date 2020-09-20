import React, { FC, useEffect, useState } from 'react'
import { Language } from '../../../core/models'
import { DisplayContext } from '../../../core/providers/DisplayContext'

export const DisplayWrapper: FC = ({ children }) => {

    const [language, setLanguage] = useState<Language>(Language.EN);

    useEffect(() => {
        //get preffered language
        let navLanguage: Language = (navigator.language ?? "").split("-")[0] as Language;
        // console.log({ navLanguage, navigator });

        if (!Object.values(Language).includes(navLanguage))
            navLanguage = Language.EN;
        setLanguage(navLanguage);
    }, []);

    // TODO add select language

    return (
        <DisplayContext.Provider value={{ language }}>
            {children}
        </DisplayContext.Provider>
    )
}
