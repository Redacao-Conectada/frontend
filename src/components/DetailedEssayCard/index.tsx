import { Essay } from '@/interfaces/general';
import { icons } from '@assets/icons';
import React from 'react';
import {
  AuthorContainer,
  DateContainer,
  EssayCardContainer,
  FooterContainer,
  HeaderContainer,
  MoreInfoContainer,
  StarsCounter,
} from './styles';

interface DetailedEssayCardProps {
  width?: string;
  essay: Essay;
}

const DetailedEssayCard: React.FC<DetailedEssayCardProps> = ({
  essay,
  width,
}) => {
  const defaultAvatar =
    'https://www.ecp.org.br/wp-content/uploads/2017/12/default-avatar-1-300x300.png';

  // TODO: fazer estrela ficar amarela quando curtido.
  // TODO: fazer gerenciamento de estado

  return (
    <EssayCardContainer width={width || '314px'}>
      <HeaderContainer>
        <h2>{essay.title}</h2>
        <a>{icons.pen}</a>
      </HeaderContainer>
      <p>{essay.text}</p>
      <FooterContainer>
        <StarsCounter>
          {icons.star}
          <a>{essay.numOfStars}</a>
        </StarsCounter>
        <MoreInfoContainer>
          <DateContainer>
            <p>
              em <b>{essay.date}</b>
            </p>
          </DateContainer>
          <AuthorContainer>
            <b>{essay.author.name}</b>
            <img
              alt={essay.author.name}
              src={essay.author.avatar ? essay.author.avatar : defaultAvatar}
            />
          </AuthorContainer>
        </MoreInfoContainer>
      </FooterContainer>
    </EssayCardContainer>
  );
};

export default DetailedEssayCard;
