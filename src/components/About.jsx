import { info } from '.'
import nazifi_muhd from '../assets/images/nazifi_muhd.jpg'

const About = () => {
  return (
    <section
      id='About'
      className=' dark:bg-secondary-color dark:text-background-color bg-text-color text-background-color py-20'
    >
      <div className='container'>
        <div className='leading-normals mx-auto mb-1 w-[200px] text-center'>
          <h1
            className={`dark:text-primary-color
            text-4xl font-bold tracking-normal`}
          >
            About{' '}
            <span className={`dark:text-text-color text-accent-color`}>me</span>
          </h1>
          <div
            className={`mx-auto h-1 w-40 bg-text-color dark:hover:bg-transparent mb-2 dark:bg-background-color hover:bg-primary-color`}
          ></div>
          <h2
            className={`dark:text-text-color text-2xl font-semibold text-background-color`}
          >
            My Introduction
          </h2>
        </div>

        <div
          className={
            'dark:text-text-color my-8 flex flex-col items-center gap-2 md:flex-row-reverse md:justify-between'
          }
        >
          <div className='dark:aboutImgDark relative mb-10 flex h-full items-center justify-center rounded-xl bg-accent-color aboutImg'>
            <img
              src={nazifi_muhd}
              alt='muhd bashir ibrahim'
              className=' h-[450px] object-cover '
            />
          </div>
          <div className='md:w-[60%]'>
            <p className='text- mb-4 text-pretty leading-normal md:text-xl dark:text-background-color'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, esse
              enim? Debitis ipsa alias consequatur quasi laudantium cupiditate
              doloremque odit nobis ratione exercitationem, quod pariatur.
              Quibusdam voluptatem quia dolorem magni!200
            </p>
            <div className='flex items-center justify-between pt-4 dark:text-background-color'>
              {info.map((item) => (
                <div
                  className='flex flex-col flex-wrap  items-center'
                  key={item.value}
                >
                  <p className='text-3xl font-bold'>
                    {item.value}
                    <span className='text-secondary-color'>+</span>
                  </p>
                  <p className='text-md ml-1 text-center font-semibold'>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <a href='src/assets/images/python_practice.py' download>
              <button className='text-text-color bg-background-color text-xl bg p-3 rounded-full mt-6'>
                Download my CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

// {`${
//               darkMode &&
//               'dark:aboutImgDark relative mb-10 flex h-full items-center justify-center rounded-xl bg-accent-color'
//             } aboutImg relative mb-10 flex h-full items-center justify-center rounded-xl bg-accent-color`}

// darkMode && 'dark:text-text-color'
//
