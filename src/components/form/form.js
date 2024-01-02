import React, { useState } from 'react'
import './form.css'
import ErrorModal from '../Error/Error'
const Form=(props)=> {
    const [firstinputValue, set1stInputvalue] = useState("");
    const [secondinputValue, set2ndInputvalue] = useState("");
    const [error, setError] = useState();
    const form1stinputHandler =(event)=>{
        set1stInputvalue(event.target.value)
        
    }
    const form2ndinputHandler =(event)=>{
        set2ndInputvalue(event.target.value)
        
    }
    const formsubmitted = (event)=>{
        event.preventDefault();
        if (firstinputValue.trim().length === 0 || secondinputValue.trim().length === 0) {
            setError({
              title: 'Invalid input',
              message: 'Please enter a valid name and age (non-empty values).',
            });
            return;
          }


        props.createUser(firstinputValue,secondinputValue)
        set1stInputvalue('')
        set2ndInputvalue('')
    }
    const errorHandler = () => {
        setError(null);
      };
  return (
    <>
    {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
    <form onSubmit={formsubmitted}>
    <div className='form-container'>
        <label className='lab' htmlFor=""> UserName</label>
        <input value={firstinputValue}  type="text" onChange={form1stinputHandler} />

        <label className='lab' htmlFor="">Age(Years)</label>
        <input value={secondinputValue} onChange={form2ndinputHandler} type="text" />

        <button className='btn' type='submit'>Add Users</button>
        </div>
    </form>
    </>
  )
}

export default Form