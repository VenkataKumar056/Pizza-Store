import React from "react";
import DisplayAllItems from "./DisplayAllItems";
function Home(){
  return(
      <>
           <h1 className="heading" align="center">Welcome to Pizza Store</h1>
     
     <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
           <div class="col-10 col-sm-8 col-lg-6">
             <img className="pizza" src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
           </div>
           <div class="col-lg-6">
             <h1 id="res" class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Discover the Best Pizza in Town!</h1>
             <p class="lead">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At Pizza Store, we are passionate about delivering the finest pizzas, crafted from the freshest ingredients. Our menu offers a wide selection of mouthwatering options, from the classic Margherita and Pepperoni to gourmet creations like Truffle Mushroom and BBQ Chicken. Complement your pizza with our assortment of sides, drinks, and desserts, perfect for any occasion.</p>
             <p class="lead">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Whether you're grabbing a quick bite or hosting a family gathering, our user-friendly website ensures a seamless ordering experience with speedy delivery and exceptional customer service. Indulge in the best pizza in town and turn every meal into a memorable moment.</p>
             <div class="d-grid gap-2 d-md-flex justify-content-md-start">
             </div>
           </div>
         </div>
         <div class="row py-5">

<div class="col-lg-6 image-column">
  <img src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
</div>
<div class="col-lg-6 text-column">
  <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Experience Pizza Perfection</h1>
  <h2 class="display-5 fw-italic text-body-emphasis lh-1 mb-2">More Than Just a Meal, It’s an Experience</h2>
  <p class="lead">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At Pizza Store, we believe that every pizza should be an experience to remember. Our dedication to creating the perfect pizza is evident in every slice. Using only the freshest ingredients and time-honored recipes, we craft pizzas that burst with flavor and quality. From the familiar comfort of a Margherita to the bold zest of a spicy Pepperoni or the unique flair of our gourmet options, we have something to satisfy every craving.</p>
  <p class="lead">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;But we don’t stop at great pizza. We provide a warm and inviting atmosphere where you can enjoy your meal with loved ones or order online for a quick and convenient delivery. Our commitment to excellence extends beyond our food, ensuring that every visit to Pizza Store is memorable. Join us and discover why we’re the favorite destination for pizza lovers everywhere.</p>
  <div class="d-grid gap-2 d-md-flex justify-content-md-start">
  </div>
</div>
</div>

<div class="px-4 pt-5 my-5 text-center border-bottom">
  <h1 class="display-4 fw-bold text-body-emphasis">Indulge in Culinary Excellence</h1>
  <h2 class="display-5 fw-italic text-body-emphasis lh-1 mb-2">The Art of Pizza-Making, Perfected</h2>
  <div class="col-lg-6 mx-auto">
    <p class="lead mb-4">At Pizza Store, every pizza tells a story of passion, tradition, and innovation. We start by sourcing the finest ingredients—from vine-ripened tomatoes to artisanal cheeses and premium meats—to create pizzas that are true masterpieces. Each pizza is carefully prepared to achieve the perfect balance of flavors and textures, guaranteed to delight your taste buds.</p>
    <p class="lead mb-4">Our dedication to excellence goes beyond our menu. We offer a cozy ambiance that transforms every meal into a special occasion, whether you’re dining with family or enjoying a quiet moment alone. For those who prefer to dine at home, our online ordering system makes it easy to enjoy our gourmet pizzas with fast delivery straight to your door.</p>
    <p class="lead mb-4">At Pizza Store, we’re more than just a place to eat; we’re a place where memories are made. Our friendly staff is here to provide top-notch service, ensuring that every visit or order is a delightful experience. Join us and celebrate the flavors that make life delicious.</p>
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
    </div>
  </div>
  <div class="overflow-hidden" >
    <div class="container px-5">
      <img src="https://images.pexels.com/photos/1049620/pexels-photo-1049620.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width="700" height="500" loading="lazy"/>
    </div>
  </div>
  <DisplayAllItems />
</div>
      </>
  )

}
export default Home;