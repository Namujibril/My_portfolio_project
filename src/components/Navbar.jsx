import React from 'react'

const Navbar = () => {
  return (
   <header className='w-full bg-backgroundColor text-primryColor p-2 '>
    <div className='container flex justify-between items-center shadow-lg'>
        
    <div>
      <h1 className='text-3xl font-bold font-heading'>Na<span className='text-secondaryColor'>mu</span></h1>
    </div>
    <ul className='lg:flex justify-between w-[20%] hidden'>
        <li><a href="/home">Home</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="skills">Skills</a></li>
    </ul>
   <div className='hidden lg:flex'>
   <ion-icon name="moon-outline"></ion-icon>
   </div>
   <div className='lg:hidden text-3xl text-secondaryColor'>
   <ion-icon name="menu-outline"></ion-icon>

   </div>
    </div>
   </header>
  )
}

export default Navbar
