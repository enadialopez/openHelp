import React from 'react'
import '../styles/Home.css';
import ImageOfTrees from '../images/image_trees.png'
import ImageOfChildren from '../images/ninos_en_la_escuela.jpg'
import ImageOfSolarPanels from '../images/paneles_solares.jpg'
import Carousel from 'react-bootstrap/Carousel';


const Home = () => {
    return (   
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={ImageOfTrees} alt="First slide" />
                <Carousel.Caption>
                    <div className="container-fluid text-white">
                        <h1 className="display-5 fw-bold">Help the planet and get your own NFT!</h1>
                        <div className="col-lg-12 mx-4">
                            <h2 >With your contribution you can get different NFTs that will gave you a lot of benefits</h2>
                            <h2 >Join our waitlist for the pre-sale</h2>
                        </div>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button className="btn fw-bold btn-mint" type="button"> Mint NFT</button>
                        </div>
                    </div>    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={ImageOfChildren} alt="First slide" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={ImageOfSolarPanels} alt="First slide" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )

}

export default Home;