import React from 'react'
import { finding } from '../assets'
import { banklyFinderList } from '../constants'

const Find = () => {
  return (
    <div id='find' className={`min-h-[100vh] bg-[var(--bg-color)] px-5 py-20 flex md:justify-around sm:justify-center sm:items-center md:flex-row flex-col-reverse w-[100%]`}>
      <div>
        <img src={finding} alt="finding" />
      </div>
      <div>
        <h3 className='text-gradient text-[20px] sm:mt-3 md:mt-4 mt-2 sm:mb-3 md:mb-4 mb-2'>
            PERSONAL LOANS
        </h3>
        <h2 className={`text-[var(--headerText)] sm:text-[3.4rem] md:text-[3.4rem] lg:text-[3.6rem] text-[2.5rem] font-semibold md:leading-[74px]`}>
          Banky finder det
        </h2>
        <p className={`text-[var(--paragraphText)] text-[18px] md:text-[18.5px] lg:text-[20px] md:mt-5 md:leading-[35px] sm:mt-3 leading-[32px] mb-2 md:mb-4`}>
          Vi har gjort laneprocessen for dig som lantager meget
        </p>
        <div>
          {banklyFinderList.map((bankly, index) => (
            <div key={index} className='flex items-center gap-[2rem]'>
              <div className='min-h-[40px] min-w-[40px] rounded-full bg-primary-gradient text-[var(--dimWhite)] flex justify-center items-center'>
                {index + 1}
              </div>
              <div>
                <h3 className='text-[var(--dimWhite)] text-[1.15rem] font-semibold'>
                  {bankly.title}
                </h3>
                <p className={`text-[var(--paragraphText)] text-[18px] md:text-[18.5px] lg:text-[20px] md:mt-5 md:leading-[35px] sm:mt-3 leading-   [32px] mb-7 md:mb-9 max-w-[440px]`}>
                  {bankly.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Find