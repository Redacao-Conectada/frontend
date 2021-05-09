import { User } from '@/definitions/general';
import React from 'react';
import { StudentContainer } from './styles';

interface EvaluatorCardProps {
  student: User;
  writtenEssays?: number;
}

const StudentCard: React.FC<EvaluatorCardProps> = ({
  student,
  writtenEssays,
}) => {
  const showStudentHeader = () => {
    if (writtenEssays !== undefined) {
      return (
        <div className="divContainer">
          <div>{student.name}</div>
          <div>{student.schoolYear}</div>
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
        alt="avaliador"
        src={student.avatar ? student.avatar : 'https://picsum.photos/50'}
      />
      {showStudentHeader()}
    </StudentContainer>
  );
};

export default StudentCard;
