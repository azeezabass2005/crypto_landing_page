import React from 'react'
import { faqsData } from '../constants'
import { useState } from 'react'
import { downarrow, uparrow } from '../assets'

const Faqs = () => {
  const [theIndex, setTheIndex] = useState()
  const [activeFaq, setActiveFaq] = useState(theIndex)

  return (
    <div id='faqs'>
      <div className='flex justify-center items-center w-full flex-col p-4'>
      <div className='sm:h-[120px] h-[60px] rounded-t-[100%] w-[90%] blue__radial' />
        <h2 className={`text-[var(--headerText)] sm:text-[3.4rem] md:text-[3.4rem] lg:text-[3.6rem] text-[2.5rem] font-semibold md:leading-[74px] text-center`}>
          Frequently Asked Questions
        </h2>
        <p className={`text-[var(--paragraphText)] text-[18px] md:text-[18.5px] lg:text-[20px] md:mt-5 md:leading-[35px] sm:mt-3 leading-[32px] mb-7 md:mb-9 text-center`}>
          Many great people use our app and are trusted by them, so our app is highly <br className='sm:flex hidden' /> recommended for you instantly move money between sites
        </p>

        <div className='flex flex-col gap-[1rem] p-3'>
          {
            faqsData.map((faqs, index) => (
              <div key={index} className='bg-[#242436] sm:w-[520px] md:w-[700px]'>
                <div className={`flex justify-between p-3 sm:p-4 md:p-6 ${activeFaq === index ? 'bg-[#303086]' : 'bg-[#242436]'} items-center w-[100%]`}>
                  <p className='text-[#ccf] text-[18px] md:text-[18.5px] lg:text-[20px]'>
                    {faqs.question}
                  </p>
                  <img src={activeFaq === index ? uparrow : downarrow} alt="downarrow" className={`h-[24px] w-[20px] object-contain `} onClick={() =>{
                    activeFaq === index ? setActiveFaq() : setActiveFaq(index)
                  }} />

                </div>
                <div className={`text-[#ccf] ${activeFaq === index ? 'flex' : 'hidden'} p-3 sm:p-4 md:p-6 text-[18px] md:text-[18.5px] lg:text-[20px]`}>
                  {faqs.answer}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Faqs