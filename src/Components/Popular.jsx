import React from "react";
import POPULAR from "../assets/popular";
import Item from "./Item";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Popular = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed:2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint:480,
        settings:{
          slidesToShow:1
        }
      }
    ],
  };
  return (
    <section className="bg-white">
      <div className="py-12 p-2  lg:p-20">
        <h1 className="text-center text-4xl font-bold ">Popular Products</h1>
        <hr className="mb-12 mx-auto bg-gradient-to-l from-transparent via-black to-transparent h-[3px] mt-2" />
        <div className="p-7 ">
          <Slider {...settings}>
            {POPULAR.map((item) => (
              <div className="px-4" key={item.id}>
                <Item
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Popular;
