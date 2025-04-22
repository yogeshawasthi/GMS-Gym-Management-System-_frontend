import { Email, SetMealOutlined } from '@mui/icons-material'
import React, { useState } from 'react'

const ForgotPassword = () => {
    const [emailSubmit, setEmailSubmit] = useState(false)
    const [otpValidate, setOtpValidate] = useState(false)
    const [contentVal,setContentvalue] =useState("Submit Your Email")
    const handleSubmit = () => {
        if (!emailSubmit) {
            setEmailSubmit(true)
            setContentvalue("Submit Your OTP")
        } else if (emailSubmit && !otpValidate) {
            setOtpValidate(true)
            setContentvalue("Submit Your New password")
        }
    }

    return (
        <div className='w-full'>
            <div className='w-full mb-5'>
                <div>Enter Your Email</div>
                <input type='text' className='w-1/2 p-2 rounded-lg border-2 border-slate-400' placeholder='Enter Email' />
            </div>
            {

                emailSubmit && <div className='w-full mb-5'>
                    <div>Enter Your OTP</div>
                    <input type='text' className='w-1/2 p-2 rounded-lg border-2 border-slate-400' placeholder='Enter OTP' />
                </div>
            }
            {

                otpValidate && <div className='w-full mb-5'>
                    <div>Enter Your New Password</div>
                    <input type='text' className='w-1/2 p-2 rounded-lg border-2 border-slate-400' placeholder='Enter New Password' />
                </div>
            }
            <div className='bg-slate-800 text-white mx-auto w-2/3 p-2 rounded-lg text-center font-semibold cursor-pointer border-2 hover:bg-white hover hover:text-black' onClick={() => handleSubmit()}>{contentVal}</div>


        </div>
    )
}

export default ForgotPassword