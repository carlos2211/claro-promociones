import Slider from "react-slick";
import { CSSProperties } from "react";

interface ArrowProps {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

function SampleNextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", }}
      onClick={onClick}
    >
    </div>

  );
}

function SamplePrevArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

const StreamingCarrusel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="max-w-[80%] mx-auto">
      <Slider {...settings}>
        <div>
          <img
            src="https://www.clarochile.cl/portal/cl/recursos_contenido/1708617009508-max_2.webp"
            alt="Imagen 1"
            className="w-10 h-10 mx-auto rounded-lg"
          />
        </div>
        <div>
          <img
            src="https://www.clarochile.cl/portal/cl/recursos_contenido/1708617016330-megago_2.webp"
            alt="Imagen 2"
            className="w-10 h-10 mx-auto  rounded-lg"
          />
        </div>
        <div>
          <img
            src="https://www.clarochile.cl/portal/cl/recursos_contenido/1739458972470-riivi_2.webp"
            alt="Imagen 3"
            className="w-10 h-10 mx-auto  rounded-lg"
          />
        </div>
        <div>
          <img
            src="https://www.clarochile.cl/portal/cl/recursos_contenido/1739458985889-tvnplay_2.webp"
            alt="Imagen 3"
            className="w-10 h-10 mx-auto  rounded-lg"
          />
        </div>
      </Slider>
    </div>
  );
};

export default StreamingCarrusel;
