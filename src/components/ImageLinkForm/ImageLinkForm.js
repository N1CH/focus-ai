import React from "react";
import "./ImageLinkForm.css";
import { useLanguage } from "../../context/LanguageContext";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  const { dictionary } = useLanguage();
  return (
    <div style={{userSelect: 'none'}}>
      <p className='f3-l f4'>
        {dictionary.description}
      </p>
      <div className="br3 ba b--black-10 w-80 w-50-m w-50-l shadow-5 center">
        <div className='form center pa4 b--black-40 shadow-8'>
          <input
            className='f4-l f5 pa2 center w-65 w-80-l'
            type='text'
            onChange={onInputChange}
          ></input>
          <button
            className='b ph4-l ph3 pv2-l pv1 input-reset ba b--black bg-transparent grow pointer f4-l f5 dib'
            onClick={onButtonSubmit}
          >
            {dictionary.scanButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
