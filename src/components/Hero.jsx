import Image from 'next/image'
import clientImg from '/public/clients.png'
import HeroImg from '/public/heroimg.png'
import React from 'react'


export default function Hero() {
    return (
        <main className='flex xl:flex-row flex-col justify-center items-center py-10 xl:py-20 '>
            <div className="w-full max-xl:flex flex-col justify-center items-center xl:max-w-[38rem] 2xl:max-w-[55rem]">
                <span className='py-3 inline uppercase text-[12px] font-semibold px-8 rounded-full border-[2px] border-[#FFFFFF]/[50%] backdrop-blur-md bg-[#000000]/[12%]'>
                    Featured Course
                </span>

                <h1 className='text-6xl sm:text-8xl capitalize xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-semibold xl:font-bold py-9 max-xl:text-center '>Introduction to computer science</h1>
                <div className="flex gap-4 items-center pb-8">
                    <button className='py-3 px-4 rounded-md shadow-xl shadow-[#000000]/[22%] bg-buttonBG text-dark font-semibold 4xl:text-2xl'>Start learning for free</button>
                    <div className="flex gap-2 items-center max-sm:hidden">
                        <Image src={clientImg} alt='clientImg' className='' />
                        <span className='text-sm 4xl:text-lg font-medium'>Join 1k+ students</span>
                    </div>
                </div>
                <p className='max-xl:text-center max-xl:pb-9 4xl:text-2xl max-xl:max-w-[40rem]'>Donec et scelerisque quam. Aliquam varius et sapien a pharetra. Maecenas auctor, augue finibus rhoncus, orci lorem ultricies eli.</p>
            </div>
            <div className="xl:w-[1000px] h-auto">
                <Image src={HeroImg} alt='HeroImg' className='w-full h-full object-cover object-center' />
            </div>
        </main>
    )
}
