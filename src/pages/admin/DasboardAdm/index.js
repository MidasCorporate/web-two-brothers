/**
 * OS COMPONENTE ABOUT E EVALUENTION ESTA DISPONIVEL PARA FUTUROS UPGRADES
 */

import React from 'react';

import { Container, Grid } from './styles/styles';

import Header from '~/components/HeaderAdm';
import BannerFunction from './Banner';
// import AboutFunction from './About';
// import EvaluentionFunction from './Evaluention';
import MessageFunction from './Message';

export default function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <Grid>
          <BannerFunction />
          {/* <AboutFunction /> */}
          {/* <EvaluentionFunction /> */}
          <MessageFunction />
        </Grid>
      </Container>
    </>
  );
}
