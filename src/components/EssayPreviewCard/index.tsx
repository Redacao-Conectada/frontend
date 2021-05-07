import { Essay } from '@/interfaces/general';
import DetailedEssayCard from '@components/DetailedEssayCard';
import React from 'react';
import {} from './styles';

interface EssayPreviewCard {
  essayList: Essay[];
}

const EssayPreviewCard: React.FC<EssayPreviewCard> = ({ essayList }) => {
  // TODO: fazer estrela ficar amarela quando curtido.
  // TODO: fazer gerenciamento de estado
  const preview = true;

  const listEssays = essayList.map((essay) => (
    <DetailedEssayCard preview={preview} essay={essay} />
  ));
  return <>{listEssays}</>;
};

export default EssayPreviewCard;
