import React from 'react'
import { playbutton, heroimage } from '../assets'

const Hero = () => {
  return (
    <div className={`min-h-[100vh] bg-[var(--bg-color)] px-5 py-20 flex md:justify-around sm:justify-center sm:items-center md:flex-row flex-col w-[100%]`}>
      <div>
        <h3 className='text-gradient text-[20px] sm:mt-3 md:mt-4 mt-2 sm:mb-3 md:mb-4 mb-2'>
          PERSONAL LOANS
        </h3>
        <h2 className={`text-[var(--headerText)] sm:text-[3.4rem] md:text-[3.4rem] lg:text-[3.6rem] text-[2.5rem] font-semibold md:leading-[74px]`}>
          Smart Crypto <br className='sm:flex hidden' />
          investment tool on <br className={`sm:flex hidden`} />
          Money Lion Crypto
        </h2>
        <p className={`text-[var(--paragraphText)] text-[18px] md:text-[18.5px] lg:text-[20px] md:mt-5 md:leading-[35px] sm:mt-3 leading-[32px] mb-7 md:mb-9`}>
          Need to consolidate debt or make a large purchase? We <br className={`sm:flex hidden`} />
          bring the lenders to you so you can shop and compare <br className={`sm:flex hidden`} />
          personal loan offers in minutes.
        </p>
        <div className='flex items-center gap-[2rem] flex-wrap'>
          <button className={``}>
            <a href="#" className={`bg-primary-gradient py-3 px-5 rounded-full text-[white] font-semibold`}>
              COMPARE RATES
            </a>
          </button>
          <button className='hover:bg-[#1e8fff13] rounded-full py-2 px-3'>
            <a href="#">
              <div className='flex justify-center items-center sm:gap-[1rem] gap-[1rem]'>
                <div className='bg-[var(--dimBlue)] rounded-full h-[40px] w-[40px]'>
                  <img src={playbutton} alt="play" className={`h-[40px] w-[40px] object-contain`} />
                </div>
                <h3 className={`text-[var(--paragraphText)] font-semibold`}>
                  Watch Reel
                </h3>
              </div>
            </a>
          </button>
        </div>

      </div>
      <div className='relative'>
        <img src={heroimage} alt="heroimage" className={`relative z-[3]`} />
        <div className='absolute blue__radial h-[80%] w-[70%] rounded-full sm:top-[0%] top-[40%] right-[0%] z-[2]' />
        <div className='absolute white__gradient h-[60%] w-[60%] rounded-full sm:top-[10%] top-[50%] right-[5%] z-[1]' />
      </div>
    </div>
  )
}

export default Hero