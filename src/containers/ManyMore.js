import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";


const ManyMore = () => {
  // Sample data for the cards
  const cards = [
    {
      id: 1,
      title: "Residental Apartments",
      number: "2000",
    //   subtitle: "properties",
      imageUrl: "/image/ap.jpg",
    },
    {
      id: 2,
      title: "Residental Land",
      number: "2000",
      imageUrl: "/image/residentalland.jpg",
    },
    {
      id: 3,
      title: "Independant House/Villa",
      number: "2000",
      imageUrl: "/image/villavilla.jpg",
    },
    {
      id: 4,
      title: "Floor House",
      number: "2000",
      imageUrl: "/image/socity.jpg",
    },
    {
      id: 5,
      title: "Studio Apartment",
      number: "2000",
      imageUrl: "/image/studio.jpg",
    },
    {
        id: 6,
        title: "Farm House",
        number: "2000",
        imageUrl: "/image/farmhouse.jpg",
      },
    //   {
    //     id: 7,
    //     title: "Services Apartment",
    //     subtitle: "Urban Lifestyle",
    //     imageUrl: "/image/loft.jpg",
    //   },
  ];

  // Slider settings
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-10 px-4 lg:px-20 bg-indigo-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 tracking-wide">Apartments, Villas and more</h2>
          <p className="text-lg text-gray-600">Discover more properties</p>
        </div>
        <Slider {...settings} className="slider-container">
          {cards.map((card) => (
            <div key={card.id} className="px-2">
                 <Link to={'/property'}>
            <div
                className="relative h-80 bg-cover bg-center rounded-lg "
                style={{ backgroundImage: `url(${card.imageUrl})` }}
                >
                <div className="absolute top-0 left-0 right-0 p-4  bg-opacity-50 rounded-t-lg text-blue-950">
                  <h3 className="text-2xl font-semibold">{card.title}</h3>
                  <p className="text-sm">{card.number} Properties</p>
                  {/* <p className="text-sm">{card.subtitle}</p> */}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
            </div>
            </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ManyMore;
