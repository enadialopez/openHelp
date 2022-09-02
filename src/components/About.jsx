import React from 'react'
import Image from '../images/manos_con_planta.png'

const About = () => {
    return (   
        <> 
            <div class="conteiner">
                <div class="row flex-lg-row align-items-center g-5 py-5">
                    <div class="col-lg-6">
                    <h1 class="fx-bold lh-4 mb-3">About Us</h1>

                    <p class="lead">We are a small group that focuses on help the planet by donations that will be destinated 
                    to organizations that helps the planet, mainly planting tree seeds around the world, with your donation you’ll get virtual rights to 1 hectare of mature forest land. 
                    This includes rights to pay-to-preserve carbon removal (you won’t have physical rights on the land).</p>
                    </div>
                    <div class="col-10 col-sm-8 col-lg-6">
                        <img class="d-block mxlg-auto img-fluid" src={Image} alt="manos" loading="lazy"></img>
                    </div>
                </div>
            </div>
        </>
        )
}

export default About;