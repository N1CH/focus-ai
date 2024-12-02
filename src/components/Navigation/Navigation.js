import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const Navigation = ({ onRouteChange, isSignedIn }) => {

  const { dictionary, userLanguage, changeLanguage } = useLanguage();
  
  const toggleLanguage = () => {
    const newLanguage = userLanguage === "en" ? "es" : "en";
    changeLanguage(newLanguage);
  };
  
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signout')} className='b ph3 pv2 mr2-l mr1 bg-transparent grow pointer f4' style={{userSelect: 'none'}}>{dictionary.signOut}</p>
          <p onClick={() => toggleLanguage()} className='b ph3 pv2 mr4-l mr3 ba b--black bg-transparent grow pointer f4' style={{userSelect: 'none'}}>{userLanguage === "en" ? "ES" : "EN"}</p>
        </nav>
      );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => toggleLanguage()} className='b ph3 pv2 mr4 ba b--black bg-transparent grow pointer f4' style={{userSelect: 'none'}}>{userLanguage === "en" ? "ES" : "EN"}</p>
        </nav>
      );
    }
}

export default Navigation;
