import React from 'react';

import { Wrapper, Container, Title, Content, Review } from './styles';

function Reviews() {
  return (
    <Wrapper>
      <Container>
        <Title>
          <h2>Avaliações</h2>
        </Title>
        <Content>
          <Review>
            <span>
              <div>
                <p>É nois trabalho de qualidade parabens super recomendado</p>
              </div>
              <strong>Roberson Martini </strong>
            </span>
          </Review>
          <Review>
            <span>
              <div>
                <p>
                  Top meu amigo sgo precisa de bons profissionais sucesso aí
                  vale a pena conferir os trabalhos de vcs abraço.👏👏
                </p>
              </div>
              <strong>Paulo Tapparo </strong>
            </span>
          </Review>
          <Review>
            <span>
              <div>
                <p>
                  Resultado final que espera. A two Brothers sempre cuidando do
                  que é seu.
                </p>
              </div>
              <strong>Romell Saymon Leite Rodrigues </strong>
            </span>
          </Review>
        </Content>
      </Container>
    </Wrapper>
  );
}

export default Reviews;
