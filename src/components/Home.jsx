import React from 'react'

// css

import '../css/home.css'
import '../css/about.css'
import '../css/menu.css'
import '../css/chef.css'
import '../css/contact.css'

// images
import floral from '../media/floral.png'
import sign from '../media/dark-sign.png'
import RTJ1 from '../media/collection.jpg'
import RTJ2 from '../media/foodie.jpg'
import RTJ3 from '../media/mock-beef.jpg'
import RTJ4 from '../media/tiramisu.jpg'
import menu1 from '../media/rare-beef.jpg'
import menu2 from '../media/salmon.jpg'
import menu3 from '../media/berries.jpg'
import menu4 from '../media/another-beef.jpg'
import table from '../media/table-crowd.jpg'
import chef3 from '../media/chef-right.jpg'
import chef2 from '../media/cheffie-v.jpg'
import chef1 from '../media/women-right.jpg'
import insta1 from '../media/insta1.jpg'
import insta2 from '../media/insta2.jpg'
import insta3 from '../media/insta3.jpg'
import insta4 from '../media/insta4.jpg'
import insta5 from '../media/insta5.jpg'
import insta6 from '../media/insta6.jpg'
import insta7 from '../media/insta7.jpg'
import insta8 from '../media/insta8.jpg'
import insta9 from '../media/insta9.jpg'
import insta10 from '../media/insta10.jpg'
import insta11 from '../media/insta11.jpg'
import insta12 from '../media/insta12.jpg'
import toast from '../media/couple-toast.jpg'

const Home = () => {


    const showOrHideDiv1 = () => {
        var x = document.getElementById("showOrHide1");
        
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    const showOrHideDiv2 = () => {
        var x = document.getElementById("showOrHide2");
        
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    const showOrHideDiv3 = () => {
        var x = document.getElementById("showOrHide3");
        
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    const showOrHideDiv4 = () => {
        var x = document.getElementById("showOrHide4");
        
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    const showOrHideDiv5 = () => {
        var x = document.getElementById("showOrHide5");
        
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    const showOrHideDiv6 = () => {
        var x = document.getElementById("showOrHide6");
        
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    const showOrHideDiv7 = () => {
        var x = document.getElementById("showOrHide7");
        
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }


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

        <div className="d-flex justify-content-center align-items-center mt-4 ">
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
                    <div className="container-fluid p-lg-5">
                    <h4 className='rtj px-5 pt-5 mt-4'>ReasonsTo Join</h4>
                    <p className='num px-5 '>01</p>
                    <p className='px-5 rtj-title'>FRESH FOOD FOR EVERYONE, EVERY DAY</p>
                    <p className='rtj-para px-5'>At the next halt Hooja the Sly One managed to find enough slack chain to permit him to worm himself back quite close to Dian. We were all standing, and as he edged near the girl.</p>
                    </div>
                </div>
                </div>  

             <div className="row">
             <div className="col-md-5 bg-dark pb-sm-2">
                    <div className="container-fluid p-lg-5" style={{textAlign: 'right'}}>
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
                    <div className="container-fluid p-lg-5">
                    <h4 className='rtj px-5 pt-5 mt-4'>ReasonsTo Join</h4>
                    <p className='num px-5 '>03</p>
                    <p className='px-5 rtj-title'>COOKING WITH SCIENCE FOR PERFECT RESULTS</p>
                    <p className='rtj-para px-5'>At the next halt Hooja the Sly One managed to find enough slack chain to permit him to worm himself back quite close to Dian. We were all standing, and as he edged near the girl.</p>
                    </div>
                </div>
                </div>  

                <div className="row">
             <div className="col-md-5 bg-dark">
                    <div className="container-fluid p-lg-5" style={{textAlign: 'right'}}>
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

    <div className="about-bg" id='menu'>
    <div className="container-fluid pt-4"> 
    <div className="d-flex justify-content-center align-items-center pt-5 ">
        <img src={floral} alt="" className='floral'/>
                </div >

        <div className="d-flex justify-content-center align-items-center mt-4 ">
            <div>
                <div className="d-flex">
                    <p className='dash'>___________</p>
                    <p className='simply-the-best mx-2'>Variety And Flavor</p>
                    <p className='dash'>___________</p>
                </div>
                
            </div>

            
            
            </div> 

            <div className="d-flex justify-content-center align-items-center">
           <p className="head-about">OUR AWARDED MENU</p>
                </div> 
             <div className="container mx-lg-5 px-5 pb-5 d-flex justify-content-center">
             <p className='mx-lg-5 px-lg-5 text-center text-white'>I care not to perform this part of my task methodically. But shall be content to produce the desired impression.
From these citations, I take it and dash the conclusion aimed at will naturally follow of itself.</p>   

</div>

<div className="container pb-5">
<div className="row">
            <div className="col-md-6 menu">
                <div className="d-flex " onClick={showOrHideDiv1}>
                    <p className='menu-name pt-2 '>SNACKS</p>
                    <p className='dropdown-style ms-auto pt-2' ><i class="fa-solid fa-angle-down" ></i></p>
                </div>
                <div id='showOrHide1' className='px-4 pt-2 pb-4' style={{display:'none'}}>
                <div className="d-flex justify-content-between">
                    <p className='menu-item'>Chicken Wings</p>
                    <p className='menu-price'>$15.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                    <p className='menu-item'>Chicken Wings</p>
                    <p className='menu-price'>$15.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                    <p className='menu-item'>Chicken Wings</p>
                    <p className='menu-price'>$15.00</p>
                    </div>
                </div>
                <hr  className='hr-line'/>
                <div className="d-flex  " onClick={showOrHideDiv2}>
                    <p className='menu-name'>SOUP</p>
                    <p className='dropdown-style ms-auto' ><i class="fa-solid fa-angle-down" ></i></p>
                </div>
                <div id='showOrHide2' className='px-4 pt-2 pb-4' style={{display:'none'}}>
                <div className="d-flex justify-content-between">
                    <p className='menu-item'>Chicken Wings</p>
                    <p className='menu-price'>$15.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                    <p className='menu-item'>Chicken Wings</p>
                    <p className='menu-price'>$15.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                    <p className='menu-item'>Chicken Wings</p>
                    <p className='menu-price'>$15.00</p>
                    </div>
                </div>
                <hr  className='hr-line'/>
                <div className="d-flex" onClick={showOrHideDiv3}>
                    <p className='menu-name'>VEGAN</p>
                    <p className='dropdown-style ms-auto' ><i class="fa-solid fa-angle-down" ></i></p>
                </div>
                <div id='showOrHide3' className='px-4 pt-2 pb-4' style={{display:'none'}}>
                <div className="d-flex justify-content-between">
                    <p className='menu-item'>Chicken Wings</p>
                    <p className='menu-price'>$15.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                    <p className='menu-item'>Chicken Wings</p>
                    <p className='menu-price'>$15.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                    <p className='menu-item'>Chicken Wings</p>
                    <p className='menu-price'>$15.00</p>
                    </div>
                </div>
                <hr  className='hr-line'/>
                <div className="d-flex" onClick={showOrHideDiv4}>
                    <p className='menu-name'>FISH</p>
                    <p className='dropdown-style ms-auto' ><i class="fa-solid fa-angle-down" ></i></p>
                </div>
                <div id='showOrHide4' className='px-4 pt-2 pb-4' style={{display:'none'}}>
                <div className="d-flex justify-content-between">
                    <p className='menu-item'>Chicken Wings</p>
                    <p className='menu-price'>$15.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                    <p className='menu-item'>Chicken Wings</p>
                    <p className='menu-price'>$15.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                    <p className='menu-item'>Chicken Wings</p>
                    <p className='menu-price'>$15.00</p>
                    </div>
                </div>
                <hr  className='hr-line'/>
                <div className="d-flex" onClick={showOrHideDiv5}>
                    <p className='menu-name'>MEAT</p>
                    <p className='dropdown-style ms-auto' ><i class="fa-solid fa-angle-down" ></i></p>
                </div>
                <div id='showOrHide5' className='px-4 pt-2 pb-4' style={{display:'none'}}>
                <div className="d-flex justify-content-between">
                    <p className='menu-item'>Chicken Wings</p>
                    <p className='menu-price'>$15.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                    <p className='menu-item'>Chicken Wings</p>
                    <p className='menu-price'>$15.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                    <p className='menu-item'>Chicken Wings</p>
                    <p className='menu-price'>$15.00</p>
                    </div>
                </div>
                <hr  className='hr-line'/>
                <div className="d-flex" onClick={showOrHideDiv6}>
                    <p className='menu-name'>DESSERTS</p>
                    <p className='dropdown-style ms-auto' ><i class="fa-solid fa-angle-down" ></i></p>
                </div>
                <div id='showOrHide6' className='px-4 pt-2 pb-4' style={{display:'none'}}>
                <div className="d-flex justify-content-between">
                    <p className='menu-item'>Chicken Wings</p>
                    <p className='menu-price'>$15.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                    <p className='menu-item'>Chicken Wings</p>
                    <p className='menu-price'>$15.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                    <p className='menu-item'>Chicken Wings</p>
                    <p className='menu-price'>$15.00</p>
                    </div>
                </div>
                <hr  className='hr-line'/>
                <div className="d-flex" onClick={showOrHideDiv7}>
                    <p className='menu-name'>DRINKS</p>
                    <p className='dropdown-style ms-auto' ><i class="fa-solid fa-angle-down" ></i></p>
                </div>
                <div id='showOrHide7' className='px-4 pt-2 pb-4' style={{display:'none'}}>
                <div className="d-flex justify-content-between">
                    <p className='menu-item'>Chicken Wings</p>
                    <p className='menu-price'>$15.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                    <p className='menu-item'>Chicken Wings</p>
                    <p className='menu-price'>$15.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                    <p className='menu-item'>Chicken Wings</p>
                    <p className='menu-price'>$15.00</p>
                    </div>
                </div>
              
            </div>
           
           
           
           
           
           
           
            <div className="col-md-6 px-3">
                <div className="row">
                    <div className="col-md-6" >

                       <div className='outer1'> <img src={menu1} alt="" className='menu-img1'/></div>
                           
                            
                        
                    </div>
                    <div className="col-md-6">
                    <div className='outer2'>
                        <img src={menu2} alt="" className='menu-img2'/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 ">
                        <div className="outer1">
                        <img src={menu3} alt="" className='menu-img1'/>
                        </div>
                        
                    </div>
                    <div className="col-md-6 ">
                        <div className="outer2">
                        <img src={menu4} alt="" className='menu-img2'/>
                        </div>
                        
                    </div>
                </div>

            </div>
         </div>

</div>



        

      

   

    </div>


    <div className="bg-dark pt-5 pb-5">
    <div className="container">
    <div className="d-flex justify-content-center align-items-center">
        <h2 className='text-white after-menu px-4 mt-5'>Our clients love us and we are truly proud of sharing their feedback.
Come and visit us. You will not regret the experience</h2>
        </div>
        </div>
    </div>

<img src={table} alt="" className='table-crowd ' />

 <div className='d-flex justify-content-center align-items-center'>
    <h1 className='table-text'>Enjoy Cheerful moments</h1>
 </div>

 <div className='about-bg' id='chefs' >

        <div className="container-fluid pt-4"> 

        <div className="d-flex justify-content-center align-items-center pt-5 ">
        <img src={floral} alt="" className='floral'/>
                </div >

        <div className="d-flex justify-content-center align-items-center mt-4 ">
            <div>
                <div className="d-flex">
                    <p className='dash'>___________</p>
                    <p className='simply-the-best mx-2'>Talent & Experience</p>
                    <p className='dash'>___________</p>
                </div>
                
            </div>

            
            
            </div> 

            <div className="d-flex justify-content-center align-items-center">
           <p className="head-about">KITCHEN SCIENTIST</p>
                </div> 

                <div className="container mx-lg-5 px-5 pb-5 d-flex justify-content-center">
             <p className='mx-lg-5 px-lg-5 text-center text-white'>I care not to perform this part of my task methodically. But shall be content to produce the desired impression.
From these citations, I take it and dash the conclusion aimed at will naturally follow of itself.</p>   

</div>


<div className="container-fluid">
   <div className="row">
    <div className="col-md-4">
        <img src={chef1} alt="" className='chef p-2' />
        <p className='chef-name'>Mary Frampton</p>
        <p className="chef-des">Soups & Fish</p>
    </div>
    <div className="col-md-4">
        <img src={chef2} alt="" className='chef p-2'  />
        <p className='chef-name'>Jennifer Queen</p>
        <p className="chef-des">Oriental Flavors</p>
    </div>
    <div className="col-md-4">
        <img src={chef3} alt="" className='chef p-2' />
        <p className='chef-name'>James Ocean</p>
        <p className="chef-des">French Cuisine specialist</p>
    </div>

    
   </div>

 

   </div>

  

            

           
        </div>
                   

<hr />
    <div className="mx-5 px-2 mt-3 pt-5 pb-5 ">
        <div className="insta-flex">
          <div className="out">
            <img src={insta2} alt="" className='insta' />
          </div>
          <div className="out">
            <img src={insta6} alt="" className='insta' />
          </div>
          <div className="out">
            <img src={insta7} alt="" className='insta' />
          </div>
          <div className="out">
            <img src={insta11} alt="" className='insta' />
          </div>
          <div className="out">
            <img src={insta1} alt="" className='insta' />
          </div>
          <div className="out">
            <img src={insta8} alt="" className='insta' />
          </div>
          </div>
        <div className="insta-flex">
          <div className="out">
            <img src={insta3} alt="" className='insta' />
          </div>
          <div className="out">
            <img src={insta4} alt="" className='insta' />
          </div>
          <div className="out">
            <img src={insta10} alt="" className='insta' />
          </div>
          <div className="out">
            <img src={insta9} alt="" className='insta' />
          </div>
          <div className="out">
            <img src={insta5} alt="" className='insta' />
          </div>
          <div className="out">
            <img src={insta12} alt="" className='insta' />
          </div>
          </div>
          </div>



 <div className='pt-5 mt-5' id='book'>
    <img src={toast} alt="" width={'100%'} height={'700px'} />

<div className="d-flex justify-content-center align-items-center">
     <div className="contact">
        <div className="d-flex justify-content-center align-items-center pt-5 ">
        <img src={floral} alt="" className='floral'/>
                </div >

        <div className="d-flex justify-content-center align-items-center mt-4 ">
            <div>
                <div className="d-flex">
                    <p className='dash'>___________</p>
                    <p className='simply-the-best mx-2'>Instant Confirmation</p>
                    <p className='dash'>___________</p>
                </div>
                
            </div>
            </div>

         <p className="book-head">MAKE YOUR RESERVATION</p> 
         <p className='book-text px-5 mx-3'>I care not to perform this part of my task methodically. But shall be content to produce the desired impression.
From these citations, I take it and dash the conclusion aimed at will naturally follow of itself.</p> 

    <div className="container mt-lg-5">
    <div className="row ">
        <div className="col-md-4">
            <h4 className='date '>DATE</h4>
            <div className="d-flex justify-content-center align-items-center">
            <input type="date" className='input-field px-2 p-1' />
            </div>
            
        </div>
        <div className="col-md-4">
            <h4 className='date '>HOUR</h4>
            <div className="d-flex justify-content-center align-items-center">
            <select  className='input-field px-2 p-1' >
            <option value="10">10 AM</option>
            <option value="11">11 AM</option>
            <option value="12">12 PM</option>
            <option value="13">1 PM</option>
            <option value="14">2 PM</option>
            <option value="15">3 PM</option>
            <option value="16">4 PM</option>
            <option value="17">5 PM</option>
            <option value="18">6 PM</option>
            <option value="19">7 PM</option>
            <option value="20">8 PM</option>
            <option value="21">9 PM</option>
            <option value="22">10 PM</option>
            <option value="23">11 PM</option>
            </select>
            </div>
        </div>
        <div className="col-md-4">
            <h4 className='date'>GUEST NR</h4>
            <div className="d-flex justify-content-center align-items-center">
            <select  className='input-field px-2 p-1' >
            <option value="1">1 </option>
            <option value="2">2 </option>
            <option value="3">3 </option>
            <option value="4">4 </option>
            <option value="5">5 </option>
            <option value="6">6 </option>
            <option value="7">7 </option>
            <option value="8">8 </option>
            <option value="9">9 </option>
            <option value="10">10 </option>
            <option value="moere">more..</option>
            </select>
            </div>
        </div>
     </div>

        <div className="d-flex justify-content-center align-items-center mt-lg-5 mt-3">
            <button className='book-btn'>BOOK A TABLE</button>
            </div>
    </div>
    

        
     </div>
     </div>

    </div>         

    </div>

    </div>

    </div>
  )
}

export default Home