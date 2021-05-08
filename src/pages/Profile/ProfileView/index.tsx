// import Evaluator from '@/components/Evaluator';
import EssayPreviewCard from '@/components/EssayPreviewCard';
import EvaluatorCard from '@/components/EvaluatorCard';
import { TagSwitcher } from '@/components/General';
import StudentCard from '@/components/StudentCard';
import { User, Evaluator, Student } from '@/interfaces/general';
import { icons } from '@assets/icons';
import { TagOptionList } from '@definitions/tag';
import { CenteredContainer } from '@styles/publicRoutes';
import { evaluator, student, essayList } from '@utils/mocks';
import React, { useState } from 'react';

const user: User = student;

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

  const handleSelectOption = (name: string, value: string) => {
    setData({
      ...data,
      [name as keyof Data]: value,
    });
  };
  console.log(data);
  return (
    <CenteredContainer>
      {user.roleName === 'teacher' && (
        <EvaluatorCard
          evaluator={evaluator}
          ratedEssays={evaluator.ratedEssays}
        />
      )}

      {user.roleName === 'student' && (
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
