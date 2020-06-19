/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

// import { Link } from 'react-router-dom';

import { MdNavigateNext } from 'react-icons/md';

import {
  Intro,
  IntroBody,
  Container,
  Row,
  Coll,
  Footer,
  Banner,
  DivBottomBanner,
} from './styles';
import logo from '~/assets/logo.png';
import Service from './Services';
import AboutClient from '~/pages/client/Dashboard/About';
import Reviews from '~/pages/client/Dashboard/Reviews';
import Contact from '~/pages/client/Dashboard/Contact';
import Header from '~/components/Header';

import '~/styles/leaflet.css';

import api from '~/services/api';
// import history from '~/services/history';

function Dashboard() {
  const position = {
    lat: -19.3949988,
    lng: -54.5728501,
  };

  const [bannerCarrocel, setBannerCarrossel] = useState([]);
  const [teste, setTest] = useState('');

  const [number, setNumber] = useState();

  const [tag, setTag] = useState(false);
  const [opacity, setOpacity] = useState('');
  const [displayLogo, setDisplayLogo] = useState('');
  const [bannerAutomatic, setBannerAutomatic] = useState(true);

  useEffect(() => {
    async function loadBanner() {
      const response = await api.get('files/imgBanner');
      const { data } = response;

      if (data.length > 0) {
        const { file, opacity, displayLogo } = data[0];

        const arrayImg = file.map((item) => item.url);

        setOpacity(opacity);

        setDisplayLogo(displayLogo);
        setBannerCarrossel(arrayImg);
      }
      setNumber(true);
    }
    loadBanner();
  }, []);

  useEffect(() => {
    async function loadBanerLoop() {
      if (bannerAutomatic) {
        if (bannerCarrocel.length === 1) {
          setTest(bannerCarrocel[0]);
          return;
        }
        setTimeout(() => {
          if (bannerCarrocel[number] !== undefined) {
            setNumber(number + 1);

            setTest(bannerCarrocel[number]);

            setTag(!tag);
          }
        }, 10000);
        if (bannerCarrocel[number] === undefined) {
          setNumber(0);
        }

        setTimeout(() => {
          setTag(!tag);
        }, 10000);
      }
    }
    loadBanerLoop();
  }, [number, tag, bannerAutomatic, bannerCarrocel]);

  function handleClickAdvanceBanner() {
    setBannerAutomatic(false);
    if (bannerCarrocel[number] !== undefined) {
      setNumber(number + 1);

      setTest(bannerCarrocel[number]);
      setTag(!tag);
      return;
    }
    if (bannerCarrocel[number] === undefined) {
      setNumber(0);
    }
  }

  // function handlePageSingIn() {
  //   history.push('/adm');
  // }

  return (
    <>
      <Header />
      <Intro id="inicio">
        <Banner opacity={opacity} tag={tag} urlImg={teste}>
          {/* <Banner> */}
          <div />
        </Banner>
        <IntroBody>
          <Container>
            <Row>
              <Coll display={displayLogo}>
                {/* <Coll> */}
                <div>
                  <img src={logo} alt="logo" />
                </div>
                <h1>
                  Two <span>Brothers</span>
                </h1>
                <p> Especialistas em saude automobilistica</p>
                <a href="#sobre">Saber Mais</a>{' '}
              </Coll>
            </Row>
          </Container>
          <DivBottomBanner>
            {/* <button type="button"> */}
            <button type="button" onClick={handleClickAdvanceBanner}>
              <MdNavigateNext />
            </button>
          </DivBottomBanner>
        </IntroBody>
      </Intro>
      <AboutClient />
      <Service />
      <Reviews />
      <Contact />
      <Map scrollWheelZoom={false} center={position} zoom={15}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <strong>Two Brothers</strong> <br /> o melhor tratamento para seu
            veiculo.
          </Popup>
        </Marker>
      </Map>
      <Footer>
        <span>
          <div>
            <strong>Two Brothers &copy;</strong>
            2020 - Todos os direitos reservados -
            <strong>
              <a href="/adm">Acessar</a>
            </strong>
          </div>
        </span>
      </Footer>
    </>
  );
}

export default Dashboard;
