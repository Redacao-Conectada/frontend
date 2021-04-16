import React from 'react';
import { EssayCardContainer, HeaderContainer } from './styles';

const EssayCard: React.FC = () => {
  const redacao = {
    texto:
      'wei fp oj w e fojwefow iefjhwkjl fçhnsdk.fjh sdkjfçshdfkjlsdhf skdjfshdf',
    titulo: 'Hey you there, teste!',
    autor: {
      nome: 'Guilherme Carneiro',
    },
    data: '23/03/1980',
    curtidas: 900,
  };

  return (
    <EssayCardContainer>
      <HeaderContainer>
        <h2>{redacao.titulo}</h2>
      </HeaderContainer>
      <p>{redacao.texto}</p>
      <div>
        <a>{redacao.curtidas}</a>
        <div>
          em {redacao.data}
          <div>{redacao.autor.nome}</div>
        </div>
      </div>
    </EssayCardContainer>
  );
};

export default EssayCard;
