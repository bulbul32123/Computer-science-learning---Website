import Image from 'next/image'
import Logo from '/public/Logo.svg';
import React from 'react'
import { NavLinks } from '../../utils/data';

export default function Navbar() {
    return (
        <nav className='flex justify-between items-center py-6 h-full w-full'>
            <div className="">
                <Image src={Logo} alt='Logo' className='' />
            </div>
            <div className=' flex gap-4 items-center'>
                {
                    NavLinks.map((link, index) => (
                        <ul key={index}>
                            <li className='font-[500]'>{link.name}</li>
                        </ul>
                    ))

                }
            </div>
        </nav>
    )
}
