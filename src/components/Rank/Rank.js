import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const Rank = ({ name, entries }) => {
  const { dictionary } = useLanguage();
  return (
    <div style={{userSelect: 'none'}}>
      <div className='black f3'>
        {`${name}${dictionary.entryCount}`}
      </div>
      <div className='black f1'>{entries}</div>
    </div>
  );
};

export default Rank;
