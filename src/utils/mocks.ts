export const mockedEssay = {
  id: '12',
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus tincidunt orci, ac lobortis eros ullamcorper dapibus. Nulla ut libero non nisi gravida pulvinar a sit amet sem. Sed vel ipsum a felis suscipit euismod. Nam vitae bibendum nulla. Morbi venenatis viverra nibh. Proin at pulvinar turpis. Aliquam faucibus maximus ipsum eu venenatis. 
    Nunc aliquam metus sed dolor maximus, nec semper urna gravida. Mauris maximus, nulla sit amet auctor venenatis, mauris velit facilisis orci, eget tincidunt enim dolor ac enim. Phasellus maximus ante sit amet metus ultrices, non porttitor sem auctor. Mauris hendrerit ante in nisl consectetur, eget ultricies magna tristique. Etiam dictum non lectus quis rhoncus. 
    Maecenas lorem erat, pretium ut porttitor sit amet, tincidunt non odio. Nam id imperdiet sem, sit amet bibendum velit. Aenean quis dolor a enim laoreet venenatis. Nulla et dui malesuada, vestibulum mi sit amet, lacinia erat. Curabitur at laoreet est, ac aliquam velit. Praesent laoreet massa efficitur purus vulputate commodo. Nunc varius fermentum lectus non sodales. In vitae elit in mi mattis interdum sit amet eu ex. Fusce sagittis arcu id nisl lobortis, in pharetra justo finibus. Aliquam erat volutpat. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor lacus nec sodales imperdiet. Vestibulum sollicitudin nunc non lectus posuere, eget tincidunt sapien egestas. Ut cursus quam vel ipsum sagittis, eget pulvinar libero pharetra.`,
  title: 'Hey you there, teste!',
  author: {
    name: 'Guilherme Carneiro',
    avatar: 'https://avatars.githubusercontent.com/u/32914505?s=60&v=4',
  },
  date: '23/03/1980',
  isStarred: true,
  numOfStars: 900,
  numOfComments: 32,
  total: 960,
};

export const ratingList = {
  evaluator: {
    name: 'Elmar Melcher',
    avatar: 'https://avatars.githubusercontent.com/u/50139832?v=4',
    ratedEssays: 420,
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

export const essayList = {
  list: [
    {
      id: '1',
      text: `42 COMENTARIOS TOTAL 555 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus tincidunt orci, ac lobortis eros ullamcorper dapibus. Nulla ut libero non nisi gravida pulvinar a sit amet sem. Sed vel ipsum a felis suscipit euismod. Nam vitae bibendum nulla. Morbi venenatis viverra nibh. Proin at pulvinar turpis. Aliquam faucibus maximus ipsum eu venenatis. 
  Nunc aliquam metus sed dolor maximus, nec semper urna gravida. Mauris maximus, nulla sit amet auctor venenatis, mauris velit facilisis orci, eget tincidunt enim dolor ac enim. Phasellus maximus ante sit amet metus ultrices, non porttitor sem auctor. Mauris hendrerit ante in nisl consectetur, eget ultricies magna tristique. Etiam dictum non lectus quis rhoncus. 
  Maecenas lorem erat, pretium ut porttitor sit amet, tincidunt non odio. Nam id imperdiet sem, sit amet bibendum velit. Aenean quis dolor a enim laoreet venenatis. Nulla et dui malesuada, vestibulum mi sit amet, lacinia erat. Curabitur at laoreet est, ac aliquam velit. Praesent laoreet massa efficitur purus vulputate commodo. Nunc varius fermentum lectus non sodales. In vitae elit in mi mattis interdum sit amet eu ex. Fusce sagittis arcu id nisl lobortis, in pharetra justo finibus. Aliquam erat volutpat. 
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor lacus nec sodales imperdiet. Vestibulum sollicitudin nunc non lectus posuere, eget tincidunt sapien egestas. Ut cursus quam vel ipsum sagittis, eget pulvinar libero pharetra.`,
      title: 'Hey you there, teste!',
      author: {
        name: 'Guilherme Carneiro',
        avatar: 'https://avatars.githubusercontent.com/u/32914505?s=60&v=4',
      },
      date: '23/03/1980',
      isStarred: true,
      numOfStars: 900,
      numOfComments: 42,
      total: 555,
      ratingList,
    },
    {
      id: '2',
      text: `322 COMENTARIOS TOTAL 777 Donec ut libero eleifend, viverra enim at, efficitur magna. Vivamus nec neque vitae tortor tristique consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque quis elementum risus, eu vehicula leo. Praesent quis dignissim nibh. Aliquam rutrum, ex id hendrerit commodo, orci elit mollis tellus, at pharetra leo augue eu urna. Suspendisse faucibus dui vel aliquam placerat. Curabitur laoreet bibendum justo, et facilisis orci efficitur vitae. Sed viverra libero ex, a aliquam sapien finibus et. Morbi pretium blandit elit, consectetur dignissim lectus commodo id. Morbi malesuada, nisi eget sollicitudin maximus, turpis magna sodales dui, sit amet pellentesque quam metus in purus. Donec iaculis tellus massa, eu scelerisque nisl aliquet sed. Proin fringilla, dui ut tincidunt aliquam, metus libero gravida velit, eget laoreet elit libero in nisi. In in sapien in neque tempor vehicula id ut magna. Vestibulum enim magna, sodales nec nibh vel, tempus lacinia tortor. Sed molestie lobortis rhoncus.`,
      title: 'Opa, outra redação aqui',
      author: {
        name: 'Pinho Segundo',
        avatar: 'https://avatars.githubusercontent.com/u/50139832?v=4',
      },
      date: '06/09/4200',
      isStarred: true,
      numOfStars: 840,
      numOfComments: 322,
      total: 777,
    },
    {
      id: '3',
      text: `744 COMENTARIO TOTAL 10 Nam sit amet tellus pharetra, congue augue a, luctus eros. Donec et dictum dui. Mauris rutrum nulla ac nisl maximus, ac fermentum enim dictum. Aenean sit amet consequat velit. Sed felis nunc, volutpat in ligula vitae, ultrices aliquam sapien. Phasellus auctor elementum nisi vitae viverra. Nam ultricies ac metus at rhoncus. Vestibulum convallis, est at hendrerit tempus, felis nunc ullamcorper justo, in aliquam nisl ex eu nibh. Sed vehicula molestie auctor. Nullam eget ultrices est, ut sollicitudin ante. Vestibulum dignissim ligula nec mauris vestibulum ultrices. Suspendisse potenti.`,
      title: 'Opa, outra redação aqui',
      author: {
        name: 'Pinho Segundo',
        avatar: 'https://avatars.githubusercontent.com/u/50139832?v=4',
      },
      date: '23/03/1969',
      isStarred: true,
      numOfStars: 420,
      numOfComments: 744,
      total: 10,
    },
  ],
};

export const commentariesList = [
  {
    id: '1',
    author: {
      name: 'Chiquinho da Silva',
      avatar: 'https://avatars.githubusercontent.com/u/36909697?v=4',
    },
    text: 'Muito top, Amegan!',
  },
  {
    id: '2',
    author: {
      name: 'Netinho da Comunidade',
      avatar: 'https://avatars.githubusercontent.com/u/50139832?v=4',
    },
    text: 'Sei não, mas eu só acho que tá pra um 600!',
    replies: [
      {
        id: '3',
        author: {
          name: 'Chico Milicote',
          avatar: 'https://avatars.githubusercontent.com/u/50139832?v=4',
        },
        text: 'Rapaz, sei não!',
      },
      {
        id: '4',
        author: {
          name: 'Chiquinha Do Chaves',
          avatar: 'https://avatars.githubusercontent.com/u/50139832?v=4',
        },
        text: 'Chaves, Chaves!',
      },
    ],
  },
];

export const keywordsList: string[] = [
  'Cachorro',
  'pet',
  'animal',
  'meio ambiente',
  'natureza',
  'etc',
];
