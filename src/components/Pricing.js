import React from 'react';
import './CSS/Pricing.css';

function Pricing() {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Our Pricing</h2>
            <div className="row">
                
                <div className="col-md-4">
                    <div className="pricing-card">
                        <h3 className="pricing-title">Basic</h3>
                        <p className="pricing-price">$8.99</p>
                        <ul className="pricing-features">
                            <li>Classic Pepperoni</li>
                            <li>1 Topping</li>
                            <li>Small Size</li>
                            <li>Free Delivery</li>
                        </ul>
                        <a href="#" className="btn btn-success rounded-pill px-3">Order Now</a>
                    </div>
                </div>
                
                <div className="col-md-4">
                    <div className="pricing-card featured">
                        <h3 className="pricing-title">Premium</h3>
                        <p className="pricing-price">$14.99</p>
                        <ul className="pricing-features">
                            <li>Supreme</li>
                            <li>2 Toppings</li>
                            <li>Medium Size</li>
                            <li>Free Delivery</li>
                        </ul>
                        <a href="#" className="btn btn-success rounded-pill px-3">Order Now</a>
                    </div>
                </div>
                
                <div className="col-md-4">
                    <div className="pricing-card">
                        <h3 className="pricing-title">Deluxe</h3>
                        <p className="pricing-price">$19.99</p>
                        <ul className="pricing-features">
                            <li>BBQ Meatlovers</li>
                            <li>3 Toppings</li>
                            <li>Large Size</li>
                            <li>Free Delivery</li>
                        </ul>
                        <a href="#" className="btn btn-success rounded-pill px-3">Order Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
