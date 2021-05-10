// import Evaluator from '@/components/Evaluator';
import { icons } from '@/assets/icons';
import { TagSwitcher } from '@/components/General';
import EssayPreviewCard from '@/components/Pages/Essay/EssayPreviewCard';
import { EssayApi, Essay } from '@/definitions/general';
import { TagOptionList } from '@/definitions/tag';
import api from '@/services/api';
import Mappers from '@/utils/mappers';
import { CenteredContainer, Header } from '@styles/general';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface Data {
  activeOption: string;
}

const tagOptions: TagOptionList = [
  { label: 'Votos', icon: icons.emptyStar },
  { label: 'Comentários', icon: icons.chat },
  { label: 'Nota', icon: icons.award },
];

const initialData: Data = {
  activeOption: tagOptions[0].label,
};

const EssayFeed: React.FC = () => {
  const [essays, setEssays] = useState<Essay[]>([]);
  const [data, setData] = useState(initialData);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/essays`)
      .then((res) => {
        const essaysApi = res.data.content;

        const allEssays: Essay[] = essaysApi.map((es: EssayApi) => {
          const author = {
            id: es.author,
            name: es.authorName ? es.authorName : '',
            avatar: es.authorImage,
          };
          return Mappers.essayApiToEssay(es, author);
        });

        setEssays(allEssays);
      })
      .catch((err) => {
        toast.error('Falha ao carregar as redações');
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handleSelectOption = (name: string, value: string) => {
    setData({
      ...data,
      [name as keyof Data]: value,
    });
  };

  return (
    <CenteredContainer>
      <Header>Lista de Redações</Header>
      <TagSwitcher
        options={tagOptions}
        onChange={handleSelectOption}
        name="activeOption"
        value={data.activeOption}
      />
      <EssayPreviewCard
        sort={data.activeOption}
        essayList={essays}
        isLoading={isLoading}
      />
    </CenteredContainer>
  );
};

export default EssayFeed;
