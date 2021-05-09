import { User } from '@/definitions/general';
import { getSchoolYearNameFromValue } from '@/definitions/Register/component';
import { icons } from '@assets/icons/index';
import React from 'react';
import { Link } from 'react-router-dom';
import { PenSVG, StudentContainer } from './styles';

interface EvaluatorCardProps {
  isOwner?: boolean;
  student: User;
  writtenEssays?: number;
}

const StudentCard: React.FC<EvaluatorCardProps> = ({
  student,
  writtenEssays,
  isOwner,
}) => {
  const showStudentHeader = () => {
    if (writtenEssays !== undefined) {
      return (
        <div className="divContainer">
          <div>{student.name}</div>
          <div>{getSchoolYearNameFromValue(student.schoolYear)}</div>
          <div className="publishedEssaysText"> Redações publicadas </div>
          <div className="center gradedEssays">{writtenEssays}</div>
        </div>
      );
    }
    return (
      <div className="divContainer">
        <div>{student.name}</div>
        <div>{student.schoolYear}</div>
        <div className="bottomText">Sem redações!</div>
      </div>
    );
  };

  return (
    <StudentContainer>
      <img
        alt="estudante"
        src={student.avatar ? student.avatar : 'https://picsum.photos/50'}
      />
      {isOwner && (
        <Link to="/profile/update">
          <PenSVG>{icons.pen}</PenSVG>
        </Link>
      )}

      {showStudentHeader()}
    </StudentContainer>
  );
};

export default StudentCard;
