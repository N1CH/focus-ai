import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const Rank = ({ name, entries }) => {
  const { dictionary } = useLanguage();
  return (
    <div style={{userSelect: 'none'}}>
      <div className='black fw5 f3-l f5 mr3'>
        {`${name}${dictionary.entryCount}`}
      </div>
      <div className='black fw6 f1-l f2'>{entries}</div>
    </div>
  );
};

export default Rank;
