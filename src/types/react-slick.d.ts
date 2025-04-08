declare module "react-slick" {
    import { Component } from "react";
  
    interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      autoplaySpeed?: number;
      arrows?: boolean;
      adaptiveHeight?: boolean;
      className?: string;
    }
  
    export default class Slider extends Component<Settings> {}
  }
  