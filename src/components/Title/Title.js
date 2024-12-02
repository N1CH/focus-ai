import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./Title.css";

const Title = () => {
  const { dictionary } = useLanguage();
  return (
    <div className="title">
      <h1 className="black tracked">FocusAI</h1>
      <h2 className="black tracked f5-l f7">{dictionary.subtitle}</h2>
    </div>
  );
};

export default Title;
