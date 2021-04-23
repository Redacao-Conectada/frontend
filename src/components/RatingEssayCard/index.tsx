import { RatingList, Rate } from '@/interfaces/general';
import React from 'react';
import { HeaderContainer, RatingTable, RatingContainer } from './styles';

interface RatingEssayCardProps {
  ratingList: RatingList;
}

const defaultAvatar =
  'https://www.ecp.org.br/wp-content/uploads/2017/12/default-avatar-1-300x300.png';

const RatingEssayCard: React.FC<RatingEssayCardProps> = ({ ratingList }) => {
  const ratingRow = (rate: Rate, index: number) => {
    return (
      <tr key={index}>
        <td>{index}.</td>
        <td>{rate.rate}</td>
        <td>{rate.commentary}</td>
      </tr>
    );
  };
  return (
    <RatingContainer>
      <HeaderContainer />
      <RatingTable>
        <tr>
          <th />
          <th> Nota </th>
          <th> Comentário </th>
        </tr>
        {[1, 2, 3, 4, 5].map((num: any) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          return ratingRow(ratingList[`rate${num}`], num);
        })}
      </RatingTable>
    </RatingContainer>
  );
};

export default RatingEssayCard;
