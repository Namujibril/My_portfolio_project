import React, { useContext, useState } from 'react'
import { DarkModeContext } from './DarkModeContext'
import { menu_links } from '.'

const Nav = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext)
  const [open, setOpen] = useState(false)
  console.log(open)
  return (
    <nav className={`container flex items-center justify-between `}>
      {/* logo  */}
      <a href='#Home' className={``}>
        <span className={`text-2xl font-bold uppercase leading-normal`}>
          Na<span className={` text-accent-color`}>mu</span>
        </span>
      </a>

      {/* Menu links */}
      <div className={`hidden w-[60%] items-center md:flex md:justify-between`}>
        <ul className={`flex w-[80%] items-center justify-between`}>
          {menu_links.map((link) => (
            <li
              key={link.name}
              className={`${
                darkMode && 'transition-all dark:hover:text-accent-color'
              }`}
            >
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>

        <div className={``} onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <ion-icon name='moon' size='large'></ion-icon>
          ) : (
            <ion-icon name='sunny' size='large'></ion-icon>
          )}
        </div>
      </div>
      <div className={`text-4xl md:hidden`} onClick={() => setOpen(!open)}>
        <ion-icon name='menu' size='large'></ion-icon>
      </div>
      <div
        className={`fixed bottom-3 right-0 top-0 h-screen w-[50%]  bg-secondary-color  px-7 py-20 text-background-color  md:hidden ${
          open ? 'translate-x-[0%]' : 'translate-x-[100%]'
        } shadow-sm shadow-text-color duration-300`}
      >
        <div
          onClick={() => setOpen(!open)}
          className={`absolute left-4 top-7 text-4xl hover:text-text-color`}
        >
          <ion-icon name='close' size='large'></ion-icon>
        </div>
        <ul>
          {menu_links.map((link) => (
            <li
              key={link.name}
              className={`py-3 text-xl hover:text-text-color`}
            >
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>

        <div className={`text-4xl`} onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <ion-icon name='moon' size='large'></ion-icon>
          ) : (
            <ion-icon name='sunny' size='large'></ion-icon>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Nav
