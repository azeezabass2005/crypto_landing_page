import React from 'react'
import { stepData } from '../constants'

const HowItWorks = () => {
  return (
    <div>
      <div className='flex justify-center items-center w-full flex-col p-4'>
        <div className='sm:h-[120px] h-[60px] rounded-b-[100%] w-[90%] blue__radial' />
        <h2 className={`text-[var(--headerText)] sm:text-[3.4rem] md:text-[3.4rem] lg:text-[3.6rem] text-[2.5rem] font-semibold md:leading-[74px]`}>
          How it works
        </h2>
        <p className={`text-[var(--paragraphText)] text-[18px] md:text-[18.5px] lg:text-[20px] md:mt-5 md:leading-[35px] sm:mt-3 leading-[32px] mb-7 md:mb-9 text-center`}>
          Lorem ipsum dolor sit amet consectetur. Volupat arcu pulvinar mi <br className='sm:flex hidden' /> portitor turpis tempor. Convallis maecenas viverra nam non
        </p>
        <div className='flex justify-around flex-wrap sm:gap-[4rem] gap-[2rem]'>
          {stepData.map((step, index) => (
            <div key={index} className={`w-[200px] bg-[#1f1f2e] flex flex-col mb-3 justify-center items-center p-3 rounded-[10px]`}>
              <img src={step.img} alt="step image" className={`w-[170px] h-[170px] rounded-tr-[2.5rem]`} />
              <h2 className='text-[#ddff] font-semibold text-[1.1rem] text-center'>
                {step.name}
              </h2>
              <p className='text-[#ccf] text-center text-[15px]'>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowItWorks