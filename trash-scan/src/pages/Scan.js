import React from 'react'
import Layout from '../components/Layout';
import Logo from "../images/trashscan-icon.png";

function Scan() {
    return (
        <Layout>
            <div className="w-screen justify-center">
          <div>
            <header className="bg-yellow-300 rounded-3xl rounded-t-none pt-4 pl-4">
                <img src={Logo} alt='logo' className="object-contain h-16 w-20 flex ml-72 pb-2" ></img>
            </header>
          </div>
          </div>

          <div>
            <footer className="bg-black rounded-3xl rounded-b-none h-80">
             <p className="scantext1 text-white text-2xl font-bold">
                Scan and Receive
             </p>
             <p className='scantext2 text-yellow-300 text-lg font-bold pt-2'>
                Make sure the entire QR Code is inside the yellow box to start scanning
             </p>
            </footer>
          </div>
        </Layout>
    )
}



export default Scan;