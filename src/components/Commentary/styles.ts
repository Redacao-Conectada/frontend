import { colors } from '@/styles/colors';
import styled from 'styled-components';

interface CommentProps {
  marginLeft?: string;
}

export const EssayContainer = styled.div``;

export const Comment = styled.div<CommentProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;

  padding: 4px 16px 4px 16px;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : '0')};

  margin-bottom: 2px;

  .avatar-and-text {
    display: flex;
  }

  p {
    text-align: left;
  }

  p strong {
    font-size: 12px;
  }
`;

export const CommentaryListContainer = styled.div`
  ul li {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  img {
    width: 20px;
    height: 20px;

    border-radius: 50%;
    margin-right: 5px;
  }

  margin-top: 5px;

  border-radius: 8px;
  border: 1px solid ${colors.normalBorder};
`;

export const WriteCommentaryContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 4px;

  img {
    width: 30px;
    height: 30px;

    border-radius: 50%;
    margin-right: 5px;

    align-self: center;
  }

  form {
    display: flex;
    margin-right: 8px;
  }

  form div {
    align-self: center;
    gap: 0px;
  }

  input {
    height: 30px;
  }

  form button {
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }
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
