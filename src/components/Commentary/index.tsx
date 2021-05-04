import { icons } from '@/assets/icons';
import { General } from '@/definitions';
import { Commentary } from '@/interfaces/general';
import { Form } from '@/styles/publicRoutes';
import { validateText } from '@/utils/validations';
import Button from '@components/General/Button';
import Input from '@components/General/Input';
import React, { useState } from 'react';
import {
  CommentaryListContainer,
  Comment,
  WriteCommentaryContainer,
  ShowCommentariesBox,
} from './styles';

interface CommentaryListProps {
  authorAvatar: string;
  commentaries: Array<Commentary>;
  onCommentSubmit: (text: string) => void;
}

interface ShowCommentaryBoxProps {
  onClick: () => void;
}

const CommentaryList: React.FC<CommentaryListProps> = ({
  onCommentSubmit,
  authorAvatar,
  commentaries,
}) => {
  const [commentText, setCommentText] = useState<General.Value>({
    ...General.initialValue,
    validation: (value: string) => validateText(value, 'de comentário'),
  });

  const [validated, setValidated] = useState(false);

  const handleComment = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const invalidity = commentText.validation(value);
    setCommentText({ ...commentText, value, invalidity });
  };

  const clearField = () => {
    setCommentText({ ...General.initialValue });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setValidated(true);
    onCommentSubmit(commentText.value);
    clearField();
  };

  const comment = (commentary: Commentary, isReply: boolean) => (
    <Comment marginLeft={isReply ? '20%' : '0px'}>
      <div className="avatar-and-text">
        <img alt="#" src={commentary.author.avatar} />
        <p>
          <strong>{commentary.text}</strong>
        </p>
      </div>
      {isReply ? null : <div>{icons.reply}</div>}
    </Comment>
  );

  const replyList = (replies: Array<Commentary>) => {
    return (
      <ul>
        {replies.map((reply) => {
          return <li key={reply.id}>{comment(reply, true)}</li>;
        })}
      </ul>
    );
  };

  const commentaryItem = (key: string, commentary: Commentary) => (
    <li key={key}>
      {comment(commentary, false)}
      {commentary.replies ? replyList(commentary.replies) : null}
    </li>
  );

  const writeCommentary = () => (
    <WriteCommentaryContainer>
      <img alt="#" src={authorAvatar} />
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          entity={commentText}
          placeholder="Deixe seu comentário"
          onChange={handleComment}
          validated={validated}
          name="commentField"
        />
        <Button text="->" typeButton="submit" />
      </Form>
    </WriteCommentaryContainer>
  );

  return (
    <CommentaryListContainer>
      {writeCommentary()}
      <ul>{commentaries.map((c) => commentaryItem(c.id, c))}</ul>
    </CommentaryListContainer>
  );
};

export const ShowCommentariesLabel: React.FC<ShowCommentaryBoxProps> = ({
  onClick,
}) => (
  <ShowCommentariesBox>
    <a onClick={onClick}>Mostrar Comentários</a>
  </ShowCommentariesBox>
);

export default CommentaryList;