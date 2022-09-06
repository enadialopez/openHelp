import React from 'react'
import { Button } from '../components/Button'
import '../styles/Donations.css'

export const Donations = () => {
  return (
    <div className='donations-container'>
     <div className='card'>
        <h1 className='card-title'>Donate</h1>
        <h3 className='card-subtitle'>You can any amount you want!</h3>
        <div className='card-input-area'>
          <input className='card-input' type='number' />
          <p className='card-input-currency'>ETH</p>
          <p className='card-input-caption'>Select the amount you want to donate to Openhelp!</p>
        </div>
        <Button text='Donate'/>
        <p className='card-input-caption-bottom'>Thank you very much for your donation, it helps us a lot.</p>
     </div>
    </div>
  )
}
