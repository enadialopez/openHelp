import React from 'react'
import '../styles/Button.css'

export const Button = ({ text = 'buttonText' }) => {
  return (
    <input className='button-component' type='button' value={text} />
  )
}
