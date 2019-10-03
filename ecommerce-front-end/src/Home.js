import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
// import CarouselPage from './components/CarouselPage'


const Home = () => {

  return(
    <div>
      <h1>Affordable, Functional, Stylish Designs Inspired By Indusrty Leading Designers</h1>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://images.lampsplus.com/is/image/b9gt8/59a82?qlt=65&wid=780&hei=780&op_sharpen=1&fmt=jpeg" class="d-block w-100" alt="bathroom fixtures" />
          </div>
          <div class="carousel-item">
            <img src="https://images.lampsplus.com/is/image/b9gt8/59a82?qlt=65&wid=780&hei=780&op_sharpen=1&fmt=jpeg" class="d-block w-100" alt="kitchen fixtures"/>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}

export default Home
