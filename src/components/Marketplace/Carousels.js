import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export function Carousels() {
  return (
    <Carousel autoPlay showThumbs={false}>
      <div>
        <img alt="" src="assets/images/carousel_1.jpg" />
      </div>
      <div>
        <img alt="" src="assets/images/carousel_2.jpg" />
      </div>
      <div>
        <img alt="" src="assets/images/carousel_3.jpg" />
      </div>
    </Carousel>
  );
}
