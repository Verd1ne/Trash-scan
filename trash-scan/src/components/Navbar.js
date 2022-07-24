import React from 'react'
import navbarChecklist from '../images/navbarChecklist.svg'
import navbarGraph from '../images/navbarGraph.svg'
import navbarPerson from '../images/navbarPerson.svg'
import navbarScan from '../images/navbarScan.svg'
import navbarWallet from '../images/navbarWallet.svg'

export default function Navbar() {
  return (
    <div className='w-screen flex justify-center'>
      <div className=' bottom-8 w-[296px] fixed bg-[#FFD700] rounded-[30px] h-[38px] drop-shadow-2xl'>
        <div className='grid grid-cols-5'>
        <a href='/' className='mx-auto hover:scale-[1.2] ease-in duration-200'>
          <img
            src={navbarGraph}
            style={{
              position: 'relative',
              marginTop: '8px',
            }}  
            alt="graph"
            layout="fixed"
            width={29}
            height={28}
          />
        </a>
        <a href='/' className='mx-auto hover:scale-[1.2] ease-in duration-200'>
          <img
            src={navbarWallet}
            style={{
              position: 'relative',
              marginTop: '8px',
            }}  
            alt="wallet"
            layout="fixed"
            width={29}
            height={28}
          />
        </a>
        <a href='/scan' className='mx-auto hover:scale-[1.2] ease-in duration-200'>
          <img
            src={navbarScan}
            style={{
              position: 'relative',
              marginTop: '-10px',
            }}  
            alt="scan"
            layout="fixed"
            width={59}
            height={49}
          />
        </a>
        <a href='/' className='mx-auto hover:scale-[1.2] ease-in duration-200'>
          <img
            src={navbarChecklist}
            style={{
              position: 'relative',
              marginTop: '8px',
            }}  
            alt="checklist"
            layout="fixed"
            width={28}
            height={28}
          />
        </a>
        <a href='/' className='mx-auto hover:scale-[1.2] ease-in duration-200'>
          <img
            src={navbarPerson}
            style={{
              position: 'relative',
              marginTop: '8px',
            }}  
            alt="checklist"
            layout="fixed"
            width={28}
            height={28}
          />
        </a>
        </div>
      </div>
    </div>
  )
}
