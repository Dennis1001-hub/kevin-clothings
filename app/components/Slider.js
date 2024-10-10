"use client";

import { useEffect, useState } from "react";

const Slider = () => {
  const imgList = [
    {
      id: 1,
      src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Faeie.pk%2Fhappy-new-year-2022-banner-with-soccer-jersey-football-tt-bVXnaNF4&psig=AOvVaw15-be1vs-Fi5TfjbITj-w4&ust=1728233660912000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPitvp_a94gDFQAAAAAdAAAAABAQ",
    },
    {
      id: 2,
      src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fimage-vector%2Fhappy-new-year-2020-banner-soccer-1562839798&psig=AOvVaw15-be1vs-Fi5TfjbITj-w4&ust=1728233660912000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPitvp_a94gDFQAAAAAdAAAAABAY",
    },
    {
      id: 3,
      src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.behance.net%2Fgallery%2F125061677%2FRakow-Arka-football-banner&psig=AOvVaw0j5E3QaB6uMImq0biDQyhm&ust=1728233289748000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMiNgtnd94gDFQAAAAAdAAAAABAE",
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
