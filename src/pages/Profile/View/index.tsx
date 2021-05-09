// import Evaluator from '@/components/Evaluator';
import { TagSwitcher } from '@/components/General';
import EssayPreviewCard from '@/components/Pages/Essay/EssayPreviewCard';
import EvaluatorCard from '@/components/Pages/Profile/EvaluatorCard';
import StudentCard from '@/components/Pages/Profile/StudentCard';
import { Essay, EssayApi, User, UserRole } from '@/definitions/general';
import api, { hasAuthority } from '@/services/api';
import Mappers from '@/utils/mappers';
import { icons } from '@assets/icons';
import { TagOptionList } from '@definitions/tag';
import { CenteredContainer, Header } from '@styles/general';
import { evaluator } from '@utils/mocks';
import React, { useEffect, useState } from 'react';

const tagOptions: TagOptionList = [
  { label: 'Votos', icon: icons.emptyStar },
  { label: 'Comentários', icon: icons.chat },
  { label: 'Nota', icon: icons.award },
];

interface Data {
  activeOption: string;
}

interface ProfileViewProps {
  match: any;
}

const initialData: Data = {
  activeOption: tagOptions[0].label,
};

const ProfileView: React.FC<ProfileViewProps> = (props) => {
  const [data, setData] = useState(initialData);

  const [userProfile, setUserProfile] = useState<User>();
  const [essays, setEssays] = useState<Essay[]>();

  useEffect(() => {
    // Busca Usuário pelo id do path
    api.get(`/users/${props.match.params.id}`).then((res) => {
      const userApi = res.data;
      const user = Mappers.userApiToUser(userApi);
      setUserProfile(user);

      // Busca Essays do usuário pelo id do path
      api.get(`/essays/users/${props.match.params.id}`).then((r) => {
        const essaysApi = r.data;
        const userEssays = essaysApi.map((es: EssayApi) =>
          Mappers.essayApiToEssay(es, user),
        );
        setEssays(userEssays);
      });
    });
  }, []);

  const handleSelectOption = (name: string, value: string) => {
    setData({
      ...data,
      [name as keyof Data]: value,
    });
  };

  return (
    <CenteredContainer>
      <Header>Perfil</Header>
      {hasAuthority(UserRole.ROLE_TEACHER) && userProfile && (
        <EvaluatorCard
          evaluator={userProfile}
          ratedEssays={evaluator.ratedEssays}
        />
      )}

      {hasAuthority(UserRole.ROLE_STUDENT) && userProfile && (
        <StudentCard
          student={userProfile}
          writtenEssays={essays ? essays.length : 0}
        />
      )}

      <TagSwitcher
        options={tagOptions}
        onChange={handleSelectOption}
        name="activeOption"
        value={data.activeOption}
      />
      <EssayPreviewCard sort={data.activeOption} essayList={essays || []} />
    </CenteredContainer>
  );
};

export default ProfileView;
