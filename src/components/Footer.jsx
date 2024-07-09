import React from 'react'
import { social_links } from '.'

const Footer = () => {
  return (
    <div className='bg-text-color py-10 text-background-color dark:text-text-color dark:bg-background-color'>
      <footer className='container flex justify-between items-center'>
        <div className='w-[60%] flex justify-between items-center'>
          {social_links.map((logo) => {
            return (
              <a
                className=' dark:bg-text-color dark:text-background-color dark:hover:bg-background-color dark:hover:text-text-color
              } text-background-colors flex h-10 w-10 items-center justify-center rounded-full bg-background-color text-3xl text-text-color transition-all duration-200 hover:bg-text-color hover:text-background-color'
                href={logo.link}
                key={logo.logo}
              >
                <ion-icon name={logo.logo}></ion-icon>
              </a>
            )
          })}
        </div>
        <div>
          <p> &copy;{new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
