import React from 'react'

import Home from '../components/Home'
import About from '../components/About'
import Member from '../components/Member'
import Cards from '../components/Cards'
import Step from '../components/Step'

export const HomePage = () => {
  return (
    <>
      <Home />
      <About />
      <Cards />
      <Step />
      <Member />
    </>
  )
}
