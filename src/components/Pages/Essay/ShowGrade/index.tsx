import { gradeColors } from '@styles/colors';
import React from 'react';
import {
  GradeColored900,
  GradeColored800,
  GradeColored700,
  GradeColored600,
  GradeColored500,
  GradeColoredMinus500,
  GradeColoredNoGrade,
} from './styles';

type Grades = '+900' | '+800' | '+700' | '+600' | '+500' | '-500' | 'noGrade';

interface ShowGradeProps {
  grade: Grades;
}

const ShowGrade: React.FC<ShowGradeProps> = ({ grade }) => {
  const gradesOptions = {
    '+900': <GradeColored900>+900</GradeColored900>,
    '+800': <GradeColored800>+800</GradeColored800>,
    '+700': <GradeColored700>+700</GradeColored700>,
    '+600': <GradeColored600>+600</GradeColored600>,
    '+500': <GradeColored500>+500</GradeColored500>,
    '-500': <GradeColoredMinus500>&lt;500</GradeColoredMinus500>,
    noGrade: <GradeColoredNoGrade />,
  };

  return gradesOptions[grade];
};

export default ShowGrade;
