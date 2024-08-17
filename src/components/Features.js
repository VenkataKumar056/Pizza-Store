import React from 'react';
import './CSS/Features.css'; 

function Features() {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Key Features of Pizza Store</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="feature-item mb-4">
                        <h4>Gourmet Pizza Selection</h4>
                        <p>Our menu features a wide variety of pizzas, from classic options like Margherita and Pepperoni to unique gourmet creations such as Truffle Mushroom and BBQ Chicken. Each pizza is crafted with premium ingredients and baked to perfection.</p>
                    </div>
                    <div className="feature-item mb-4">
                        <h4>Fresh Ingredients</h4>
                        <p>We use only the freshest, high-quality ingredients in our pizzas. From vine-ripened tomatoes to artisanal cheeses and premium meats, every bite is packed with flavor and goodness.</p>
                    </div>
                    <div className="feature-item mb-4">
                        <h4>Customizable Orders</h4>
                        <p>Personalize your pizza just the way you like it! Choose your preferred crust, sauce, and toppings to create a pizza that’s uniquely yours.</p>
                    </div>
                    <div className="feature-item mb-4">
                        <h4>Fast & Convenient Delivery</h4>
                        <p>Enjoy your favorite pizzas delivered straight to your door with our fast and reliable delivery service. We ensure your order arrives hot and fresh, ready to be enjoyed.</p>
                    </div>
                    <div className="feature-item mb-4">
                        <h4>Easy Online Ordering</h4>
                        <p>Our user-friendly website makes it easy to browse the menu, customize your order, and complete your purchase in just a few clicks. Ordering your favorite pizza has never been simpler.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="feature-item mb-4">
                        <h4>Warm and Inviting Atmosphere</h4>
                        <p>Whether you're dining in with family and friends or grabbing a quick bite on the go, our restaurant offers a cozy and welcoming environment that enhances your dining experience.</p>
                    </div>
                    <div className="feature-item mb-4">
                        <h4>Excellent Customer Service</h4>
                        <p>Our friendly and attentive staff are dedicated to making your visit or online order as enjoyable as possible. We prioritize customer satisfaction and are always here to help.</p>
                    </div>
                    <div className="feature-item mb-4">
                        <h4>Special Deals & Promotions</h4>
                        <p>We regularly offer special deals and promotions, allowing you to enjoy more of your favorite pizzas at great prices. Follow us on social media or sign up for our newsletter to stay updated.</p>
                    </div>
                    <div className="feature-item mb-4">
                        <h4>Catering Services</h4>
                        <p>Hosting a party or event? Let us take care of the food with our catering services. We offer customizable catering packages to suit any occasion, ensuring your guests are well-fed and happy.</p>
                    </div>
                    <div className="feature-item mb-4">
                        <h4>Loyalty Program</h4>
                        <p>Join our loyalty program and earn rewards with every purchase. Accumulate points to redeem discounts, free items, and other exclusive benefits.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
