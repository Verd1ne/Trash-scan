import React from 'react'
import Banner from '../images/ts-banner.png';

function Regis(){
    return(
        <div className='RegDiv sm:max-w-sm mx-auto'>
                    <img src={Banner} alt="banner" className=''></img>
                      <div className="RegisBar bg-white rounded-3xl rounded-b-none pt-4 border-solid border-gray-300 border-t-4 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.4)]">
                <h1 className='text-3xl font-bold text-black ml-5'>
                    Register
                </h1>
              <div className='RegisBox bg-white rounded-3xl border-solid border-gray-300 mb-7 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.4)]'>
                <div className=''>
                <form action="url_to_send_form_data" method="post">
                    <div className='usernamediv pt-5'>
                        <label  className="pl-5 font-bold" for="first_name">Username</label><br />
                        <input className="ml-5 px-5  border-yellow-300 mt-1 p-1 rounded-3xl focus:outline-none" type="text" name="firstname" id="first_name"  required/>
                    </div>

                    <div className='emaildiv mt-5'>
                        <label className="pl-5 font-bold" for="e-mail">Email</label><br />
                        <input className="ml-5 px-5 border-yellow-300 mt-1 p-1 rounded-3xl focus:outline-none" type="email" name="email" id="e-mail"  required/>
                    </div>

                    <div className='password1 mt-5'>
                        <label className="pl-5 font-bold" for="pass_word">Password</label><br />
                        <input className="ml-5 px-5  border-yellow-300 mt-1 p-1 rounded-3xl focus:outline-none" type="password" name="password1" id="pass_word"  required/>
                    </div>

                    <div className='password2 mt-5 pb-5'>
                        <label className="pl-5 font-bold" for="pass_word2">Confirm Password</label><br />
                        <input className="ml-5 px-5  border-yellow-300 mt-1 p-1 rounded-3xl focus:outline-none" type="password" name="password2" id="pass_word2" required/>
                    </div>
    
                    </form>
                </div> 
              </div>
                
            </div>
        </div>

      
    
    )
}

export default Regis;