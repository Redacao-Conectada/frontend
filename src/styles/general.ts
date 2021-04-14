import styled from 'styled-components';

interface ContainerProps {
  bgColor: string;
}

export const Container = styled.div<ContainerProps>`
  background: #ffffff;
  border: 1px solid rgba(42, 70, 112, 0.1);
  box-sizing: border-box;
  border-radius: 5px;
  filter: drop-shadow(0px 16px 20px rgba(4, 167, 119, 0.025));
`;
