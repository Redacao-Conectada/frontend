export const mockedUser = {
  name: 'Guilherme Carneiro',
  avatar: 'https://avatars.githubusercontent.com/u/50139832?v=4',
  birthDate: new Date(2000, 2, 1).toISOString(),
  city: 'Pombal',
  cpf: '12345678901',
  email: 'gui@email.com',
  schoolYear: '1m',
  school: 'Colégio Geo',
  state: 'PB',
};

export const mockedEssay = {
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus tincidunt orci, ac lobortis eros ullamcorper dapibus. Nulla ut libero non nisi gravida pulvinar a sit amet sem. Sed vel ipsum a felis suscipit euismod. Nam vitae bibendum nulla. Morbi venenatis viverra nibh. Proin at pulvinar turpis. Aliquam faucibus maximus ipsum eu venenatis. 
    Nunc aliquam metus sed dolor maximus, nec semper urna gravida. Mauris maximus, nulla sit amet auctor venenatis, mauris velit facilisis orci, eget tincidunt enim dolor ac enim. Phasellus maximus ante sit amet metus ultrices, non porttitor sem auctor. Mauris hendrerit ante in nisl consectetur, eget ultricies magna tristique. Etiam dictum non lectus quis rhoncus. 
    Maecenas lorem erat, pretium ut porttitor sit amet, tincidunt non odio. Nam id imperdiet sem, sit amet bibendum velit. Aenean quis dolor a enim laoreet venenatis. Nulla et dui malesuada, vestibulum mi sit amet, lacinia erat. Curabitur at laoreet est, ac aliquam velit. Praesent laoreet massa efficitur purus vulputate commodo. Nunc varius fermentum lectus non sodales. In vitae elit in mi mattis interdum sit amet eu ex. Fusce sagittis arcu id nisl lobortis, in pharetra justo finibus. Aliquam erat volutpat. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor lacus nec sodales imperdiet. Vestibulum sollicitudin nunc non lectus posuere, eget tincidunt sapien egestas. Ut cursus quam vel ipsum sagittis, eget pulvinar libero pharetra.`,
  title: 'Hey you there, teste!',
  author: mockedUser,
  date: '23/03/1980',
  isStarred: true,
  numOfStars: 900,
};

export const commentariesList = [
  {
    id: '1',
    author: mockedUser,
    text: 'Muito top, Amegan!',
  },
  {
    id: '2',
    author: mockedUser,
    text: 'Sei não, mas eu só acho que tá pra um 600!',
    replies: [
      {
        id: '3',
        author: mockedUser,
        text: 'Rapaz, sei não!',
      },
      {
        id: '4',
        author: mockedUser,
        text: 'Chaves, Chaves!',
      },
    ],
  },
];

export const ratingList = {
  evaluator: {
    name: 'Elmar Melcher',
    avatar: 'https://avatars.githubusercontent.com/u/50139832?v=4',
  },
  rate1: {
    rate: '200',
    commentary:
      'Essa competência foi super bem escrita, eu como professora de redação super formada posso garantir isso.',
  },
  rate2: {
    rate: '120',
    commentary: '',
  },
  rate3: {
    rate: '160',
    commentary:
      'Esse comentário vai ter 3 linhas pra eu ficar testando o padding',
  },
  rate4: {
    rate: '40',
    commentary: 'Mlk tu é mt ruim',
  },
  rate5: {
    rate: '160',
    commentary: 'Comentário de 2 linhas aaaaaaaaa',
  },
  total: 680,
};

export const keywordsList: string[] = [
  'Cachorro',
  'pet',
  'animal',
  'meio ambiente',
  'natureza',
  'etc',
];
