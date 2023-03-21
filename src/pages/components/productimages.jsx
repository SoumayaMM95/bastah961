import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function ProductImage() {
        return (
            <Carousel>
                <div>
                    <img src="./images/product.png" alt="Product Image"/>
                </div>
                <div>
                    <img src="./images/image1.jpg" alt="Product Image"/>
                </div>
                <div>
                    <img src={"./images/image3.png"} alt="Product Image"/>
                </div>
                <div>
                    <img src={"./images/image2.jpg"} alt="Product Image"/>
                </div>
                <div>
                    <img src={"./images/product.png"} alt="Product Image"/>
                </div>
                <div>
                    <img src={"./images/image3.png"} alt="Product Image"/>
                </div>
            </Carousel>
        );
};

export default ProductImage;
