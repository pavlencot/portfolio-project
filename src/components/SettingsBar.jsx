import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { BiWorld } from 'react-icons/bi';

const SettingsBar = () => {
    const { i18n } = useTranslation();

    const languages = [
        {value: 'en', label: 'EN'},
        {value: 'de', label: 'DE'}
    ];

    const icon = <BiWorld />;

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