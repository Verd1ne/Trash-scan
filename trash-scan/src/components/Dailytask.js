import React from 'react'
import Bottle from '../images/bottle.svg'
import Trophy from '../images/trophy.svg'
import Cardboard from '../images/cardboard.svg'

export default function Dailytask() {
  return (
    <div className='font-semibold rounded-2xl bg-white p-10 lg:p-[48px] xl:p-[60px] m-8 sm:m-[64px] md:m-[80px] lg:m-[100px]'>
      <div className='font-bold text-center w-full mb-4 lg:mb-8 xl:mb-12 text-black text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>DAILY TASK</div>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-0 lg:gap-5 xl:gap-[40px]'>
        <div className='rounded-[75px] flex flex-row w-full bg-white p-3 my-2 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] h-[80px] lg:h-[95px]'>
          <img src={Bottle} alt='bottle' className='px-3'/>
          <div className='h-full mt-[16px] text-md md:text-xl lg:text-2xl xl:text-3xl'>
            <h1>2 Bottles</h1>
          </div>
          <button className='rounded-full bg-[#FEEB44] px-[30px] md:px-[35px]  my-auto h-full text-xs lg:text-lg mr-3 ml-auto border-[3px] border-[#FEEB44] ease-in duration-300 hover:bg-white hover:scale-[1.1]'>CLAIM <br/> 25&nbsp;<img className=' whitespace-nowrap inline ' src={Trophy} alt='trophy'/></button>
        </div>
        <div className='rounded-[75px] flex flex-row w-full bg-white p-3 my-2 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] h-[80px] lg:h-[95px]   mb-6'>
          <img src={Cardboard} alt='cardboard' className='px-3'/>
          <div className='h-full mt-[16px] text-md md:text-xl lg:text-2xl xl:text-3xl'>
            <h1>2 Boxes</h1>
          </div>
          <button className='rounded-full bg-[#FEEB44] px-[30px] md:px-[35px] my-auto h-full text-xs lg:text-lg mr-3 ml-auto border-[3px] border-[#FEEB44] ease-in duration-300 hover:bg-white hover:scale-[1.1]'>CLAIM <br/> 25&nbsp;<img className=' whitespace-nowrap inline' src={Trophy} alt='trophy'/></button>
        </div>
      </div>
      
      <div className='container mx-[20px]'>
        <div className='opacity-75 text-center text-sm mb-2'>1000 Points will be converted to IDR 5000</div>
        <div className='rounded-full bg-black mx-[70px] md:mx-[100px] lg:mx-[200px] xl:mx-[400px] px-[10px] py-[8px] text-sm md:text-md lg:text-lg xl:text-xl border-[3px] border-black ease-in duration-300 hover:bg-white tracking-widest text-white hover:text-black hover:scale-[1.1] text-center'>REDEEM POINTS</div>
      </div>
      
    </div>
    
  )
}
