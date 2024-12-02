import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const Rank = ({ name, entries }) => {
  const { dictionary } = useLanguage();
  return (
    <div style={{userSelect: 'none'}}>
      <div className='black f3-l f4'>
        {`${name}${dictionary.entryCount}`}
      </div>
      <div className='black f1-l f2'>{entries}</div>
    </div>
  );
};

export default Rank;
