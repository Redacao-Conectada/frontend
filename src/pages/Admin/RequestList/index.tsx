import UserCard from '@/components/Pages/Admin/UserCard';
import { UserRequestApi } from '@/definitions/general';
import api from '@/services/api';
import { CenteredContainer, Header } from '@/styles/general';
import React, { useState, useEffect } from 'react';

import toast from 'react-hot-toast';

const RequestList: React.FC = () => {
  const [usersList, setUserList] = useState<UserRequestApi[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/admin/users/requests ');

        const { content: userList } = response.data;

        setUserList(userList);
      } catch (err) {
        toast.error('Erro ao buscar solicitações');
      }
    };

    fetchData();
  }, []);

  const renderUsers = usersList.map(({ user_name, id }) => (
    <UserCard requestId={id} userRole="student">
      {user_name}
    </UserCard>
  ));

  return (
    <CenteredContainer gapSize="16px">
      <Header>Solicitações</Header>
      <>{renderUsers}</>
    </CenteredContainer>
  );
};

export default RequestList;
