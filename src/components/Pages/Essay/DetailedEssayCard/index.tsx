import { InteractiveStarIcon } from '@/components/InteractiveIcon';
import { Essay } from '@/definitions/general';
import api from '@/services/api';
import { icons } from '@assets/icons';
import ShowGrade from '@components/Pages/Essay/ShowGrade';
import React, { useState } from 'react';
import {
  AuthorContainer,
  DateContainer,
  EssayCardContainer,
  FooterContainer,
  HeaderContainer,
  MoreInfoContainer,
  StarsCounter,
  IconsContainer,
} from './styles';

interface DetailedEssayCardProps {
  width?: string;
  preview?: boolean;
  comments?: boolean;
  essay: Essay;
}

const defaultAvatar =
  'https://www.ecp.org.br/wp-content/uploads/2017/12/default-avatar-1-300x300.png';

const DetailedEssayCard: React.FC<DetailedEssayCardProps> = ({
  essay,
  preview,
}) => {
  // TODO: fazer estrela ficar amarela quando curtido.
  // TODO: fazer gerenciamento de estado

  const [isStarred, setIsStarred] = useState(essay.isStarred);
  const [numOfStars, setNumOfStars] = useState(essay.numOfStars);

  const handleStarClick = () => {
    console.log(isStarred);
    if (isStarred) {
      api.put(`/essays/${essay.id}/downvote`).then(() => setIsStarred(false));
      setNumOfStars(numOfStars - 1);
    } else {
      api.put(`/essays/${essay.id}/upvote`).then(() => setIsStarred(true));
      setNumOfStars(numOfStars + 1);
    }
  };

  type Grades = '+900' | '+800' | '+700' | '+600' | '+500' | '-500' | 'noGrade';

  const getGrade = (): Grades => {
    const grade = essay.total;
    if (!grade) {
      return 'noGrade';
    }
    if (grade < 499) {
      return '-500';
    }
    const gradeMod = Math.min(Math.floor(grade / 100), 9);
    return `+${gradeMod}00` as Grades;
  };

  return (
    <EssayCardContainer>
      <HeaderContainer>
        <h2>{essay.title}</h2>
        {preview && <ShowGrade grade={getGrade()} />}
      </HeaderContainer>
      <div className={preview ? 'previewGradient' : ''}>
        <p className={preview ? 'previewText' : ''}>{essay.text}</p>
      </div>
      <FooterContainer>
        <StarsCounter>
          <IconsContainer>
            <InteractiveStarIcon
              onClick={handleStarClick}
              isFilled={isStarred}
            />
            <span>{numOfStars}</span>
          </IconsContainer>
          {preview && (
            <IconsContainer>
              {icons.comments}
              <span>{essay.numOfComments}</span>
            </IconsContainer>
          )}
        </StarsCounter>
        <MoreInfoContainer>
          <DateContainer>
            <p>
              em <b>{essay.date}</b>
            </p>
          </DateContainer>
          <AuthorContainer>
            <b>{essay.author?.name}</b>
            <img
              alt={essay.author?.name}
              src={essay.author?.avatar ? essay.author.avatar : defaultAvatar}
            />
          </AuthorContainer>
        </MoreInfoContainer>
      </FooterContainer>
    </EssayCardContainer>
  );
};

export default DetailedEssayCard;
