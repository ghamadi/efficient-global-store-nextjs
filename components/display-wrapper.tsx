import React from 'react'
import useStore from '../store/use-store'

export default function DisplayWrapper() {
  let [store] = useStore();

  return (
    <div className='wrapper'>
      <h3>Store Values</h3>
      {Object.entries(store).map(([key, value]) => (
        <div key={key}>
          <strong style={{margin: 0}}>{key}</strong> <span> {'=>'} {value}</span>
        </div>
      ))}
    </div>
  )
}


