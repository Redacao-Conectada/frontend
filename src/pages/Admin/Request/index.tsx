import api from '@/services/api';
import { CircularPhoto, ReadOnlyInput, Button } from '@components/General';
import { RequestUserApi } from '@definitions/general';
import { CenteredContainer, Header } from '@styles/general';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Skeleton from 'react-loading-skeleton';
import { ButtonsContainer } from './styles';

interface RequestProps {
  match: any;
}

const Request: React.FC<RequestProps> = ({ match }) => {
  const requestId: number = match.params.id;

  const [isLoading, setIsLoading] = useState(false);

  const [isFetched, setIsFetched] = useState(false);

  const [userInfo, setUserInfo] = useState<RequestUserApi>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/admin/users/requests/${requestId}`);

        const { data: requestUserInfo } = response;

        setUserInfo(requestUserInfo);
      } catch (err) {
        toast.error('Erro ao buscar dados da solicitação');
      } finally {
        setIsFetched(true);
      }
    };
    fetchData();
  }, []);

  const handleAccept = async () => {
    setIsLoading(true);
    try {
      await api.get(`/approve/${requestId}`);
    } catch (err) {
      toast.error('Erro ao aceitar solicitação');
    } finally {
      setIsLoading(false);
    }
  };
  const handleDecline = async () => {
    setIsLoading(true);
    try {
      await api.get(`/dennied/${requestId}`);
    } catch (err) {
      toast.error('Erro ao aceitar solicitação');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CenteredContainer gapSize="16px">
      <Header>Análise de solicitação</Header>

      {!isFetched ? (
        <Skeleton height="70vh" />
      ) : (
        <>
          <CircularPhoto size="64px" />
          <ReadOnlyInput label="Nome">{userInfo?.user.name}</ReadOnlyInput>
          <ReadOnlyInput label="Email">{userInfo?.user.email}</ReadOnlyInput>
          <ReadOnlyInput label="Data de nascimento">
            {userInfo?.user.birthdate.substring(0, 10)}
          </ReadOnlyInput>
          <ReadOnlyInput label="Estado">{userInfo?.user.state}</ReadOnlyInput>
          <ReadOnlyInput label="Cidade">{userInfo?.user.city}</ReadOnlyInput>
          <ReadOnlyInput label="Escola atual">
            {userInfo?.school_name_as_teacher}
          </ReadOnlyInput>
          <ReadOnlyInput label="Matrícula escolar">
            {userInfo?.school_registration}
          </ReadOnlyInput>
          <ButtonsContainer>
            <Button
              text="Aceitar solicitação"
              onClick={handleAccept}
              isLoading={isLoading}
            />
            <Button
              text="Recusar solicitação"
              onClick={handleDecline}
              decline
              isLoading={isLoading}
            />
          </ButtonsContainer>
        </>
      )}
    </CenteredContainer>
  );
};

export default Request;
