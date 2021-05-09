import { colors } from '@styles/colors';
import styled from 'styled-components';

export const EssayCardContainer = styled.div`
  padding: 12px;
  min-width: 300px;
  border: 1px solid ${colors.normalBorder};

  border-radius: 5px;
  .previewText {
    max-height: 258px;
    overflow: hidden;
    background: -webkit-linear-gradient(#333 65%, #eee);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2 {
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
  }

  p {
    font-size: 12px;
    line-height: 16px;
    text-align: justify;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
`;

export const DateContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 4px;

  b {
    font-size: 10px;
    font-weight: 400;
    color: #484d6d;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const StarsCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  span {
    cursor: default;
    font-size: 12px;
    font-weight: 600;
  }
`;

export const MoreInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  b {
    font-weight: 600;
    font-size: 12px;
    color: #131735;
  }

  img {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    margin-left: 8px;
  }
`;

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
`;
