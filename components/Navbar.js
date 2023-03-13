import React, { useState } from 'react';
//icons
import {VscClose} from 'react-icons/vsc';
import {HiBars2} from 'react-icons/hi2';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const changeOpenMenu = () =>{
        setOpenMenu(!openMenu)
    }
    
    return (
        <>
            <header className=" sticky top-0  App-header px-5 py-3 lg:py-0 text-xs md:text-base lg:text-lg backdrop-blur-3xl z-30">
                <nav className=' flex flex-col gap-4 lg:flex-row justify-between items-center mx-2 md:mx-10 lg:mx-20  '>
                    <div className='text-[2rem] lg:text-[3rem] font-extralight flex justify-between w-full'>
                        <a href='/'>
                            <p className='p-2'>N</p>
                        </a>
                        
                        <div className='text-3xl lg:hidden cursor-pointer' onClick={changeOpenMenu}>
                            {openMenu? <VscClose/> :<HiBars2/>}
                        </div>
                    </div>
                    <div className={`w-full p-5  bg-opacity-40 flex-col lg:flex lg:flex-row bg-black lg:bg-inherit  md:justify-evenly items-center gap-2 ${(openMenu)?"flex":"hidden"} transition-all duration-300`}>
                            <a href='/'>
                                <div className='hover:bg-black hover:text-white transition-all ease-in px-5 py-2 rounded'>
                                    Home
                                </div>
                            </a>
                            <a href='/aboutus'>
                                <div className='hover:bg-black hover:text-white transition-all ease-in px-5 py-2 rounded'>
                                    About
                                </div>
                            </a>
                            <a href='/events'>
                                <div className='hover:bg-black hover:text-white transition-all ease-in px-5 py-2 rounded'>
                                  Events
                                </div>
                            </a>
                            <a href='/events'>
                                <div className='hover:bg-black hover:text-white transition-all ease-in px-5 py-2 rounded border border-black text-center'>
                                    Contact Me
                                </div>
                            </a>
                                
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;