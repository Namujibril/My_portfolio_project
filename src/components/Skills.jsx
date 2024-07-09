import { useContext } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from './variants'
import { DarkModeContext } from './DarkModeContext'
import { skills } from '.'

const Skills = () => {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <section
      id='Skills'
      className='py-10 dark:bg-background-color text-text-color bg-accent-color'
    >
      <div className='container'>
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.7 }}
          className='mx-auto mb-8 w-full text-center text-2xl'
        >
          <h3
            className={`${
              darkMode && 'dark:text-accent-color'
            } font-bold lg:text-4xl`}
          >
            Skills &{' '}
            <span
              className={`${
                darkMode && 'dark:text-text-color'
              } text-secondary-color`}
            >
              Experience
            </span>
          </h3>
          <div
            className={`mx-auto h-1 w-40 ${
              darkMode && 'bg-text-color dark:hover:bg-transparent'
            } bg-background-color hover:bg-primary-color`}
          ></div>
        </motion.div>

        <div className=' mt-10 grid grid-cols-2 gap-10'>
          {skills.map((skill) => (
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 0.7 }}
              className={`w- relative flex flex-col items-center justify-center rounded-md border-2 bg-background-color py-10 text-white`}
              key={skill.logo}
            >
              <div className='flex items-center justify-center text-7xl'>
                <ion-icon name={skill.logo}></ion-icon>
              </div>
              <p className='mt-4'>{skill.text}</p>
              <div className='absolute right-3 top-2'>
                <ion-icon name='checkmark-outline' size='large'></ion-icon>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
