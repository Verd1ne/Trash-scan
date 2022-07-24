import React from 'react'
import Pagebg from '../images/loginpagebg.svg'
import Icon from '../images/trashscan-icon.png'

export default function LoginPage() {
  return (
    <div className='m-8 sm:m-[64px] md:m-[80px] lg:m-[100px]'>
      <img src={Pagebg} alt='background' className='w-full'/>
      <div className='z-10 bg-white rounded-3xl -translate-y-[30px] pb-12 font-semibold p-10 lg:px-[48px] xl:px-[60px]'>
        <img src={Icon} alt='icon' className="object-contain h-24 w-24 mx-auto -translate-y-[25px]" />
        <h2 className='text-4xl font-semibold ml-12 text-black -translate-y-[15px]'>Login</h2>
        <div className='font-semibold bg-white rounded-3xl mt-4 mb-2 mx-[40px] p-[35px] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.4)]'>
          <h3 className='mb-2 font-bold text-black'>Username</h3>
          <input type='text' className='w-full rounded-full hover:border-2 focus:outline-none border-2 border-[#FFD700] pl-3 h-[35px]'/>
          <h3 className='mt-4 mb-2 font-bold text-black'>Password</h3>
          <input type='password' className='w-full rounded-full hover:border-2 focus:outline-none border-2 border-[#FFD700] pl-3 h-[35px]'/>
        </div>
        <h4 className='w-full text-center text-black font-bold'>Don't have an account? <a href=''> Register Now!</a></h4>
        
      </div>
    </div>
  )
}