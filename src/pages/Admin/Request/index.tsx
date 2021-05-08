import { CircularPhoto, ReadOnlyInput, Button } from '@components/General';
import { CenteredContainer, Header } from '@styles/general';
import React from 'react';
import { ButtonsContainer } from './styles';

const Request: React.FC = () => {
  // TODO: criar modal caso o admin recuse

  return (
    <CenteredContainer gapSize="16px">
      <Header>Análise de solicitação</Header>
      <CircularPhoto size="64px" />
      <ReadOnlyInput label="Nome">Adriana Souza Pereira</ReadOnlyInput>
      <ReadOnlyInput label="Email">adriana@souza.com</ReadOnlyInput>
      <ReadOnlyInput label="Data de nascimento">25/02/1998</ReadOnlyInput>
      <ReadOnlyInput label="Estado">Rio Grande do Norte</ReadOnlyInput>
      <ReadOnlyInput label="Cidade">Natal</ReadOnlyInput>
      <ReadOnlyInput label="Escola atual">Colégio do Céu Alado </ReadOnlyInput>
      <ReadOnlyInput label="Matrícula escolar">348905543</ReadOnlyInput>
      <ButtonsContainer>
        <Button text="Aceitar solicitação" />
        <Button text="Recusar solicitação" decline />
      </ButtonsContainer>
    </CenteredContainer>
  );
};

export default Request;
