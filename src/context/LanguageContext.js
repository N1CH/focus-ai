import React, { createContext, useState } from "react";
import { dictionaryList, languageOptions } from "../languages";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [userLanguage, setUserLanguage] = useState("en");

  const changeLanguage = (language) => {
    setUserLanguage(language);
  };

  return (
    <LanguageContext.Provider
      value={{
        userLanguage,
        dictionary: dictionaryList[userLanguage],
        changeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => React.useContext(LanguageContext);

export { languageOptions };

