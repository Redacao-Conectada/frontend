// import Evaluator from '@/components/Evaluator';
import { icons } from '@/assets/icons';
import EssayPreviewCard from '@/components/EssayPreviewCard';
import { TagSwitcher } from '@/components/General';
import { TagOptionList } from '@/definitions/tag';
import { EssayApi } from '@/interfaces/general';
import api from '@/service/api';
import Mappers from '@/utils/mappers';
import { CenteredContainer } from '@styles/publicRoutes';
import React, { useEffect, useState } from 'react';

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
  const [essays, setEssays] = useState([]);
  const [data, setData] = useState(initialData);

  useEffect(() => {
    api
      .get(`/essays`)
      .then((res) => {
        const essaysApi = res.data.content;

        const allEssays = essaysApi.map((es: EssayApi) => {
          const author = {
            id: es.author,
            name: es.authorName ? es.authorName : '',
            avatar: es.authorImage,
          };
          return Mappers.essayApiToEssay(es, author);
        });
        console.log(allEssays);
        setEssays(allEssays);
      })
      .catch((err) => {
        console.log(err);
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
      <TagSwitcher
        options={tagOptions}
        onChange={handleSelectOption}
        name="activeOption"
        value={data.activeOption}
      />
      <EssayPreviewCard sort={data.activeOption} essayList={essays} />
    </CenteredContainer>
  );
};

export default EssayFeed;
