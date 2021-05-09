import {
  Commentary,
  CommentaryApi,
  Correction,
  CorrectionApi,
  Essay,
  EssayApi,
  User,
  UserApi,
} from '@/definitions/general';
import { formatDate } from './formUtils';

/**
 * Lembrar de buscar user author e passar o data do response pela propriedade
 *
 * @param essayApi
 * @param author Fazer request em busca de autor e passar a resposta
 * @returns essay
 */
const essayApiToEssay = (essayApi: EssayApi, user: User): Essay => {
  // FIXME: retornar se o usuários curtiu a redação
  const essay = {
    id: essayApi.id,
    text: essayApi.body,
    title: essayApi.title,
    author: user,
    date: formatDate(essayApi.createdAt),
    isStarred: false,
    numOfStars: essayApi.upVote,
    numOfComments: 0,
    total: essayApi.grade ? essayApi.grade : 0,
    correctionId: essayApi.correctionId,
  };

  return essay;
};

const userApiToUser = (userApi: UserApi): User => {
  const user = {
    id: userApi.id,
    name: userApi.name,
    avatar: userApi.image,
    birthDate: userApi.birthdate,
    city: userApi.city,
    cpf: userApi.cpf,
    email: userApi.email,
    schoolYear: userApi.graduation,
    school: userApi.schoolName,
    state: userApi.state,
  };

  return user;
};

export const commentaryApiToCommentary = (
  commentaryApi: CommentaryApi,
): Commentary => {
  const commentary = {
    id: commentaryApi.id,
    author: {
      id: commentaryApi.userInfo.id,
      avatar: commentaryApi.userInfo.image
        ? commentaryApi.userInfo.image
        : `https://picsum.photos/38`,
      name: commentaryApi.userInfo.name,
    },
    text: commentaryApi.body,
    essayId: commentaryApi.essayId,
  };

  return commentary;
};

const correctionApiToCorrection = (
  correctionApi: CorrectionApi,
  evaluator: User,
): Correction => {
  const correction = {
    evaluator,
    rate1: {
      rate: correctionApi.competences.competence1Grade,
      commentary: correctionApi.competences.competence1Comments,
    },
    rate2: {
      rate: correctionApi.competences.competence2Grade,
      commentary: correctionApi.competences.competence2Comments,
    },
    rate3: {
      rate: correctionApi.competences.competence3Grade,
      commentary: correctionApi.competences.competence3Comments,
    },
    rate4: {
      rate: correctionApi.competences.competence4Grade,
      commentary: correctionApi.competences.competence4Comments,
    },
    rate5: {
      rate: correctionApi.competences.competence5Grade,
      commentary: correctionApi.competences.competence5Comments,
    },
    total: correctionApi.correctionGrade,
    essayId: correctionApi.essayId,
    id: correctionApi.id || -1,
    createdDate: formatDate(correctionApi.createdDate),
  };
  return correction;
};

// TODO: mapear Correction/CorrectionApi

const Mappers = {
  essayApiToEssay,
  userApiToUser,
  correctionApiToCorrection,
};

export default Mappers;
