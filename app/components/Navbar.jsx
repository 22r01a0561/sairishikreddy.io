import { assets } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <a href="#home">
        <Image src={assets.logo} alt="logo" className="cursor-pointer" width={100} height={40} priority />
      </a>
      <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white border border-black shadow-md bg-opacity-50">
        <li>
          <a href="#home" className='font-Ovo hover:text-blue-500'>Home</a>
        </li>
        <li>
          <a href="#about" className='font-Ovo hover:text-blue-500'>About Me</a>
        </li>
        <li>
          <a href="#skills" className='font-Ovo hover:text-blue-500'>Skills</a>
        </li>
        <li>
          <a href="#work" className='font-Ovo hover:text-blue-500'>My Work</a>
        </li>
        <li>
          <a href="#contact" className='font-Ovo hover:text-blue-500'>Contact Me</a>
        </li>
        <li>
          <a href="#resume" className='font-Ovo hover:text-blue-500'>Resume</a>
        </li>
      </ul>
      <div>
        <button className='bg-white text-black border border-black font-Ovo px-4 py-2 rounded-full'>
          <Image src={assets.moon_icon} alt="moon" className='w-6' />
        </button>

        <a href="#contact" className='font-Ovo hidden md:flex items-center gap-3 px-10 py-2.5 
        border border-black rounded-full bg-white text-black text-sm font-bold'>Contact Me
           <Image src={assets.arrow_icon} alt="arrow" className='w-3' />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
