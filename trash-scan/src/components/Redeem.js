import React from 'react'
import Ovo from '../images/ovo.svg'
import Gopay from '../images/gopay.svg'
import Visa from '../images/visa.svg'

export default function Redeem() {
  return (
    <div className='font-semibold rounded-2xl bg-white p-10 m-8'>
      <div className='ml-5'>
        Redeem via e-money :
      </div>
      <div className='rounded-[75px] flex flex-row w-full bg-white p-3 my-2 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] h-[60px]'>
        <img src={Ovo} alt='ovo' className='px-3 my-2'/>
        <div className='h-full mt-[6px]'>
          OVO
        </div>
        <button className='rounded-[75px] bg-[#FEEB44] self-end px-5 my-auto h-full text-xs mr-3 ml-auto border-[3px] border-[#FEEB44] ease-in duration-300 hover:bg-white hover:scale-[1.1]'>REDEEM</button>
      </div>
      <div className='rounded-[75px] flex flex-row w-full bg-white p-3 my-2 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] h-[60px]'>
        <img src={Gopay} alt='gopay' className='px-3 h-full'/>
        <div className='h-full mt-[6px]'>
          Gopay
        </div>
        <button className='rounded-[75px] bg-[#FEEB44] self-end px-5 my-auto h-full text-xs mr-3 ml-auto border-[3px] border-[#FEEB44] ease-in duration-300 hover:bg-white hover:scale-[1.1]'>REDEEM</button>
      </div>
      <div className='ml-5 mt-5'>
        Redeem debit card :
      </div>
      <div className='rounded-[75px] flex flex-row w-full bg-white p-3 my-2 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] h-[60px]'>
        <img src={Visa} alt='visa' className='px-3 h-full'/>
        <div className='h-full mt-[6px]'>
          Debit Card
        </div>
        <button className='rounded-[75px] bg-[#FEEB44] self-end px-5 my-auto h-full text-xs mr-3 ml-auto border-[3px] border-[#FEEB44] ease-in duration-300 hover:bg-white hover:scale-[1.1]'>REDEEM</button>
      </div>
    </div>
  )
}
