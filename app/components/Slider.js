"use client";

import { useEffect, useState } from "react";

const Slider = () => {
  const imgList = [
    {
      id: 1,
      src: "https://media.istockphoto.com/id/1167352422/vector/set-of-new-stickers-sale-tags-and-labels-shopping-stickers-and-badges-for-merchandise-and.jpg?s=1024x1024&w=is&k=20&c=9MWm7Fxy98pswRcQ8-q0YNDTD3ff_nLIk86ORDszTss=",
    },
    {
      id: 2,
      src: "https://media.istockphoto.com/id/1133988153/photo/man-shooping-for-rice.jpg?s=1024x1024&w=is&k=20&c=G9fw7NRBQjShRaHPEfPMQGPi8pClyYsDuZwj-I7us5g=",
    },
    {
      id: 3,
      src: "https://media.istockphoto.com/id/1300356842/photo/female-customer-putting-grocery-products-in-shop-cart-in-supermarket.jpg?s=1024x1024&w=is&k=20&c=jrpJsWDqsIZWh_t_ZCjwDNjwtAYrInXm7j6jz3yhC6o=",
    },
  ];

  const extendedImgList = [...imgList, imgList[0]];

  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        if (prevImage >= imgList.length) {
          setIsTransitioning(false);
          return 0;
        } else {
          setIsTransitioning(true);
          return prevImage + 1;
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [imgList.length]);

  useEffect(() => {
    if (currentImage === 0 && !isTransitioning) {
      setTimeout(() => setIsTransitioning(true), 20);
    }
  }, [currentImage, isTransitioning]);

  return (
    // This 'div' will hide the slider on small screens and show it on medium screens and above
    <div className="hidden md:block">
      <div className="relative w-full h-[500px] overflow-hidden">
        <div
          className={`flex ${
            isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
          }`}
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {extendedImgList.map((image, index) => (
            <div key={index} className="min-w-full h-full flex-shrink-0">
              <img
                src={image.src}
                alt={`Slide ${image.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
