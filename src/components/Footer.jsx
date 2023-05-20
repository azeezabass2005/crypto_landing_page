import React from 'react'

const Footer = () => {
  let year = new Date().getFullYear

  return (
    <div className='flex justify-center items-center text-center sm:p-6 p-4 border-t-2 border-t-[#777] border-t-solid'>
      <p className='text-[#ccf] sm:text-[19px] text-[14px] font-semibold'>
        coded by codegem &copy; {year}
      </p>
    </div>
  )
}

export default Footer