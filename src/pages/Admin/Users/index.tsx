import { icons } from '@/assets/icons';
import { TagSwitcher, Input } from '@/components/General';
import { General } from '@/definitions';
import { UserApi, User } from '@/definitions/general';
import { TagOptionList } from '@/definitions/tag';
import api from '@/services/api';
import { CenteredContainer, Header } from '@/styles/general';
import UserCard from '@components/Pages/Admin/UserCard';
import Mappers from '@utils/mappers';
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
  [index: string]: any;
}
const initialData: Data = {
  activeOption: tagOptions[0].label,
};

interface UsersMap {
  [index: string]: User[];
}

const UsersList: React.FC = () => {
  const [data, setData] = useState(initialData);

  const [usersList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/admin');

        const { content: userList } = response.data;

        const users: User[] = userList.map((user: UserApi) =>
          Mappers.userApiToUser(user),
        );

        setUserList(users);
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

  const studentsUsers = usersList.filter(({ role }) => role === 'student');
  const teacherUsers = usersList.filter(({ role }) => role === 'evaluator');

  const renderUsers = (usersToRender: User[]) =>
    usersToRender.map(({ role, name, id }) => (
      <UserCard requestId={id} userRole={role}>
        {name}
      </UserCard>
    ));

  const usersMap: UsersMap = {
    Aluno: studentsUsers,
    Corretor: teacherUsers,
    Todos: usersList,
  };

  return (
    <CenteredContainer gapSize="16px">
      <Header>Usuários</Header>

      <TagContainer>
        <TagSwitcher
          name="activeOption"
          value={data.activeOption}
          options={tagOptions}
          onChange={handleTag}
        />
      </TagContainer>
      <>{renderUsers(usersMap[data.activeOption])}</>
    </CenteredContainer>
  );
};

export default UsersList;
