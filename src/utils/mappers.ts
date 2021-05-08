import { Essay, EssayApi, User, UserApi } from '@/interfaces/general';

/**
 * Lembrar de buscar user author e passar o data do response pela propriedade
 *
 * @param essayApi
 * @param author Fazer request em busca de autor e passar a resposta
 * @returns essay
 */
const essayApiToEssay = (essayApi: EssayApi, user: User): Essay => {
  // FIXME: retornar se o usuários curtiu a redação
  // FIXME: retornar data de cadastro da redação

  const essay = {
    id: essayApi.id,
    text: essayApi.body,
    title: 'faltando título',
    author: user,
    date: 'faltando data',
    isStarred: false,
    numOfStars: essayApi.upVote,
    numOfComments: 2398,
    total: 800,
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

// TODO: mapear Commentary/CommentaryApi
// TODO: mapear Correction/CorrectionApi

const Mappers = {
  essayApiToEssay,
  userApiToUser,
};

export default Mappers;
