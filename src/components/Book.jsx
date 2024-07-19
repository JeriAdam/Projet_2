import Button from 'react-bootstrap/Button';
import * as React from 'react';
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import  { useRef } from 'react'
import { useTranslation } from 'react-i18next';



function Book() {

  const {t} = useTranslation();
  const firstRef = useRef('')
const emailRef = useRef('')
const lastRef = useRef('')
  const today = dayjs();
const tomorrow = dayjs().add(1, 'day');

    const [startDate, setStartDate] = useState(new Date());


    function isValidEmail() {
      const email = emailRef.current.value;
      const feedbackElement = document.getElementById('emailFeedback');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      var test = false;
      if (emailRegex.test(email)) {
        feedbackElement.textContent = ""; 
        test = true;
      } else {
        feedbackElement.textContent = "Please enter a valid email address.";
      }
      return test;
    }
  
   function containsNumbers(str) {
    return /\d/.test(str);
  }
  
   function isValidFirstName(){
    const nameInput = firstRef.current.value;
    const feedbackElement = document.getElementById('firstNameFeedback');
    var test = false;
    if (containsNumbers(nameInput) || nameInput.trim().length === 0){
        test = false;
        feedbackElement.textContent = "Please enter a valid name.";
    }else{
        test = true;
        feedbackElement.textContent = "";
    }
    return test;
  }

  function isValidLastName(){
    const nameInput = lastRef.current.value;
    const feedbackElement = document.getElementById('lastNameFeedback');
    var test = false;
    if (containsNumbers(nameInput) || nameInput.trim().length === 0){
        test = false;
        feedbackElement.textContent = "Please enter a valid name.";
    }else{
        test = true;
        feedbackElement.textContent = "";
    }
    return test;
  }

  function handleClick(){
    var count = 0;
      if (isValidLastName()){
        count ++;
      }
      if (isValidFirstName()){
        count ++;
      }
      if (isValidEmail()){
        count ++;
      }
      if (count == 3){
        alert("Booking submission was successfull");
      }
   }
  return (
    <>
    <div className='container'>
      <div className='row mt-10'>
        <p className='text-blue-700 text-5xl text-center mt-7'>{t('App')}</p>
      </div>
      <div className='row mt-10'>
        <div className='col-md-3 text-center'>
          <p className='text-2xl subpixel-antialiased text-center'><strong className='text-red-700'>*</strong> {t('prenom')} </p>
        </div>
        <div className='col-md-9'>
        <TextField 
          required
          helperText="Please enter your first name"
          id="outlined-required"
          label="Required"
          defaultValue={""}
          inputRef={firstRef}
        />
        <span id="firstNameFeedback" style={{color:"red"}}></span>
        </div>
      </div>
      <div className='row mt-10'>
        <div className='col-md-3 text-center'>
          <p className='text-2xl subpixel-antialiased text-center'><strong className='text-red-700'>*</strong> {t('nom')} </p>
        </div>
        <div className='col-md-9'>
        <TextField 
          required
          helperText="Please enter your last name"
          id="outlined-required"
          label="Required"
          defaultValue={""}
          inputRef={lastRef}
        />
        <span id="lastNameFeedback" style={{color:"red"}}></span>
        </div>
      </div>

      <div className='row mt-10'>
        <div className='col-md-3 text-center'>
          <p className='text-2xl subpixel-antialiased text-center'><strong className='text-red-700'>*</strong> {t('email')} </p>
        </div>
        <div className='col-md-9'>
        <TextField 
          required
          helperText="Please enter your email"
          id="outlined-required"
          label="Required"
          defaultValue={""}
          inputRef={emailRef}
        />
        <span id="emailFeedback" style={{color:"red"}}></span>
        </div>
      </div>
      <div className='row mt-10'>
        <div className='col-md-3'>
          <p className='text-2xl subpixel-antialiased text-center'><strong className='text-red-700'>*</strong> {t('date')}</p>
        </div>
        <div className='col-md-3'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoItem>
          <DateTimePicker
          required
          label="Required"
            defaultValue={today}
            minDate={tomorrow}
            views={['year', 'month', 'day', 'hours', 'minutes']}
          />
        </DemoItem>
        </LocalizationProvider>
        </div>
      </div>

      <div className='row mt-10 text-center justify-content-center'>
                <Button onClick={handleClick} style={{width:"auto"}} variant="danger">{t('bButton')}</Button>
                </div>
    </div>
    </>
  )
}

export default Book;