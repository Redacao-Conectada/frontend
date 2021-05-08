import React from 'react';
import { ClickableSvg } from './styles';

interface StarProps {
  isFilled: boolean;
  onClick: any;
}

const Star: React.FC<StarProps> = ({ isFilled, onClick }) => {
  return (
    <ClickableSvg
      active={isFilled}
      onClick={onClick}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 1.6665L12.575 6.88317L18.3333 7.72484L14.1667 11.7832L15.15 17.5165L10 14.8082L4.85 17.5165L5.83333 11.7832L1.66666 7.72484L7.425 6.88317L10 1.6665Z"
        stroke="#131735"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </ClickableSvg>
  );
};

export default Star;
