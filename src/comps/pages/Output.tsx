import React from 'react';
import Slider from "react-slick";
import './Comps.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import collectionreceipt from "../assets/collectionreceipt.png";
import customform from "../assets/customform.png";
import purchaseorder from "../assets/purchaseorder.png";
import salesinvoice from "../assets/salesinvoice.png";

const images = [
    collectionreceipt,
    customform,
    purchaseorder,
    salesinvoice
];


export default function Output(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    function handleImageError(e) {
        console.error(`Error loading image: ${e.target.src}`);
    }

    return (
        <>
            <div className = "Output">
                <div className='OutputText'>
                    <h1>My Output</h1>
                    <p>During my internship at Fasttrack, I was assigned to two projects: The CODEX Case Study and a client project for Solutions Exchange,
                        one of Cloudtech's clients. The Case Study focused on script debugging and utilizing Advanced PDF/HTML Templates, Netsuite's 
                        customizable forms powered by Apache Freemarker, a Java-based template engine. Netsuite's scripting language, SuiteScript, 
                        is based on JavaScript and is used for batch processes, custom validations and calculations, executing searches, and performing CRUD operations.
                    </p>
                    <p>
                        In the Solutions Exchange project I was assigned to the CAS Configuration where I had to adjust the templates per the client's requests.
                        Some of the templates I adjusted were the templates for the Sales Invoice, Collection Receipt, and Credit Memo.
                    </p>
                </div>
                <div className='OutputImages'>
                    <Slider {...settings}>
                            {images.map((img, index) => (
                                <div key={index} className='image-container'>
                                    <img src={img} alt={`Slide ${index}`} onError={handleImageError}/>
                                </div>
                            ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}