import { icons } from '@assets/icons';
import React from 'react';
import { EssayCardContainer, HeaderContainer } from './styles';

const EssayCard: React.FC = () => {
  const redacao = {
    texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus tincidunt orci, ac lobortis eros ullamcorper dapibus. Nulla ut libero non nisi gravida pulvinar a sit amet sem. Sed vel ipsum a felis suscipit euismod. Nam vitae bibendum nulla. Morbi venenatis viverra nibh. Proin at pulvinar turpis. Aliquam faucibus maximus ipsum eu venenatis. 
      Nunc aliquam metus sed dolor maximus, nec semper urna gravida. Mauris maximus, nulla sit amet auctor venenatis, mauris velit facilisis orci, eget tincidunt enim dolor ac enim. Phasellus maximus ante sit amet metus ultrices, non porttitor sem auctor. Mauris hendrerit ante in nisl consectetur, eget ultricies magna tristique. Etiam dictum non lectus quis rhoncus. 
      Maecenas lorem erat, pretium ut porttitor sit amet, tincidunt non odio. Nam id imperdiet sem, sit amet bibendum velit. Aenean quis dolor a enim laoreet venenatis. Nulla et dui malesuada, vestibulum mi sit amet, lacinia erat. Curabitur at laoreet est, ac aliquam velit. Praesent laoreet massa efficitur purus vulputate commodo. Nunc varius fermentum lectus non sodales. In vitae elit in mi mattis interdum sit amet eu ex. Fusce sagittis arcu id nisl lobortis, in pharetra justo finibus. Aliquam erat volutpat. 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor lacus nec sodales imperdiet. Vestibulum sollicitudin nunc non lectus posuere, eget tincidunt sapien egestas. Ut cursus quam vel ipsum sagittis, eget pulvinar libero pharetra.`,
    titulo: 'Hey you there, teste!',
    autor: {
      nome: 'Guilherme Carneiro',
    },
    data: '23/03/1980',
    isStared: true,
    curtidas: 900,
  };

  return (
    <EssayCardContainer>
      <HeaderContainer>
        <h2>{redacao.titulo}</h2>
        {icons.pen}
      </HeaderContainer>
      <p>{redacao.texto}</p>
      <div>
        {icons.star}
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
