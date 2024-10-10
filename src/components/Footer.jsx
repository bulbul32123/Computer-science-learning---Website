import React from 'react'
import { company, learn, social_media } from '../../utils/data'

export default function Footer() {
  return (
    <footer className="w-full h-full py-28 pl-5 pr-5 md:pl-20 md:pr-20 3xl:pl-80 3xl:pr-80 mt-10 bg-darkPurple flex md:flex-row flex-col justify-between">
      <div className="w-full md:w-[45rem] text-center md:text-left">
        <h3 className='text-4xl font-semibold md:font-bold md:pr-24'>Join the Computer Science School newsletter</h3>
        <p className="my-5 text-sm">Donec et scelerisque quam. Aliquam varius et sapien.</p>
        <div className="flex gap-5 max-md:justify-center">
          <input type="text" className='w-[60%] bg-[#FFFFFF]/[12%] py-4 px-6 rounded-md border-2 outline-none border-[#FFFFFF]/[50%]' placeholder='Enter your email..' />
          <button className='py-3 px-5 rounded-md bg-buttonBG text-dark font-semibold'>Submit</button>
        </div>
        <div className="flex gap-3 justify-center md:justify-start items-center py-6">
          {
            social_media.map((item, index) => (
              <span key={index}>{item.icon}</span>
            ))
          }
        </div>
        <p className='max-md:hidden pt-20 text-[#FFFFFF]/[70%] font-medium text-sm'>©️2022 Webflow University. All Rights Reserved.</p>
      </div>
      <div className="flex max-xsm:flex-wrap gap-9 md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div className="lg:w-1/4 md:w-1/2 w-full">
          <h2 className="font-bold tracking-widest text-lg mb-3">Learn</h2>
          <nav className="list-none mb-10 flex gap-4 flex-col">
            {
              learn.map((item, index) => (
                <li>{item.name}</li>
              ))
            }
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full">
          <h2 className="font-bold tracking-widest text-lg mb-3">Company</h2>
          <nav className="list-none mb-10 flex gap-4 flex-col">
            {
              company.map((item, index) => (
                <li>{item.name}</li>
              ))
            }
          </nav>
        </div>
      </div>
      <p className='md:hidden pt-20 text-center text-[#FFFFFF]/[70%] font-medium text-sm'>©️2022 Webflow University. All Rights Reserved.</p>
    </footer>
  )
}
