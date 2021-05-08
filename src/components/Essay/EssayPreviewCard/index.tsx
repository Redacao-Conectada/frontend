import DetailedEssayCard from '@/components/Essay/DetailedEssayCard';
import { Essay } from '@/definitions/general';
import React from 'react';
import {} from './styles';

interface EssayPreviewCardProps {
  sort: string;
  essayList: Essay[];
}

interface SortFunctions {
  [index: string]: (essay1: Essay, essay2: Essay) => number;
}

const EssayPreviewCard: React.FC<EssayPreviewCardProps> = ({
  essayList,
  sort,
}) => {
  const preview = true;

  const sortFunctions: SortFunctions = {
    Votos: (essay1: Essay, essay2: Essay) =>
      essay1.numOfStars < essay2.numOfStars ? 1 : -1,
    Comentários: (essay1: Essay, essay2: Essay) =>
      essay1.numOfComments < essay2.numOfComments ? 1 : -1,
    Nota: (essay1: Essay, essay2: Essay) => {
      console.log(
        essay1.total,
        essay2.total,
        essay1.total < essay2.total ? 1 : -1,
      );
      return essay1.total < essay2.total ? 1 : -1;
    },
  };

  const essayListSorted = essayList.sort(sortFunctions[sort]);
  console.log(essayListSorted);
  const listEssays = essayListSorted.map((essay) => (
    <DetailedEssayCard key={essay.id} preview={preview} essay={essay} />
  ));
  return <>{listEssays}</>;
};

export default EssayPreviewCard;
