import Carousel from "react-bootstrap/Carousel";

import Image from "next/image";

import image1 from "../../../public/images/banner1.png";
import image2 from "../../../public/images/banner2.png";
import image3 from "../../../public/images/banner3.png";

function Banner() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <Image
            className="d-block w-100 h-auto"
            alt="First slide"
            src={image1}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100 h-auto"
            alt="Second slide"
            src={image2}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100 h-auto"
            alt="Third slide"
            src={image3}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
