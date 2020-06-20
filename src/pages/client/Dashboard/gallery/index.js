import React, { useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import ImgComp from './ImgComp';
import twobrothers from '~/assets/fundo1.jpg';
import twobrobuy from '~/assets/twobrobuy.jpg';
import carro1 from '~/assets/carro1.jpg';
import carro2 from '~/assets/carro2.jpg';
import moto from '~/assets/23.jpg';

import { Container, Title, Content } from './styles';

function Gallery() {
  const [x, setX] = useState(0);

  const sliderArr = [
    <ImgComp src={twobrothers} />,
    <ImgComp src={twobrobuy} />,
    <ImgComp src={carro1} />,
    <ImgComp src={carro2} />,
    <ImgComp src={moto} />,
  ];

  function goLeft() {
    // eslint-disable-next-line no-unused-expressions
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  }

  function goRight() {
    // eslint-disable-next-line no-unused-expressions
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  }

  return (
    <Container>
      <Title>
        <h3>Galeria</h3>
      </Title>
      <Content>
        {sliderArr.map((slide) => {
          return (
            <div
              className="slide"
              key={slide}
              style={{ transform: `translateX(${x}%)` }}
            >
              {slide}
            </div>
          );
        })}

        <button id="goLeft" type="button" onClick={goLeft}>
          <MdChevronLeft size={60} />
        </button>
        <button id="goRight" type="button" onClick={goRight}>
          <MdChevronRight size={60} />
        </button>
      </Content>
    </Container>
  );
}

export default Gallery;
