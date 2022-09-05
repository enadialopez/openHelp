import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'

import logo from '../images/navbar_logo.svg'
import mmwolf from '../images/metamask_fox.svg'
import ellipsis from '../images/ellipsis-vertical.svg'

// Libs
import Dropdown from 'react-bootstrap/Dropdown';

const NavBar = () => {

  const onClickMetaMaskButton = () => {
    // TODO: Integrar con solidity para abrir MetaMask
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
              <button className='mm-button' onClick={onClickMetaMaskButton}>
                <img src={mmwolf} alt='MetaMask Wolf' className='navbar-wolf-img'/>
              </button>
              <Dropdown>
              <Dropdown.Toggle className='dropdown' id="dropdown-basic" bsPrefix='drop-bar'>
                  <img src={ellipsis} alt='dropdown button' className='navbar-actions-img' />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={goToTop} >Home</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Connect wallet</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Donate</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Disconnect</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>
          </header>
    )

}

export default NavBar;