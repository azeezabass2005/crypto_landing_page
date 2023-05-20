import React from 'react'
import { hardworktwo } from '../assets'

const WorkHard = () => {
  return (
    <div className={`min-h-[85vh] bg-[var(--bg-color)] px-5 py-20 flex md:justify-around sm:justify-center sm:items-center md:flex-row flex-col w-[100%]`}>
      <div>
        <h3 className='text-gradient text-[20px] sm:mt-3 md:mt-4 mt-2 sm:mb-3 md:mb-4 mb-2'>
            PERSONAL LOANS
        </h3>
        <h2 className={`text-[var(--headerText)] sm:text-[3.4rem] md:text-[3.4rem] lg:text-[3.6rem] text-[2.5rem] font-semibold md:leading-[74px]`}>
          We work hard - you get <br className='sm:flex hidden' />
          the best deal.
        </h2>
        <p className={`text-[var(--paragraphText)] text-[18px] md:text-[18.5px] lg:text-[20px] md:mt-5 md:leading-[35px] sm:mt-3 leading-[32px] mb-7 md:mb-9`}>
          Because we're a credit broker, not a lender, we're able to search a <br className='sm:flex hidden' />
          panel of leading lenders to find the loan that suits you best. <br className='sm:flex hidden' />
          Got a less-than perfect credit history? No need to worry. <br className='sm:flex hidden' />
          Got CCJs or defaults? The chances are, we'll still be able to help.
        </p>
        <p className={`text-[var(--paragraphText)] text-[18px] md:text-[18.5px] lg:text-[20px] md:mt-5 md:leading-[35px] sm:mt-3 leading-[32px] mb-7 md:mb-9`}>
          Hundreds of products, load of options, our technology cuts <br className='sm:flex hidden' />
          through the noise and our experts will advise on most the suitable<br className='sm:flex hidden' />
          option for you.
        </p>
        <button className={``}>
          <a href="#" className={`bg-primary-gradient py-3 px-5 rounded-full text-[white] font-semibold`}>
            Read more
          </a>
        </button>
      </div>
      <div className='sm:mb-[0] mb-[-5rem] sm:mt-[0] mt-[1rem]'>
        <img src={hardworktwo} alt="hardwork" />
      </div>
    </div>
  )
}

export default WorkHard