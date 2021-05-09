import DetailedEssayCard from '@/components/Pages/Essay/DetailedEssayCard';
import { Essay } from '@/definitions/general';
import React from 'react';
import Skeleton from 'react-loading-skeleton';

interface EssayPreviewCardProps {
  sort: string;
  essayList: Essay[];
  isLoading: boolean;
}

interface SortFunctions {
  [index: string]: (essay1: Essay, essay2: Essay) => number;
}

const EssayPreviewCard: React.FC<EssayPreviewCardProps> = ({
  essayList,
  sort,
  isLoading,
}) => {
  const preview = true;

  const sortFunctions: SortFunctions = {
    Votos: (essay1: Essay, essay2: Essay) =>
      essay1.numOfStars < essay2.numOfStars ? 1 : -1,
    Comentários: (essay1: Essay, essay2: Essay) =>
      essay1.totalComments < essay2.totalComments ? 1 : -1,
    Nota: (essay1: Essay, essay2: Essay) =>
      essay1.total < essay2.total ? 1 : -1,
  };

  const essayListSorted = essayList.sort(sortFunctions[sort]);
  const listEssays = essayListSorted.map((essay) => (
    <DetailedEssayCard key={essay.id} preview={preview} essay={essay} />
  ));
  return <> {isLoading ? <Skeleton height="150px" /> : listEssays}</>;
};

export default EssayPreviewCard;
