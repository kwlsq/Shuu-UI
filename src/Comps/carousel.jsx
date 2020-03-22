import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import foto3 from '../img/foto3.jpg'
import foto4 from '../img/foto4.jpg'
import foto5 from '../img/foto5.jpg'
import foto6 from '../img/foto6.jpg'
import '../CSS/carousel.css'

const items = [
  {
    src: foto3,
    altText: 'Slide 1',
    key: '1'
  },
  {
    src: foto4,
    altText: 'Slide 2',
    key: '2'
  },
  {
    src: foto5,
    altText: 'Slide 3',
    key: '3'
  },
  {
    src: foto6,
    altText: 'Slide 4',
    key: '4'
  }
];

const CarouselComp = () => <UncontrolledCarousel className="whole-carousel" items={items} />;

export default CarouselComp;