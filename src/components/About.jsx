import React from 'react'
import Image from '../images/manos_con_planta.png'
import '../styles/About.css'

const About = () => {
    return (   
            <div className="about-container row flex-lg-row align-items-center g-5 py-5">
                <div className="col-lg-6">
                <h1 className="fx-bold lh-4 mb-3">About Us</h1>

                <p className="lead">We are a small group that focuses on help the planet by donations that will be destinated 
                to organizations that helps the planet, mainly planting tree seeds around the world, with your donation you’ll get virtual rights to 1 hectare of mature forest land. 
                This includes rights to pay-to-preserve carbon removal (you won’t have physical rights on the land).</p>
                </div>
                <div className="col-10 col-sm-8 col-lg-6">
                    <img className="d-block mxlg-auto img-fluid rounded" src={Image} alt="manos" loading="lazy"></img>
                </div>
            </div>
        )
}

export default About;