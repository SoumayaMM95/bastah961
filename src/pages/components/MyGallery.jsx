import ImageGallery from 'react-image-gallery';

import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
const images = [
  {
    original: './images/product.png',
    thumbnail: './images/product.png',
  },
  {
    original: './images/image1.jpg',
    thumbnail: './images/image1.jpg',
  },
  {
    original: './images/image3.png',
    thumbnail: './images/image3.png',
  },
  {
    original: './images/product.png',
    thumbnail: './images/product.png',
  },
  {
    original: './images/image1.jpg',
    thumbnail: './images/image1.jpg',
  },
  {
    original: './images/image3.png',
    thumbnail: './images/image3.png',
  },
];

function  MyGallery () {
  {
    return <ImageGallery items={images} />;
  }
}
export default MyGallery;
