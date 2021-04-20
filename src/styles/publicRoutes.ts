import styled from 'styled-components';

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 32px;

  width: calc(100vw - 64px);

  h2 {
    font-size: 1.5rem;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Form = styled.form`
  display: grid;
  gap: 24px;
  width: 100%;
`;

export const Header = styled.head`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  gap: 32px;
  width: 100%;

  img {
    max-height: 150px;
  }
`;
