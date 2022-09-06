import React from 'react'
import '../styles/Button.css'

export const Button = ({ text = 'buttonText', onClick, disabled = false }) => {
  return (
    <input className='button-component' type='button' value={text} onClick={onClick} disabled={disabled} />
  )
}
