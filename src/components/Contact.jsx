const Contact = () => {
  return (
    <div id='Contact' className='bg-secondary-color py-16'>
      <div className='container flex flex-col items-center '>
        <h1 className='text-3xl mb-7 font-bold'>
          Contact <span className='text-primary-color'>me</span>
        </h1>
        <form className='bg-background-color text-text-color p-10 flex flex-col items-center rounded-md  lg:w-[60%] '>
          <div className=' flex flex-col mb-1 w-[100%]'>
            <label htmlFor=''> Name:</label>
            <input
              type='text'
              name=''
              id=''
              placeholder='Enter your name'
              className='p-2 outline-none border-none text-background-color'
            />
          </div>
          <div className=' flex flex-col mb-2 w-[100%]'>
            <label htmlFor=''> Email:</label>
            <input
              type='text'
              name=''
              id=''
              placeholder='Enter your email'
              className='p-2 outline-none border-none text-background-color'
            />
          </div>
          <div className=' flex flex-col mb-1 w-[100%]'>
            <textarea
              name=''
              id=''
              cols='20'
              rows='10'
              placeholder='Enter your message here'
            ></textarea>
          </div>
          <div className='mt-3'>
            <button className='bg-primary-color p-2 w-24 text-background-color rounded-md lg:w-48'>
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
