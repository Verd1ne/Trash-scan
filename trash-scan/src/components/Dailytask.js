import React from 'react'
import Bottle from '../images/bottle.svg'
import Trophy from '../images/trophy.svg'
import Cardboard from '../images/cardboard.svg'

export default function Dailytask() {
  return (
    <div className='font-semibold rounded-2xl bg-white p-10 m-8'>
      <div className='font-bold text-center w-full mb-4 text-black text-2xl'>DAILY TASK</div>
      <div className='rounded-[75px] flex flex-row w-full bg-white p-3 my-2 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] h-[80px]'>
        <img src={Bottle} alt='bottle' className='px-3'/>
        <div className='h-full mt-[16px]'>
          <h1>2 Bottles</h1>
        </div>
        <button className='rounded-full bg-[#FEEB44] px-[30px] md:px-[35px]  my-auto h-full text-xs mr-3 ml-auto border-[3px] border-[#FEEB44] ease-in duration-300 hover:bg-white hover:scale-[1.1]'>CLAIM <br/> 25&nbsp;<img className=' whitespace-nowrap inline ' src={Trophy} alt='trophy'/></button>
      </div>
      <div className='rounded-[75px] flex flex-row w-full bg-white p-3 my-2 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] h-[80px] mb-6'>
        <img src={Cardboard} alt='cardboard' className='px-3'/>
        <div className='h-full mt-[16px]'>
          <h1>2 Boxes</h1>
        </div>
        <button className='rounded-full bg-[#FEEB44] px-[30px] md:px-[35px] my-auto h-full text-xs mr-3 ml-auto border-[3px] border-[#FEEB44] ease-in duration-300 hover:bg-white hover:scale-[1.1]'>CLAIM <br/> 25&nbsp;<img className=' whitespace-nowrap inline' src={Trophy} alt='trophy'/></button>
      </div>
      <div className='container mx-[20px]'>
        <div className='opacity-75 text-center text-sm mb-2'>1000 Points will be converted to IDR 5000</div>
        <div className='rounded-full bg-black mx-[50px] px-[10px] py-[8px] text-sm border-[3px] border-black ease-in duration-300 hover:bg-white tracking-widest text-white hover:text-black hover:scale-[1.1] text-center'>REDEEM POINTS</div>
      </div>
      
    </div>
    
  )
}
