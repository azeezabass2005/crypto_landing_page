import React from 'react'
import { loanFeatureCard } from '../constants'

const Loan = () => {
  return (
    <div className='sm:min-h-[90vh] mt-14'>
      <div className='flex min-h-[100%] flex-col justify-center items-center'>
        <h3 className='text-gradient text-[20px] sm:mt-3 md:mt-4 mt-2 sm:mb-3 md:mb-4 mb-2 text-center'>
            PERSONAL LOANS
        </h3>
        <h2 className={`text-[var(--headerText)] sm:text-[3.2rem] text-[2.5rem] font-semibold md:leading-[74px] text-center md:mb-16 mb-10`}>
          Efficient Funding That Makes <br className={`sm:flex hidden`} />
          Sense for Your Business
        </h2>
        <div className='flex flex-wrap justify-center items-center gap-[3rem]'>
          {loanFeatureCard.map((loanFeature, index) => (
            <div className='bg-primary-gradient w-[280px] h-[315px] flex justify-center items-end rounded-br-[13px] rounded-bl-[13px] mb-3'>
              <div className=''>
                <div className='w-[280px] h-[310px] bg-[#12122b] p-2 flex flex-col gap-4 rounded-br-[10px] rounded-bl-[10px]'>
                  <div className='flex justify-start gap-[2rem] items-center p-2 pb-4'>
                    <img src={loanFeature.img} alt="loanfeature" className='h-[40px] w-[40px]' />
                    <h3 className={`text-[#ddf] font-semibold text-[1rem]`}>
                      {loanFeature.title} <br />
                      {loanFeature.titleTwo}
                    </h3>
                  </div>
                  <div>
                    {loanFeature.miniFeature.map((mini, index) => (
                      <div className='flex items-center gap-3 text-[#ccf] bg-[#191922] h-[51.5px] p-6 rounded-br-[10px] rounded-bl-[10px]'>
                        <div className='min-h-[10px] min-w-[10px] rounded-full bg-primary-gradient' />
                        <p>
                          {mini}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Loan