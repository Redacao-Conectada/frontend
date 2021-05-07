// import Evaluator from '@/components/Evaluator';
import EssayPreviewCard from '@/components/EssayPreviewCard';
import EvaluatorCard from '@/components/EvaluatorCard';
import { TagSwitcher } from '@/components/General';
import StudentCard from '@/components/StudentCard';
import { EssayApi, UserRole } from '@/interfaces/general';
import api, { hasAuthority } from '@/service/api';
import Mappers from '@/utils/mappers';
import { icons } from '@assets/icons';
import { TagOptionList } from '@definitions/tag';
import { CenteredContainer } from '@styles/publicRoutes';
import { evaluator, student, essayList } from '@utils/mocks';
import React, { useEffect, useState } from 'react';

const tagOptions: TagOptionList = [
  { label: 'Votos', icon: icons.emptyStar },
  { label: 'Comentários', icon: icons.chat },
  { label: 'Nota', icon: icons.award },
];

interface Data {
  activeOption: string;
}

const initialData: Data = {
  activeOption: tagOptions[0].label,
};

const ProfileView: React.FC = () => {
  const [data, setData] = useState(initialData);

  const [essays, setEssays] = useState();

  useEffect(() => {
    api.get('/essays').then((res) => {
      const essaysApi = res.data.content;
      console.log(essaysApi);

      // TODO: esperando backend trazer author junto com essay

      // const essaysList: Essay[] = [];
      /* essaysApi.map((essayApi: EssayApi) => {
        // TODO: fazer request em busca do user para associar às Essays
        essaysList = [...essaysList, Mappers.essayApiToEssay(essayApi)];
      }); */
    });
  }, []);

  const handleSelectOption = (name: string, value: string) => {
    setData({
      ...data,
      [name as keyof Data]: value,
    });
  };
  console.log(data);
  return (
    <CenteredContainer>
      {hasAuthority(UserRole.ROLE_TEACHER) && (
        <EvaluatorCard
          evaluator={evaluator}
          ratedEssays={evaluator.ratedEssays}
        />
      )}

      {hasAuthority(UserRole.ROLE_STUDENT) && (
        <StudentCard student={student} writtenEssays={student.writtenEssays} />
      )}

      <TagSwitcher
        options={tagOptions}
        onChange={handleSelectOption}
        name="activeOption"
        value={data.activeOption}
      />
      <EssayPreviewCard sort={data.activeOption} essayList={essayList.list} />
    </CenteredContainer>
  );
};

export default ProfileView;
