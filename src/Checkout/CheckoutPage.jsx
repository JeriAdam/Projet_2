import Stepper from '../Stepper/StepperCheckout'
import * as React from 'react';
import  { useRef } from 'react'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import { NumericFormat } from 'react-number-format';
import { useLocation } from "react-router-dom";
import CartCard from "../CartCard/Cartcard";
import { useTranslation } from 'react-i18next';



const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#00) 000-0000"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const NumericFormatCustom = React.forwardRef(
  function NumericFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        valueIsNumericString
        prefix="$"
      />
    );
  },
);

NumericFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function CheckoutPage(){
  const {t} = useTranslation();

    const nameRef = useRef('')
    const emailRef = useRef('')
    const creditRef = useRef('')
    const phoneRef = useRef('')
    const priceRef = useRef('')
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [values, setValues] = React.useState({
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const location = useLocation();
    const img = location.state.img;
    const price = location.state.price;
    const title = location.state.title;
    const prevPrice = location.state.prevPrice;
    const score = location.state.score;

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
 
 function isValidCredit(){
    const credit = creditRef.current.value;
    const feedbackElement = document.getElementById('creditFeedback');
    if (credit.NaN || credit.trim().length === 0 || credit.trim().length !== 16){
      feedbackElement.textContent = "Please enter a valid email address.";
        return false;
    }else{
      feedbackElement.textContent = ""; 
      return true;
    }
 }

 function containsNumbers(str) {
  return /\d/.test(str);
}

 function isValidName(){
  const nameInput = nameRef.current.value;
  const feedbackElement = document.getElementById('nameFeedback');
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
function isValidPrice(){
  const inputPrice = priceRef.current.value;
  const feedbackElement = document.getElementById('priceFeedback');
  if (inputPrice !== price){
    feedbackElement.textContent = "Please enter a valid price.";
    return false;
  }else{
    feedbackElement.textContent = "";
    return true;
  }

}

function isValidPhoneNumber(){
  const phoneNumber = phoneRef.current.value;
  const feedbackElement = document.getElementById('phoneFeedback');
  if (phoneNumber.length === 0) return true;
  if (phoneNumber.length !== 14){
    console.log(phoneNumber.length)
    feedbackElement.textContent = "Please enter a valid phone number.";
    return false;
  }else{
    feedbackElement.textContent = "";
    return true;
  }
}

 function handleClick(){
  var count = 0;
    if (isValidName()){
      count ++;
    }
    if (isValidCredit()){
      count ++;
    }
    if (isValidEmail()){
      count ++;
    }
    if (isValidPrice()){
      count ++;
    }
    if (isValidPhoneNumber()){
      count ++;
    }
    if (count == 5){
      alert(t('purchase'));
      navigate('/shop')
    }
 }


    return(
        <>
            <Stepper />

            <div className='container'>
                <div className='row mt-10'>
                    <p className='text-5xl subpixel-antialiased text-center'>{t('checkout')}</p>
                </div>
                <div className='row mt-10' style={{width:"50%", marginLeft:"25%"}}>
                <CartCard
                        img = {img}
                        title = {title}
                        price = {price}
                        prevPrice={prevPrice}
                        score={score}
                        />
                </div>
                <div className='row mt-10'>
                <div className='col-md-3 text-center'>
                <p className='text-2xl subpixel-antialiased text-center'><strong className='text-red-700'>* </strong>{t('Nom')}</p>
                <span>{t('c')}</span>
                </div>
                <div className='col-md-9'>
                <TextField 
          required
          helperText={t('nomm')}
          id="outlined-required"
          label={t('requis')}
          defaultValue={""}
          inputRef={nameRef} 
        />
        <span id="nameFeedback" style={{color:"red"}}></span>
                </div>
                </div>

                <div className='row mt-10'>
                <div className='col-md-3 text-center'>
                <p className='text-2xl subpixel-antialiased text-center'><strong className='text-red-700'>* </strong>{t('email')}</p>
                </div>
                <div className='col-md-9'>
                <TextField 
          required
          id="outlined-required"
          helperText={t('emailAddress')}
          label={t('requis')}
          defaultValue={""}
          inputRef={emailRef} 
        />
        <span id="emailFeedback" style={{color:"red"}}></span>
                </div>
                </div>

                <div className='row mt-10'>
                    <div className='col-3 text-center'>
                    <p className='text-2xl subpixel-antialiased'><strong className='text-red-700'>*</strong> {t('CR')}</p>
                    <span>{t('a')}</span>
                    </div>
                    <div className='col-9 text-justify-center'>
                    <TextField 
          required
          helperText= {t('CRN')}
          id="outlined-required"
          label={t('requis')}
          defaultValue={""}
          inputRef={creditRef} 
        />
        <span id="creditFeedback" style={{color:"red"}}></span>
                    </div>
                </div>

                <div className='row mt-10'>
                <div className='col-md-3'> 
                <p className='text-2xl subpixel-antialiased text-center'>{t('number')}</p>
                </div>
                <div className='col-md-9'>
                <FormControl variant="standard">
        <InputLabel htmlFor="formatted-text-mask-input">{t('op')}</InputLabel>
        <Input 
          value={values.textmask}
          onChange={handleChange}
          name="textmask"
          id="formatted-text-mask-input"
          inputComponent={TextMaskCustom}
          inputRef={phoneRef}
        />
      </FormControl>
      <span id="phoneFeedback" style={{color:"red"}}></span>
                </div>
                </div>

                <div className='row mt-10'>
                <div className='col-md-3 text-center'>
                    <p className='text-2xl subpixel-antialiased'><strong className='text-red-700'>* </strong>{t('amount')}</p>
                    </div>
                    <div className='col-md-9'>
                    <TextField
        label={t('prixx')}
        helperText={t('pEnter')}
        value={values.numberformat}
        onChange={handleChange}
        name="numberformat"
        id="formatted-numberformat-input"
        inputRef={priceRef} 
        InputProps={{
          inputComponent: NumericFormatCustom,
        }}
        variant="standard"
      />
       <span id="priceFeedback" style={{color:"red"}}></span>
                    </div>
                </div>
                <div className='row mt-10'>
                <Button onClick={handleClick} variant="danger">{t('confirm')}</Button>
                </div>
            </div>
        </>
    );
}

