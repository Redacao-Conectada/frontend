import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  border: 1px solid rgba(42, 70, 112, 0.1);
  box-sizing: border-box;
  border-radius: 5px;
  filter: drop-shadow(0px 16px 20px rgba(4, 167, 119, 0.025));
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const HorizontalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.125rem;
  cursor: pointer;
`;

interface CenteredContainerProps {
  gapSize?: string;
}

export const CenteredContainer = styled.div<CenteredContainerProps>`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ gapSize }) => gapSize || '32px'};
  padding: 32px;

  width: calc(100vw - 64px);
  max-width: 500px;

  h2 {
    font-size: 1.5rem;
  }

  margin-bottom: 64px;
`;

export const Header = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
`;

export const Form = styled.form`
  display: grid;
  gap: 24px;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
