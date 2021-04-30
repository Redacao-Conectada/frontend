// import KeywordsListContainer from '@/components/KeywordsListContainer';
import { icons } from '@assets/icons';
import { CenteredContainer } from '@styles/publicRoutes';
import { keywordsList } from '@utils/mocks';
import React from 'react';
import { KeywordsContainer } from './styles';

const EssayRating: React.FC = () => {
  console.log(keywordsList);

  const getKeywords = keywordsList.map((keyword) => (
    <li key={keyword}>
      {keyword}
      <span> {icons.search} </span>
    </li>
  ));

  return (
    <CenteredContainer>
      <KeywordsContainer>
        <ul className="bolinha">{getKeywords}</ul>
      </KeywordsContainer>
    </CenteredContainer>
  );
};

export default EssayRating;
