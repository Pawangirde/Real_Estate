import React from 'react';

const Cities = () => {
  // Sample data for the cities
  const cities = [
    { name: 'Mumbai', imageUrl: '/image/mumbai.jpg', properties: '2000+' },
    { name: 'Delhi', imageUrl: '/image/delhi.jpg', properties: '1500+' },
    { name: 'Bangalore', imageUrl: '/image/banglore.jpg', properties: '1800+' },
    { name: 'Chennai', imageUrl: '/image/chennai.jpg', properties: '1300+' },
    { name: 'Hyderabad', imageUrl: '/image/hyderabad.jpg', properties: '1400+' },
    { name: 'Kolkata', imageUrl: '/image/kolkatta.jpg', properties: '1200+' },
    { name: 'Pune', imageUrl: '/image/pune.jpg', properties: '1100+' },
    { name: 'Ahmedabad', imageUrl: '/image/ahemdabad.jpg', properties: '1000+' },
  ];

  return (
    <section className="py-8 px-4 lg:px-20 mb-5 bg-gray-100">
      <p className="text-center text-lg lg:text-xl text-gray-600 mb-4">Top Cities</p>
      <h1 className="text-center text-2xl lg:text-3xl font-bold text-gray-800 mb-5 tracking-wide">Explore Real Estate in Popular Indian Cities</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cities.map((city, index) => (
          <div key={index} className="flex bg-blue-100 shadow-lg  overflow-hidden transition-transform transform ">
            <img 
              src={city.imageUrl} 
              alt={city.name} 
              className="w-1/3 h-full object-cover rounded-lg hover:scale-105"
            />
            <div className="w-2/3 p-1 ml-4 flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-gray-800">{city.name}</h3>
              <p className="text-gray-600 text-sm">{city.properties} properties</p>
              <a 
                href="citywiseproperties"
                className="mt-4 text-blue-600 hover:text-blue-800"
              >
                View Properties
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cities;



// slider code
// import React from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Cities = () => {
  
//   const cities = [
//     { name: 'Mumbai', imageUrl: '/image/mumbai.jpg', properties: '2000+' },
//     { name: 'Delhi', imageUrl: '/image/delhi.jpg', properties: '1500+' },
//     { name: 'Bangalore', imageUrl: '/image/banglore.jpg', properties: '1800+' },
//     { name: 'Chennai', imageUrl: '/image/chennai.jpg', properties: '1300+' },
//     { name: 'Hyderabad', imageUrl: '/image/hyderabad.jpg', properties: '1400+' },
//     { name: 'Kolkata', imageUrl: '/image/kolkatta.jpg', properties: '1200+' },
//     { name: 'Pune', imageUrl: '/image/pune.jpg', properties: '1100+' },
//     { name: 'Ahmedabad', imageUrl: '/image/ahemdabad.jpg', properties: '1000+' },
//   ];

  
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };

//   return (
//     <section className="py-8 px-4 lg:px-20 mb-5 bg-blue-100">
//       <p className="text-center text-lg lg:text-xl text-gray-600 mb-4">Top Cities</p>
//       <h1 className="text-center text-2xl lg:text-3xl font-bold text-gray-800 mb-5 tracking-wide">
//         Explore Real Estate in Popular Indian Cities
//       </h1>
      
//       <Slider {...settings}>
//         {cities.map((city, index) => (
//           <div key={index} className="p-2">
//             <div className="flex bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
//               <img 
//                 src={city.imageUrl} 
//                 alt={city.name} 
//                 className="w-1/3 h-full object-cover"
//               />
//               <div className="w-2/3 p-4 flex flex-col justify-center">
//                 <h3 className="text-lg font-semibold text-gray-800">{city.name}</h3>
//                 <p className="text-gray-600 text-sm mt-2">{city.properties} properties</p>
//                 <a 
//                   href="citywiseproperties"
//                   className="mt-4 text-blue-600 hover:text-blue-800"
//                 >
//                   View Properties
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// }

// export default Cities;
