import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-container px-4 text-center text-white">
            <h1 className="display-5 fw-bold ">Help the planet and get your own NFT!</h1>
            <div className="col-lg-12 py-5 mx-auto">
                <h2 className="py-5">With your contribution you can get different NFTs that will gave you a lot of benefits</h2>
                <h2 className="py-5" >Join our waitlist for the pre-sale</h2>
            </div>
            <div className="d-grid gap-2 d-sm-flex py-5 justify-content-sm-center">
                <Link to='/donate' className="btn fw-bold btn-mint" type="button"> Mint NFT</Link>
            </div>
        </div>
    )

}

export default Home;