import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'

import logo from '../images/navbar_logo.svg'
import mmwolf from '../images/metamask_fox.svg'
import ellipsis from '../images/ellipsis-vertical.svg'

// Libs
import Dropdown from 'react-bootstrap/Dropdown';

import { useMoralis } from "react-moralis"

const NavBar = () => {

  const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3, isWeb3EnableLoading } = useMoralis()

  useEffect(() => {
    if (isWeb3Enabled) return
    if (typeof window !== "undefined") {
        if (window.localStorage.getItem("connected")) {
            enableWeb3()
        }
    }
  }, [isWeb3Enabled])

  useEffect(() => {
    Moralis.onAccountChanged((account) => {
      if (account == null) {
          window.localStorage.removeItem("connected")
          deactivateWeb3()
      }
  })
  }, [])
  

  const onClickMetaMaskButton = async () => {
    await enableWeb3()
    if(typeof window !== "undefined") {
      window.localStorage.setItem("connected", "injected")
    }
  }

  const onClickMetamaskDesconectar = () => {
    window.localStorage.removeItem("connected")
                  deactivateWeb3()
  }

  const goToTop = () => {
    window.scrollTo(0, 0)
  }
    return (   
          <header className="navbar-container d-flex justify-content-sm-between px-3">
            <Link to='/' onClick={goToTop} className="d-flex align-items-center"> 
              <img src={logo} alt={'logo'} width={'70%'} className='btn mm-button' />
            </Link>
            <div className='d-flex align-items-center'>
              
              {account ? (
                <button className='mm-button' onClick={onClickMetamaskDesconectar}>
                <img src={mmwolf} alt='MetaMask Wolf' className='navbar-wolf-img'/>
                {account.slice(0,6)}...{account.slice(account.length - 4)}
              </button>
              ) : (
                <button 
                  className='mm-button' 
                  onClick={onClickMetaMaskButton}
                  disabled={isWeb3EnableLoading}>
                  <img src={mmwolf} alt='MetaMask Wolf' className='navbar-wolf-img'/>
                  Connect
              </button>
              )}
              
              <Dropdown>
              <Dropdown.Toggle className='dropdown' id="dropdown-basic" bsPrefix='drop-bar'>
                  <img src={ellipsis} alt='dropdown button' className='navbar-actions-img' />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={goToTop} >Home</Dropdown.Item>
                <Dropdown.Item onClick={onClickMetaMaskButton}>Connect wallet</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Donate</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={onClickMetamaskDesconectar}>Disconnect</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>
          </header>
    )

}

export default NavBar;