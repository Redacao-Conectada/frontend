import { colors } from '@/styles/colors';
import styled from 'styled-components';

interface CommentBoxProps {
  width: string;
}

export const EssayContainer = styled.div`
  width: 314px;
`;

export const CommentBox = styled.div<CommentBoxProps>`
  min-width: 300px;
  width: ${(props) => props.width};
  padding-bottom: 4px;
`;

export const ShowCommentariesBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  margin-top: 8px;
  padding: 16px 0 16px 0;

  border: 1px solid ${colors.normalBorder};
  border-radius: 5px;

  a {
    text-decoration: underline;
    color: ${colors.link};
  }
`;
