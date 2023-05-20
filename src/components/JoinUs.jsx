import React from 'react'
import { twitter, discord } from '../assets'


const JoinUs = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-[#0b0b20] w-[100%] p-5 sm:p-7 md:p-9 '>
      <h2 className={`text-[var(--headerText)] sm:text-[3.4rem] md:text-[3.4rem] lg:text-[3.6rem] text-[2.5rem] font-semibold md:leading-[74px] text-center mb-9`}>
        Like what you see? Wait until you meet <br className='sm:flex hidden' /> the community. Join us on
      </h2>
      <div className='w-full flex justify-center gap-[2rem] items-center flex-wrap'>
        <button className='py-2 px-5 flex bg-primary-gradient justify-center items-center gap-4 rounded-[10px]'>
          <img src={twitter} alt="twitter" className='w-[40px] h-[40px] object-contain' />
          <h3 className='text-[#ddf] font-semibold text-[1.2rem]'>
            Twitter
          </h3>
        </button>
        <button className='py-2 px-4 flex justify-center items-center bg-[#23233b] gap-4 rounded-[10px]'>
          <img src={discord} alt="twitter" className='w-[40px] h-[40px] object-contain' />
          <h3 className='text-[#ddf] font-semibold text-[1.2rem]'>
            Discord
          </h3>
        </button>
      </div>
    </div>
  )
}

export default JoinUs