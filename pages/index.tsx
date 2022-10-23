import React, { useEffect } from 'react'
import DisplayWrapper from '../components/display-wrapper'
import InputsWrapper from '../components/inputs-wrapper'

export default function HomePage() {  
  return (
    <div className='wrapper'>
      <h3>Page Wrapper</h3>
      <InputsWrapper></InputsWrapper>
      <DisplayWrapper></DisplayWrapper>
    </div>
  )
}
