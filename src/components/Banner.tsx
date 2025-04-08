import React, { useState, useEffect } from "react";

interface BannerProps {
  images: { desktop: string; mobile: string; url: string }[];
  height?: string;
  interval?: number;
  altText?: string;
  showArrows?: boolean; 
}

const Banner: React.FC<BannerProps> = ({
  images,
  altText = "Banner",
  height = "auto",
  interval = 5000,
  showArrows = true, 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageUrl, setImageUrl] = useState(images[0].desktop);

  useEffect(() => {
    const handleResize = () => {
      setImageUrl(
        window.innerWidth <= 768
          ? images[currentIndex].mobile
          : images[currentIndex].desktop
      );
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex, images]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div>
      <div className="w-full overflow-hidden relative mb-12" style={{ height }}>
        <a
          href={images[currentIndex].url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={imageUrl}
            alt={altText}
            className="w-full h-full object-cover cursor-pointer"
          />
        </a>

        {showArrows && (
          <>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#f3cfcf] w-8 h-16   rounded-r-full flex items-center justify-center shadow-md cursor-pointer"
            >
              <span className="text-gray-800 text-xl mr-2 ">ᐸ</span>
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#f3cfcf] w-8 h-16 rounded-l-full flex items-center justify-center shadow-md cursor-pointer"
            >
              <span className="text-gray-800 text-xl center ml-2  ">ᐳ</span>
            </button>
          </>
        )}

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 transition-all duration-300 ${
                index === currentIndex
                  ? "border-red-600 bg-red-600"
                  : "border-gray-300 bg-white"
              }`}
              aria-label={`Ir al slide ${index + 1}`}
              aria-current={index === currentIndex}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
