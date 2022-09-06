import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css';
import { Button } from './Button';

const Home = () => {
    return (
        <div className="home-container px-4 text-center text-white">
            <h1 className=" ">Help the planet and get your own NFT!</h1>
            <div className="">
                <h2 className="">With your contribution you can get different NFTs that will gave you a lot of benefits</h2>
                <h2 className="" >Join our waitlist for the pre-sale</h2>
            </div>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link to='/donate'> 
                    <Button text='Mint NFT'/>
                </Link>
            </div>
        </div>
    )

}

export default Home;