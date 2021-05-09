import { RatingList, Rate } from '@/definitions/general';
import React from 'react';
import { RatingTable, RatingContainer, EmptyCommentary } from './styles';

interface RatingEssayCardProps {
  ratingList: RatingList;
}

const RatingEssayCard: React.FC<RatingEssayCardProps> = ({ ratingList }) => {
  const showCommentary = (commentary: string) => {
    if (commentary) {
      return `"${commentary}"`;
    }
    return (
      <EmptyCommentary>
        &apos;Sem comentários do corretor!&apos;
      </EmptyCommentary>
    );
  };
  const ratingRow = (rate: Rate, index: number) => {
    const rateNumber = ['i', 'ii', 'iii', 'iv', 'v'];
    return (
      <tr key={index}>
        <td>{rateNumber[index - 1]}.</td>
        <td>{rate.rate}</td>
        <td>{showCommentary(rate.commentary)}</td>
      </tr>
    );
  };
  return (
    <RatingContainer>
      <RatingTable>
        <tr>
          <th colSpan={2}> Nota </th>
          <th> Comentário </th>
        </tr>
        {[1, 2, 3, 4, 5].map((num: any) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          return ratingRow(ratingList[`rate${num}`], num);
        })}
        <td className="totalNumber" colSpan={2}>
          {ratingList.total}
          <div className="totalText">Total</div>
        </td>
      </RatingTable>
    </RatingContainer>
  );
};

export default RatingEssayCard;
