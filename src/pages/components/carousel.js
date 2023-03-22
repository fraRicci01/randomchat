import React from "react"

const Carousel = () =>{
    return (  
      <div>
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://firebasestorage.googleapis.com/v0/b/test-9007d.appspot.com/o/pexels-felix-mittermeier-956999.jpg?alt=media&token=d53338bb-cb5c-4983-b668-7548aca9b6d6" class="d-block w-100" alt="carousel1" />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://firebasestorage.googleapis.com/v0/b/test-9007d.appspot.com/o/pexels-pixabay-220072.jpg?alt=media&token=bdeaf76d-af20-4798-9442-928311fb5d8b" class="d-block w-100" alt="carousel2" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://firebasestorage.googleapis.com/v0/b/test-9007d.appspot.com/o/pexels-adrien-olichon-2387793.jpg?alt=media&token=9ea3ef86-1304-47b4-81b8-55d7c0d2ce06" class="d-block w-100" alt="carousel3" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>  
    );
  }

export default Carousel;