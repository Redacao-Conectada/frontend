// import Evaluator from '@/components/Evaluator';
import EssayPreviewCard from '@/components/EssayPreviewCard';
import Evaluator from '@/components/EvaluatorCard';
import { CenteredContainer } from '@styles/publicRoutes';
import { ratingList, essayList } from '@utils/mocks';

import React from 'react';

const ProfileView: React.FC = () => {
  return (
    <CenteredContainer>
      <Evaluator
        evaluator={ratingList.evaluator}
        ratedEssays={ratingList.evaluator.ratedEssays}
      />
      <EssayPreviewCard essayList={essayList.list} />
    </CenteredContainer>
  );
};

export default ProfileView;
