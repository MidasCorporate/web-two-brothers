import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import twobrothers from '~/assets/fundo1.jpg';
import twobrobuy from '~/assets/twobrobuy.jpg';
import antes0 from '~/assets/antes0.jpg';
import depois0 from '~/assets/depois0.jpg';
import moto from '~/assets/23.jpg';
import carro1 from '~/assets/carro1.jpg';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Container, Title, Content, ImgComp } from './styles';

function Gallery() {
  const sliderArr = [
    <ImgComp src={twobrothers} />,
    <ImgComp src={twobrobuy} />,
    <ImgComp src={antes0} />,
    <ImgComp src={depois0} />,
    <ImgComp src={moto} />,
    <ImgComp src={carro1} />,
  ];

  return (
    <Container>
      <Title>
        <h3>Galeria</h3>
      </Title>
      <Content>
        <Carousel>
          {sliderArr.map((slide) => {
            return <>{slide}</>;
          })}
        </Carousel>
      </Content>
    </Container>
  );
}

export default Gallery;
