import React from "react";
import SliderImgOne from "../../assets/images/slider-image-one.jpg";
import SliderImgTwo from "../../assets/images/slider-image-two.jpg";
import SliderImgThree from "../../assets/images/slider-image-three.jpg";
import SliderImgFour from "../../assets/images/slider-image-four.jpg";
import { Carousel } from "@material-tailwind/react";

const Slider = () => {
  return (
    <div className="ml-30 mr-30">
      <Carousel className="rounded-xl mb-10 mt-5 ">
        <img
          src={SliderImgOne}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src={SliderImgThree}
          alt="image 1"
          className="h-full w-full object-cover "
        />
        <img
          src={SliderImgFour}
          alt="image 1"
          className="h-full w-full object-cover "
        />

        <img
          src={SliderImgTwo}
          alt="image 2"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
};

export default Slider;
