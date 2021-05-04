// import KeywordsListContainer from '@/components/KeywordsListContainer';
import { icons } from '@assets/icons';
import { CenteredContainer } from '@styles/publicRoutes';
import React from 'react';
import { KeywordsContainer } from './styles';

interface EssayKeywordsProps {
  keywords: Array<string>;
}

const EssayKeywords: React.FC<EssayKeywordsProps> = ({ keywords }) => {
  const getKeywords = keywords.map((keyword) => (
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

export default EssayKeywords;
