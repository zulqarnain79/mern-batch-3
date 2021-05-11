import React from 'react'
import './Slider.css';
import crsl1 from '../../assets/slider-image-1.jpg'
import crsl2 from '../../assets/slider-image-2.jpg'
import crsl3 from '../../assets/slider-image-3.jpg'
import crsl4 from '../../assets/slider-image-4.jpg'
import crsl5 from '../../assets/slider-image-5.jpg'

function Slider() {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={ crsl1 } class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={ crsl2 } class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={ crsl3 } class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={ crsl4 } class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={ crsl5 } class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider