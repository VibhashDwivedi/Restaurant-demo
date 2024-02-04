import React from 'react'
import '../css/home.css'
import '../css/about.css'
import floral from '../media/floral.png'

const Home = () => {
  return (
    <div>
    <div className='main' id='home'>

        <div className="container-fluid">
            <div className="d-flex justify-content-center align-items-center vh-100">

                <div>
                <p className="text-white tagline mt-5">A Fancy & Vibrant Dining Experience</p>
                <p className="text-white head pt-0 mt-0">TASTY LANE</p>
                </div>
                       
                    
                    
            </div>
            </div>

    </div>

    <div className='about-bg' id='about' >

        <div className="container-fluid pt-4"> 

            <div className="d-flex justify-content-center align-items-center pt-5 ">
                <img src={floral} alt="" className='floral' />
                    </div>
                    </div>




    </div>

    </div>
  )
}

export default Home