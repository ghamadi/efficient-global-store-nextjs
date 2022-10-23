import React from 'react'
import InputField from './input-field';

export default function InputsWrapper() {
  return (
    <div className='wrapper'>
      <h3>Inputs Wrapper</h3>
      <InputField 
        label='First Name' 
        storeKey='firstName'
      />
      <InputField 
        label='Last Name' 
        storeKey='lastName'
      />
      <InputField 
        label='Date of Birth' 
        storeKey='dob'
      />
    </div>
  )
}
