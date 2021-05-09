// import KeywordsListContainer from '@/components/KeywordsListContainer';
import { icons } from '@assets/icons';
import React from 'react';
import { KeywordsContainer } from './styles';

interface EssayKeywordsProps {
  keywords: string[];
}

const EssayKeywords: React.FC<EssayKeywordsProps> = ({ keywords }) => {
  const getKeywords = keywords.map((keyword) => (
    <li key={keyword}>
      {keyword}
      <span> {icons.search} </span>
    </li>
  ));

  return (
    <>
      <KeywordsContainer>
        <ul className="bolinha">{getKeywords}</ul>
      </KeywordsContainer>
    </>
  );
};

export default EssayKeywords;
