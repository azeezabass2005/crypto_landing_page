import React from 'react'

const Logo = () => {
  return (
    <div className='relative h-[45px] w-[45px]'>
        <div className='logochilda logochild rounded-full h-[30px] w-[30px] absolute' />
        <div className='logochildb logochild rounded-full h-[30px] left-[15px] w-[30px] absolute' />
        <div className='logochildc logochild rounded-full h-[30px] left-[7.5px] top-[15px] w-[30px] absolute' />
    </div>
  )
}

export default Logo