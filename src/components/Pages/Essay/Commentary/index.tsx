import { icons } from '@/assets/icons';
import { General } from '@/definitions';
import { Form } from '@/styles/general';
import { validateText } from '@/utils/validations';
import { Button, Input } from '@components/General';
import { Commentary } from '@definitions/general';
import React, { useState } from 'react';
import {
  CommentaryListContainer,
  Comment,
  WriteCommentaryContainer,
  ShowCommentariesBox,
} from './styles';

interface CommentaryListProps {
  authorAvatar: string;
  commentaries: Commentary[];
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

  const [showCommentaries, setShowCommentaries] = useState(false);

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

  const handleShowCommentariesClick = () => {
    setShowCommentaries(true);
  };

  const comment = (commentary: Commentary, isReply: boolean) => (
    <Comment marginLeft={isReply ? '20%' : '0px'}>
      <div className="avatar-and-text">
        <img alt="#" src={commentary.author.avatar} />
        <div>
          <p>
            <strong>{commentary.text}</strong>
          </p>
          <p className="commentary-author-name">{commentary.author.name}</p>
        </div>
      </div>
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

  const commentaryItem = (key: number, commentary: Commentary) => (
    <li key={key}>
      {comment(commentary, false)}
      {commentary.replies ? replyList(commentary.replies) : null}
    </li>
  );

  return (
    <>
      {showCommentaries ? (
        <CommentaryListContainer>
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
              <Button text="->" typeButton="submit">
                {icons.sendMessage}
              </Button>
            </Form>
          </WriteCommentaryContainer>
          <ul>{commentaries.map((c) => commentaryItem(c.id, c))}</ul>
        </CommentaryListContainer>
      ) : (
        <ShowCommentariesLabel onClick={handleShowCommentariesClick} />
      )}
    </>
  );
};

const ShowCommentariesLabel: React.FC<ShowCommentaryBoxProps> = ({
  onClick,
}) => (
  <ShowCommentariesBox>
    <a onClick={onClick}>Mostrar Comentários</a>
  </ShowCommentariesBox>
);

export default CommentaryList;
