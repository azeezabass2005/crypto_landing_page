import React from 'react'
import { navLinks } from '../constants'
import Logo from './Logo'
import { menu, close } from '../assets'
import { useState } from 'react'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className={`bg-[transparent] backdrop-blur-[7px] flex flex-row sm:py-6 py-3 sm:px-6 md:px-32 px-3 justify-between z-[100]`}>
      <div className={`flex justify-between items-center h-[100%] gap-[2.7rem]`}>
        <header className='flex justify-center items-center gap-4 md:ml-7 sm:ml-3 ml-2 h-[100%]'>
          <Logo />
          <h1 className={`text-gradient sm:text-[1.5rem] text-[1.5rem] font-bold`}>
            LOGO
          </h1>
        </header>
        <div className={`sm:flex hidden`}>
          <ul className={`flex h-[100%] justify-center items-center`}>
          {navLinks.map((nav, index) => (
            <li key={nav.name} className={`${index === navLinks.length - 1 ? 'mr-0' : 'md:mr-[3rem] mr-[2.2rem]'}`}>
              <a href={nav.link} className={`text-[var(--paragraphText)] text-[1rem] font-semibold`}>
                {nav.name}
              </a>
            </li>
          ))}
          </ul>
        </div>
      </div>
      <div className={`sm:flex hidden justify-center items-center`}>
        <h1 className={`text-gradient font-semibold`}>
          |
        </h1>
        <button className={`text-[var(--paragraphText)] md:ml-[2.5rem] ml-[1.6rem] font-semibold`}>
          LOGIN
        </button>
        <button className={`text-[#eee] md:ml-[2.5rem] ml-[1.6rem] font-semibold  bg-primary-gradient py-2 md:px-4 px-3 rounded-full`}>
          JOIN NOW
        </button>
      </div>
      <div className='sm:hidden flex z-[1000]'>
        <img src={toggle ? close : menu} className={`${toggle ? 'h-[30px] w-[30px]' : 'w-[45px] h-[45px]'} stroke-[dodgerblue] object-contain cursor-pointer`} alt="menu" onClick={() => setToggle((prev) => (!prev))}  />
            <div className={`${toggle ? 'flex' : 'hidden'} flex-col`}>
              <ul className={`flex flex-col justify-center absolute top-[70px] right-[20px] nav-mobile z-[100]`}>
                {navLinks.map((nav, index) => (
                  <li key={nav.name} className={`flex items-center z-[100]`}>
                    <a href={nav.link} className={`text-[#ddf] text-[1rem  font-semibold pl-10 pr-28 py-7`}>
                      {nav.name}
                    </a>
                  </li>
                ))}
                <li className={`flex items-center z-[100]`}>
                  <button>
                    <a href="#" className={`text-[#ddf] text-[1rem  font-semibold pl-10 pr-28 py-7`}>
                      LOGIN
                    </a>
                  </button>
                </li>
                <li className={`flex items-center z-[100]`}>
                  <button>
                    <a href="#" className={`text-[#ddf] text-[1rem  font-semibold pl-10 pr-28 py-7`}>
                      SIGNUP
                    </a>
                  </button>
                </li>
              </ul>
            </div>
      </div>
    </div>
  )
}

export default Navbar