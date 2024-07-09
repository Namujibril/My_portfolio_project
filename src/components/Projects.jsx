import { useContext } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from './variants'
import { DarkModeContext } from './DarkModeContext'

const Projects = () => {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <section
      id='Projects'
      className='py-20 dark:bg-background-color dark:text-text-color bg-primary-color text-background-color'
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
            Previous{' '}
            <span
              className={`${
                darkMode && 'dark:text-text-color'
              } text-secondary-color`}
            >
              Projects
            </span>
          </h3>
          <div
            className={`mx-auto h-1 w-40 ${
              darkMode && 'bg-text-color dark:hover:bg-transparent'
            } bg-background-color hover:bg-primary-color`}
          ></div>
        </motion.div>

        {/* list of porjects */}
        <div>{}</div>
      </div>
    </section>
  )
}

export default Projects
