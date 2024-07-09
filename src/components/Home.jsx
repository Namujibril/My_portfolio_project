import { useContext } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { DarkModeContext } from './DarkModeContext'
import nazifi_muhd from '../assets/images/nazifi_muhd.jpg'
import { social_links } from '.'
import { fadeIn } from './variants'

const Home = () => {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <section
      id='Home'
      className=' dark:bg-background-color dark:text-text-color bg-text-color text-background-color flex h-full flex-col items-center gap-10 md:flex-row py-40'
    >
      <motion.div
        variants={fadeIn('down', 0.8)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.7 }}
        className='flex items-center justify-center md:w-[40%] mb-9'
      >
        <img
          src={nazifi_muhd}
          alt='muhd bashir ibrahim'
          className='w-7/12 rounded-full object-cover'
        />
      </motion.div>

      <div
        className={`text-center md:flex md:flex-col md:justify-start md:text-left`}
      >
        <motion.h1
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.7 }}
          className='text-3xl font-bold leading-normal text-accent-color md:text-5xl'
        >
          Hello!
          <br />
          <span
            className={`${
              darkMode && 'dark:text-text-color'
            } text-background-color`}
          >
            My name is Nazifi Muhammad Jibril
          </span>
        </motion.h1>

        <motion.h2
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.7 }}
          className='text-md mt-2 font-mono md:text-2xl'
        >
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              ' Frontend Developer!',
              2000, // wait 1s before replacing "Mice" with "Hamsters"
              'Solar Installer!',
              2000,
              'Embedded System Enthusiast!',
              2000,
            ]}
            wrapper='span'
            speed={50}
            style={{ fontSize: '2rem', display: 'inline-block' }}
            repeat={Infinity}
          />
        </motion.h2>

        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.7 }}
        >
          <button
            className={`${
              darkMode && 'bg-accent-color text-background-color'
            } mt-6 w-40 rounded-full bg-accent-color px-4 py-3 font-semibold text-background-color outline outline-4 -outline-offset-8 transition-all duration-200 hover:bg-background-color hover:text-text-color md:mt-4 md:w-40`}
          >
            Contact me
          </button>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.7)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.7 }}
          className='mt-10 flex items-center justify-center space-x-12 md:flex md:justify-start'
        >
          {social_links.map((logo) => (
            <a
              key={logo.logo}
              className={`${
                darkMode &&
                ' dark:bg-text-color dark:text-background-color dark:hover:bg-background-color dark:hover:text-text-color'
              } text-background-colors flex h-10 w-10 items-center justify-center rounded-full bg-background-color text-3xl text-text-color transition-all duration-200 hover:bg-text-color hover:text-background-color`}
              href={logo.link}
            >
              <ion-icon name={logo.logo} size='large'></ion-icon>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Home

// {`${darkMode && "dark:text-text-color"} container my-20 flex h-full flex-col items-center gap-10 md:flex-row`}
