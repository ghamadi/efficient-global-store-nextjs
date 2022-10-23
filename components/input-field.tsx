import React, { useEffect } from 'react'
import useStore from '../store/use-store'
import { Store } from '../store/store-provider';

interface InputFieldProps {
  label: string;
  storeKey: keyof Store;
}

export default function InputField(props: InputFieldProps) {
  let [fieldValue, setStore] = useStore(props.storeKey);
  
  return (
    <div className='textfield'>
      <span>{props.label}</span>
      <input 
        type="text"
        value={fieldValue as string} 
        onChange={(event) => setStore({[props.storeKey]: event.target.value})}
       />
    </div>
  )
}
