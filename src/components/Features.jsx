import React from 'react'
import { featureCard } from '../constants'

const Features = () => {
  return (
    <div className={`bg-[var(--bg-color)] mb-[1rem]`}>
      <div className='flex w-full justify-center items-center'>
        <ul className={`flex flex-wrap justify-center feature-bg md:w-[75%] w-[80%] rounded-[20px] sm:p-5 p-2`}>
          {featureCard.map((feature, index) => (
            <li key={index}>
              <div className='w-[260px] h-[260px] flex justify-center items-center flex-col gap-[10px]'>
                <div className={`h-[180px] w-[180px] feature-img-bg rounded-full flex justify-center items-center`}>
                  <img src={feature.img} alt={feature.title} className={`h-[60px] w-[60px] object-contain`} />
                </div>
                <h3 className={`text-[var(--dimWhite)] text-[1.15rem] text-center`}>
                  {feature.title} <br/>{feature.titleTwo}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Features