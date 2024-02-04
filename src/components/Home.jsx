import React from 'react'

// css
import '../css/home.css'
import '../css/about.css'

// images
import floral from '../media/floral.png'
import sign from '../media/dark-sign.png'
import RTJ1 from '../media/collection.jpg'
import RTJ2 from '../media/foodie.jpg'
import RTJ3 from '../media/mock-beef.jpg'
import RTJ4 from '../media/tiramisu.jpg'
const Home = () => {
  return (
    <div>
    <div className='main' id='home'>

        <div className="container-fluid">
            <div className="d-flex justify-content-center align-items-center vh-100">

                <div>
                <p className="text-white tagline mt-5">A Fancy & Vibrant Dining Experience</p>
                <p className="text-white head pt-0 mt-0">THE TASTY LANE</p>
                </div>
                       
                    
                    
            </div>
            </div>

    </div>

    <div className='about-bg' id='about' >

        <div className="container-fluid pt-4"> 

        <div className="d-flex justify-content-center align-items-center pt-5 ">
        <img src={floral} alt="" className='floral'/>
                </div >

        <div className="d-flex justify-content-center align-items-center  ">
            <div>
                <div className="d-flex">
                    <p className='dash'>___________</p>
                    <p className='simply-the-best mx-2'>Simply The Best</p>
                    <p className='dash'>___________</p>
                </div>
                
            </div>

            
            
            </div> 

            <div className="d-flex justify-content-center align-items-center">
           <p className="head-about">WELCOME TO THE TASTY LANE</p>
                </div> 

            <div className="row container-fluid">
                <div className="col-md-6 px-lg-4">
                    <span className='the'>T</span>
                    <span className='about-text'>he Tasty Lane, an epicurean haven where culinary delight takes center stage. Our carefully crafted menu invites you to embark on a gastronomic adventure, with each section designed to showcase the diverse and exquisite flavors that define our culinary identity. Begin your journey with our Tasty Starters, an enticing array of appetizers that serve as a prelude to the extraordinary dining experience ahead. From crispy calamari to artisanal bruschettas, these starters are a testament to our commitment to elevating the art of appetizing beginnings.</span>
                     <span className="about-text">As you navigate through Tasty Lane, the Flavorful Main Courses beckon, presenting a symphony of tastes that cater to every palate. Our chefs, inspired by global influences, have meticulously curated a selection that spans from comforting classics to innovative culinary masterpieces. Whether you savor the succulence of our perfectly grilled steaks or revel in the aromatic spices of our signature dishes, each main course embodies the essence of Tasty Lane—where culinary expertise meets a passion for delivering an unforgettable dining experience.</span>
               </div>
               <div className="col-md-6 px-lg-4 mt-4">
                <span className="about-text">Whether you savor the succulence of our perfectly grilled steaks or revel in the aromatic spices of our signature dishes, each main course embodies the essence of Tasty Lane—where culinary expertise meets a passion for delivering an unforgettable dining experience. As the journey unfolds, explore our Savory Specialties, where the chef's recommendations shine a spotlight on the distinctive and unparalleled flavors that define Tasty Lane's culinary prowess. Indulge in our Sweet Endings, a collection of desserts that serves as a grand finale to your dining expedition. From rich chocolate decadence to refreshing fruit medleys, our desserts promise to leave a lasting impression, ensuring that your visit to Tasty Lane is nothing short of a culinary odyssey. Join us on this epicurean voyage, and let the flavors of Tasty Lane captivate your senses, making every dining moment a celebration of taste and culinary excellence.</span>
               </div>
                </div>  


             <div className='d-flex justify-content-center align-items-center pt-5 pb-5'>
                <img src={sign} alt="" className='sign'/>
                </div> 

             <div className="row">
                <div className="col-md-7">
                    <img src={RTJ1} alt="" className='rtj1'/>    
                </div>
                <div className="col-md-5 bg-dark">
                    <div className="container-fluid p-5">
                    <h4 className='rtj px-5 pt-5 mt-4'>ReasonsTo Join</h4>
                    <p className='num px-5 '>01</p>
                    <p className='px-5 rtj-title'>FRESH FOOD FOR EVERYONE, EVERY DAY</p>
                    <p className='rtj-para px-5'>At the next halt Hooja the Sly One managed to find enough slack chain to permit him to worm himself back quite close to Dian. We were all standing, and as he edged near the girl.</p>
                    </div>
                </div>
                </div>  

             <div className="row">
             <div className="col-md-5 bg-dark">
                    <div className="container-fluid p-5" style={{textAlign: 'right'}}>
                    <h4 className='rtj px-5 pt-5 mt-4'>ReasonsTo Join</h4>
                    <p className='num px-5 '>02</p>
                    <p className='px-5 rtj-title'>FOOD PREPARATION WITH LOVE AND CARE</p>
                    <p className='rtj-para px-5'>At the next halt Hooja the Sly One managed to find enough slack chain to permit him to worm himself back quite close to Dian. We were all standing, and as he edged near the girl.</p>
                    </div>
                </div>
                <div className="col-md-7">
                    <img src={RTJ2} alt="" className='rtj2'/>    
                </div>
                </div>  
                

                <div className="row">
                <div className="col-md-7">
                    <img src={RTJ3} alt="" className='rtj1'/>    
                </div>
                <div className="col-md-5 bg-dark">
                    <div className="container-fluid p-5">
                    <h4 className='rtj px-5 pt-5 mt-4'>ReasonsTo Join</h4>
                    <p className='num px-5 '>03</p>
                    <p className='px-5 rtj-title'>COOKING WITH SCIENCE FOR PERFECT RESULTS</p>
                    <p className='rtj-para px-5'>At the next halt Hooja the Sly One managed to find enough slack chain to permit him to worm himself back quite close to Dian. We were all standing, and as he edged near the girl.</p>
                    </div>
                </div>
                </div>  

                <div className="row">
             <div className="col-md-5 bg-dark">
                    <div className="container-fluid p-5" style={{textAlign: 'right'}}>
                    <h4 className='rtj px-5 pt-5 mt-4'>ReasonsTo Join</h4>
                    <p className='num px-5 '>04</p>
                    <p className='px-5 rtj-title'>FINISH WITH ALL THE FLAVOR AND STYLE</p>
                    <p className='rtj-para px-5'>At the next halt Hooja the Sly One managed to find enough slack chain to permit him to worm himself back quite close to Dian. We were all standing, and as he edged near the girl.</p>
                    </div>
                </div>
                <div className="col-md-7">
                    <img src={RTJ4} alt="" className='rtj2'/>    
                </div>
                </div>  


           
        </div>
                   



    </div>

    </div>
  )
}

export default Home