import React from 'react'
import Logo from './Logo'

const About = () => {
  return (
    <div className='sm:p-7 p-4 flex justify-center items-center flex-col'>
      <div className='flex'>
        <Logo />
        <h1 className={`text-gradient sm:text-[1.5rem] text-[1.5rem] font-bold ml-4`}>
          LOGO
        </h1>
      </div>
      <h3 className='text-[#eef] font-semibold text-[2rem] text-center sm:mt-7'>
        Lorem ipsum dolor sit amet consectetur.
      </h3>
      <p className='text-center text-[15px] text-[#ccf] max-w-[500px] sm:mt-7'>
        Lorem ipsum dolor sit amet consectetur. Volutpat arcu pulvinar mi porttitor turpis tempor. Convallis maecenas viverra nam non
      </p>
      <hr />
    </div>
  )
}

export default About