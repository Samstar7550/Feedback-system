import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FeedbackLayout = () => {
    
  
  return (
    <>
        <div className='flex flex-col gap-6 lg:flex-row md:flex-row px-3.5 py-5 lg:py-8 lg:px-16 md:py-4 md:px-8 items-center'>
            <section>
                <div className="flex flex-col gap-3 h-full md:gap-8 lg:gap-8  ">
                <div>
                    <p className="w-[auto] h-[auto] lg:w-[800px] font-bold drop-shadow-md text-white text-[48px] lg:text-[61px] md:text-[56px] tracking-[0] leading-[77px] text-wrap">
                    Online Feedback System
                    </p>
                </div>
                <div>
                    <img className="w-[600px] ml-3 object-cover hidden lg:block md:block" alt="Image" src="/assets/Feedback-Transparent-Background.png" />
                </div>
                </div>
            </section>
            <section>
             <Outlet/>
            </section>
        </div>
        <ToastContainer/>
    </>
    
  )
}

export default FeedbackLayout