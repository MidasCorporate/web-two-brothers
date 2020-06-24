import React from 'react';

import { Container, Grid } from './styles/styles';

import Header from '~/components/HeaderAdm';
import BannerFunction from './Banner';
import MessageFunction from './Message';

export default function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <Grid>
          <BannerFunction />
          <MessageFunction />
        </Grid>
      </Container>
    </>
  );
}
