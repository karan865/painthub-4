import React from "react";
import './SliderOne.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderImageUrl = [
  //First image url
  {
    url:
      "https://pbs.twimg.com/media/D6CDQtQVUAA5vg0.jpg"
  },
  {
    url:
      "https://i.pinimg.com/474x/75/1c/6f/751c6f8d230a78e3fde1dcd688388882--wall-stickers-tree-bedroom-wall-stickers.jpg"
  },
  //Second image url
  {
    url:
      "https://i.pinimg.com/564x/b4/b4/76/b4b4768b4420cdd1aadc01fbaa9e4471.jpg"
  },
  //Third image url
  {
    url:
      "https://i.pinimg.com/originals/80/39/df/8039df90e5be61aee6751740d85f904b.jpg"
  },

  //Fourth image url

  {
    url:
      "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2018/09/21193825/wall-painting-designs-stencil.jpg"
  }
];
const SliderOne = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListclassName="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="movie" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default SliderOne;
