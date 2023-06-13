import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {navLinks} from '../constants'
import {styles} from '../styles'
import {logo, menu, close} from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 bg-primary z-20`}>
      <div className='w-full justify-between flex items-center max-w-7xl mx-auto'>
          <Link 
            to='/'
            className='flex gap-2 items-center'
            onClick={() =>{
               setActive('')
               window.scrollTo(0,0)
            }}
          >
            <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
            <p className='text-white text-[18px] cursor-pointer flex'>
              Bolaji &nbsp; <span className='sm:block hidden '>| Adedoyin-sukanmi </span></p>
          </Link>
          <ul className='sm:flex flex-row list-none hidden gap-10'>
            {navLinks.map(link => (
              <li
                key={link.id}
                className={`${active === link.title ? 'text-white' : 'text-secondary'} 
                hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

          <div className='sm:hidden flex flex-1 justify-end items-center'>
              <img src={!toggle ? menu : close} alt="menu" 
                className='w-[28px] h-[28px] cursor-pointer object-contain'
                onClick={() => setToggle(previous => !previous)}
              />
              <div className={`${!toggle ? 'hidden': 'flex' } p-6 black-gradient absolute top-20 right-0 mx-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                  <ul className='flex flex-col justify-end items-center list-none  gap-4'>
                    {navLinks.map(link => (
                      <li
                        key={link.id}
                        className={`${active === link.title ? 'text-white' : 'text-secondary'} 
                        font-poppins font-medium cursor-pointer text-[16px] `}
                        onClick={() => {
                          setToggle(!toggle)  
                          setActive(link.title)
                        }}
                      >
                        <a href={`#${link.id}`}>{link.title}</a>
                      </li>
                    ))}
                  </ul>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar