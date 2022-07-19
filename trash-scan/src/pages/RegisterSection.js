import React, {useState} from 'react'
import RegistrationForm from '../components/RegistrationForm';
import {Element} from "react-scroll";
import axios from 'axios';



function RegisterSection() {
    const [filled, setFilled] = useState(false)
    const [error,setError] = useState(false)
    function handleSubmit(data){
        const formData = new FormData();
        setError(false)
        formData.append('first_name',data.first_name)
        formData.append('last_name',data.last_name)
        formData.append('email',data.email)
        axios.post('https://smakone.org/tedxapi/',formData)
        .then(()=>{
            setFilled(true)
        })
        .catch((e)=>{
            if(e.response){
                if(e.response.status === 400){
                    setError(true)
                }
            }
        })
    }
    return (
        <Element name="register" className="section" style={{marginBottom: "50px"}}>
            <div className="container">
                <div style={{marginTop: '25px'}}
                    data-aos="fade-in"
                    data-aos-offset="0"
                    data-aos-delay="0"
                    data-aos-duration="1500"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center" 
                    className="columns">
                    <div className="column">
                        <h1 className="section-title has-text-centered is-size-1-mobile">REGISTER</h1>
                    </div>
                </div>
                    
                {
                filled?
                    (<div className="columns has-text-centered">
                        <div className="column">
                            <h1 className="is-size-2 has-text-weight-bold">Thank You For Signing Up!</h1>
                            <h1 className="is-size-4">A confirmation email has been sent to you.</h1>

                        </div>
                    </div>)
            :
                    (<RegistrationForm onSubmit={handleSubmit} error={error}/>)
                }

                


            </div>
        </Element>
    )
}

export default RegisterSection

/*<div className="container is-widescreen">
                <div className="columns">
                    <div className="column">
                        <h1 className="section-title has-text-centered is-size-1-mobile">REGISTER</h1>
                    </div>
                </div>
                
            </div>*/
