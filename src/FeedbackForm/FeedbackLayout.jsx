import React, { useRef, useState } from 'react'
import { Button, TextField,} from '@mui/material';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';


const FeedbackLayout = () => {
    const [feedback, setFeedback] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const form = useRef();

    const sendEmail = async (e) => {
      e.preventDefault();
      setLoading(true);
      emailjs.sendForm('service_j3d7jnd', 'template_4x3f4gq', form.current, '6bWhyEFlTeqKULTZ3')
        .then((result) => {
            console.log(result.text);
            setFeedback('');
            toast.success('Feedback is submitted successfully.', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: "bounce", 
            });
            navigate('/success');
        }, (error) => {
            console.log(error.text);
            toast.error('Unable to sent the feedback', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: "bounce", // Fix: Provide a valid value for the transition property
            });
        });
      setLoading(false);
    };

    

    const maxCharacterLimit = 500; // Set your desired character limit

    const handleChange = (e) => {
      // Check if the input exceeds the character limit
      if (e.target.value.length <= maxCharacterLimit) {
        setFeedback(e.target.value);
      }
    };
  
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
              <div className='max-w-[500px] h-[full] bg-white flex flex-col items-center gap-2 p-4 backdrop-blur-2xl bg-opacity-50 rounded-md'>
                <p className='font-bold w-full text-[30px] flex justify-center '>Feedback Form</p>
                <div className='w-full'>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-3 p-1'>
                        <TextField
                            name='message'
                            label="Write us Your Feedback"
                            multiline
                            rows={6}
                            fullWidth
                            inputProps={{ maxLength: maxCharacterLimit }}
                            value={feedback}
                            onChange={handleChange}
                            variant="filled"
                            helperText='Tell us how the teaching and other facilities are in our department'
                            margin="normal"
                            color="success"
                            required
                        />
                        <Button type="submit" variant="contained" color="inherit" className='drop-shadow-md'>
                          {loading ? (<CircularProgress color='inherit' size={24} /> , 'Submitting....') : 'Submit Feedback'}
                        </Button>
                    </form>
                </div>
            </div>
            </section>
        </div>
        <ToastContainer/>
    </>
    
  )
}

export default FeedbackLayout