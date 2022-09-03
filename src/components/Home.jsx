import React from 'react'
import '../styles/Home.css';

const Home = () => {
    return (   
        <div className="conteiner home px-4 py-5 text-center text-white">
            <h1 className="display-5 fw-bold ">Help the planet and get your own NFT!</h1>
            <div className="col-lg-12 py-5 mx-auto">
                <h2 className="py-5">With your contribution you can get different NFTs that will gave you a lot of benefits</h2>
                <h2 className="py-5" >Join our waitlist for the pre-sale</h2>
            </div>
            <div className="d-grid gap-2 d-sm-flex py-5 justify-content-sm-center">
                <button className="btn fw-bold btn-mint" tyoe="button"> Mint NFT</button>
            </div>
        </div>
    )

}

export default Home;