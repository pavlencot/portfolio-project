import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useTranslation } from 'react-i18next';

const SettingsBar = () => {
    const { i18n } = useTranslation();

    const languages = [
        {value: 'en', label: 'EN'},
        {value: 'de', label: 'DE'}
    ];

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }

  return (
    <div className='settingsBar'>
      <Dropdown options={languages} onChange={(e) => changeLanguage(e.value)}/>
    </div>
  )
}

export default SettingsBar