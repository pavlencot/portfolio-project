import React from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

const NavBar = () => {
  const { t } = useTranslation();

  return (
    <nav className='siteNavigation'>
        <Link to="register">{t('signup')}</Link>
        <Link to="signin">{t('signin')}</Link>
    </nav>
  )
}

export default NavBar