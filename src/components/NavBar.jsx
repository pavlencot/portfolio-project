import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../App.css';

const NavBar = () => {
  const { t } = useTranslation();

  return (
    <nav className='siteNavigation'>
        <Link to="home">HOME</Link>
        <Link to="register">{t('signup')}</Link>
        <Link to="signin">{t('signin')}</Link>
    </nav>
  )
}

export default NavBar