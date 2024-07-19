import * as React from 'react';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
export default function Comments(){
    const [value, setValue] = React.useState(0);

    const handleClick = () => {
        alert("Review received succefully")
    }
        
    
    return(
        <>
        <div className="container">
            <div className="row mt-10">

                <p className='text-4xl'>Want to review the product ? </p>
            </div>
            <div className='row mt-10'>
            <div className="col-md-2">
                <p className='text-3xl'>Give a score :</p>
            </div>
            <div className="col-md-2">
            <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <p className='text-blue-700 text-xl'>{value} /5</p>
            </div>
            </div>

            <div className='row mt-10'>
            <div className="col-md-2">
                <p className='text-3xl'>Write your review :</p>
            </div>
            <div className="col-md-2">
            <TextField
          id="outlined-multiline-static"
          label="Review..."
          multiline
          rows={4}
          defaultValue=""
        />
            </div>
            <div className='col-md-4'>
            <Button onClick={handleClick} style={{display:"flex", alignItems:"center"}} variant="danger">Submit</Button>{' '}
            </div>
            </div>
        </div>
        </>
    );
}