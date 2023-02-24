import React from 'react'
import NavBar from './NavBar'
import SettingsBar from './SettingsBar'

const HeaderPanel = () => {
  return (
    <div>
        <SettingsBar />
        <NavBar />
    </div>
  )
}

export default HeaderPanel