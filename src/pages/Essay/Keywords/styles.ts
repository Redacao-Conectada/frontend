import { colors } from '@styles/colors';
import styled from 'styled-components';

export const KeywordsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  border: 1px solid rgba(42, 70, 112, 0.1);
  box-sizing: border-box;
  border-radius: 5px;
  list-style: circle !important;

  ul {
    width: 100%;
    line-height: 1.5rem;
    font-weight: 700;
    padding-left: 12px;
  }

  li {
    height: 28px;
    display: grid;
    grid-template-columns: auto 16px;
    align-items: center;
    font-family: 'Open Sans';
    padding-left: 6px;
    position: relative;
    ::before {
      background: ${colors.primary};
      position: absolute;
      left: -12px;
      top: 38%;
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 50%;
    }
    span {
      display: flex;
      align-items: center;
    }
  }

  /* ul ::marker {
    color: ${colors.primary};
    font-size: 1rem;
  } */
`;

export const KeywordsList = styled.div``;
