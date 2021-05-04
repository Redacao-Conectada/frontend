import { InteractiveStarIcon } from '@/assets/icons/InteractiveIcon';
import { Essay } from '@/interfaces/general';
import { icons } from '@assets/icons';
import React, { useState } from 'react';
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
  essay: Essay;
}

const defaultAvatar =
  'https://www.ecp.org.br/wp-content/uploads/2017/12/default-avatar-1-300x300.png';

const DetailedEssayCard: React.FC<DetailedEssayCardProps> = ({ essay }) => {
  // TODO: fazer estrela ficar amarela quando curtido.
  // TODO: fazer gerenciamento de estado

  const [isStarred, setIsStarred] = useState(essay.isStarred);

  const handleStarClick = () => {
    setIsStarred(!isStarred);
    // TODO: lança requisição para dar ou retirar estrela
  };

  return (
    <EssayCardContainer>
      <HeaderContainer>
        <h2>{essay.title}</h2>
        <a>{icons.pen}</a>
      </HeaderContainer>
      <p>{essay.text}</p>
      <FooterContainer>
        <StarsCounter>
          <InteractiveStarIcon onClick={handleStarClick} isFilled={isStarred} />
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
