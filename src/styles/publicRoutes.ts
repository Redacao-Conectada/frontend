import styled from 'styled-components';

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Form = styled.form`
  display: grid;
  gap: 24px;
`;

export const Header = styled.head`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  gap: 32px;

  img {
    max-height: 150px;
  }
`;
