import { icons } from '@/assets/icons';
import { TagSwitcher, Input } from '@/components/General';
import { General } from '@/definitions';
import { TagOptionList } from '@/definitions/tag';
import api from '@/services/api';
import { CenteredContainer, Header } from '@/styles/general';
import UserCard from '@components/Pages/Admin/UserCard';
import React, { useState, useEffect } from 'react';

import toast from 'react-hot-toast';
import { TagContainer } from './styles';

const tagOptions: TagOptionList = [
  { label: 'Todos', icon: icons.users },
  { label: 'Aluno', icon: icons.textFile },
  { label: 'Corretor', icon: icons.clipboard },
];

interface Data {
  activeOption: string;
  searchField: General.Value;
  [index: string]: any;
}
const initialData: Data = {
  activeOption: tagOptions[0].label,
  searchField: General.initialValue,
};

const UsersList: React.FC = () => {
  const [data, setData] = useState(initialData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/admin');
      } catch (err) {
        toast.error('Erro ao buscar usuários');
      }
    };

    fetchData();
  }, []);

  const handleTag = (name: string, value: string) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setData({
      ...data,
      [name]: {
        ...data[name],
        value,
      },
    });
  };

  return (
    <CenteredContainer gapSize="16px">
      <Header>Usuários</Header>
      <Input
        entity={data.searchField}
        name="searchField"
        type="search"
        onChange={handleSearch}
        placeholder="Nome do usuário"
      />
      <TagContainer>
        <TagSwitcher
          name="activeOption"
          value={data.activeOption}
          options={tagOptions}
          onChange={handleTag}
        />
      </TagContainer>
      <UserCard userRole="evaluator">Adriana Souza Pereira</UserCard>
      <UserCard userRole="student">Jarbas Claudiney Júnior Farias</UserCard>
    </CenteredContainer>
  );
};

export default UsersList;
