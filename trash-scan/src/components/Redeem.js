import React from 'react'
import Ovo from '../images/ovo.svg'
import Gopay from '../images/gopay.svg'
import Visa from '../images/visa.svg'

export default function Redeem() {
  return (
    <div className='font-semibold rounded-2xl bg-white p-10 lg:p-[48px] xl:p-[60px] m-8 sm:m-[64px] md:m-[80px] lg:m-[100px]'>
      <div className='ml-5 text-xl md:text-2xl lg:text-4xl mb-3'>
        Redeem via e-money :
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-0 lg:gap-5 xl:gap-[40px]'>
        <div className='rounded-[75px] flex flex-row w-full bg-white p-3 my-2 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] h-[60px] lg:h-[80px]'>
          <img src={Ovo} alt='ovo' className='px-3 my-2'/>
          <div className='h-full mt-[6px] lg:mt-[8px] text-md lg:text-4xl'>
            <h1>OVO</h1>
          </div>
          <button className='rounded-[75px] bg-[#FEEB44] self-end px-5 my-auto h-full text-xs lg:text-lg mr-3 ml-auto border-[3px] border-[#FEEB44] ease-in duration-300 hover:bg-white hover:scale-[1.1]'>REDEEM</button>
        </div>
        <div className='rounded-[75px] flex flex-row w-full bg-white p-3 my-2 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] h-[60px] lg:h-[80px]'>
          <img src={Gopay} alt='gopay' className='px-3 h-full'/>
          <div className='h-full mt-[6px] lg:mt-[8px] text-md lg:text-4xl'>
            <h1>Gopay</h1>
          </div>
          <button className='rounded-[75px] bg-[#FEEB44] self-end px-5 my-auto h-full text-xs lg:text-lg mr-3 ml-auto border-[3px] border-[#FEEB44] ease-in duration-300 hover:bg-white hover:scale-[1.1]'>REDEEM</button>
        </div>
      </div>
      
      <div className='ml-5 mt-5 text-xl md:text-2xl lg:text-4xl mb-3'>
        Redeem debit card :
      </div>
      <div className='rounded-[75px] flex flex-row w-full bg-white p-3 my-2 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] h-[60px] lg:h-[80px]'>
        <img src={Visa} alt='visa' className='px-3 h-full'/>
        <div className='h-full mt-[6px] lg:mt-[8px] text-md lg:text-4xl'>
          <h1>Debit Card</h1>
        </div>
        <button className='rounded-[75px] bg-[#FEEB44] self-end px-5 my-auto h-full text-xs lg:text-lg mr-3 ml-auto border-[3px] border-[#FEEB44] ease-in duration-300 hover:bg-white hover:scale-[1.1]'>REDEEM</button>
      </div>
    </div>
  )
}
