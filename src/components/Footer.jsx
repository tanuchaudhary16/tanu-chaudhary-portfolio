import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-white px-5 lg:px-28 py-5 lg:py-8 flex flex-col lg:flex-row items-center justify-between mt-16 border-t border-gray-200'>

      <h2 className='text-black text-xl lg:text-3xl font-extrabold tracking-widest cursor-pointer'>
        <span className='text-red-600 drop-shadow-[0_0_4px_rgba(239,68,68,0.4)]'>
          T
        </span>
        ANU
      </h2>

      <div className='text-gray-600 text-center lg:text-right mt-3 lg:mt-0 space-y-2'>
        <p className='text-sm'>
          © 2026 Tanu Chaudhary. All Rights Reserved.
        </p>

        <p className='text-sm hover:text-red-600 transition duration-300'>
          Designed & Developed by Tanu Chaudhary
        </p>
      </div>

    </footer>
  )
}