import React, { useState } from 'react';
import './style.scss';

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const I18N_STORAGE_KEY = 'i18nextLng';
    
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    localStorage.setItem(I18N_STORAGE_KEY, event.target.name);
  };

  return (
    <div className="ls">
      <form className="tabber">
        <label className="language" htmlFor="t1">
          Português
        </label>
        <input
          type="radio"
          name="pt-BR"
          id="t1"
          value="portugues"
          checked={selectedLanguage === 'portugues'}
          onChange={handleLanguageChange}
        />
        <label className="language" htmlFor="t2">
          English
        </label>
        <input
          type="radio"
          name="en-US"
          id="t2"
          value="english"
          checked={selectedLanguage === 'english'}
          onChange={handleLanguageChange}
        />
        <div className="blob"></div>
      </form>
    </div>
  );
}