export const firstNode = {
  id: 1,
  title:
    'Қайси тилда жавоб бериш сизга қулай? На каком языке Вам удобнее отвечать на вопросы?',
  answers: [
    {
      title: 'Ўзбек тилида',
      linked: false,
    },
    {
      title: 'На русском',
      linked: true,
    },
  ],
}
export const secondNode = {
  id: 2,
  title:
    'Здравствуйте, Вас беспокоит компания «Кантар Медиа Узбекистан» (Kantar Media Uzbekistan). Меня зовут Алишер. Мы проводим телефонный опрос о средствах массовой информации среди населения в возрасте от 15 лет и старше.',
  answers: [],
}
export const thirdNode = {
  id: 3,
  title:
    'Скажите, пожалуйста, не могли бы Вы ответить на несколько вопросов, это займет не более 5 минут?',
  answers: [
    {
      title: 'Да, есть время',
      linked: true,
    },
    {
      title: 'Нет',
      linked: true,
    },
  ],
}
export const fourthNode = {
  id: 4,
  title: 'Скажите, пожалуйста, ваше имя',
  answers: [
    {
      title: 'Имя',
      linked: false,
    },
  ],
}
export const birthDate = {
  id: 5,
  title: 'Назовите, пожалуйста, дату вашего рождения',
  answers: [
    {
      title: 'Дата рождения',
      linked: false,
    },
  ],
}
export const age = {
  id: 6,
  multiple: true,
  title: 'Скажите, пожалуйста, сколько полных лет вам исполнилось?',
  answers: [
    {
      title: '-18',
      linked: true,
    },
    {
      title: '18-20',
      linked: false,
    },
    {
      title: '20-25',
      linked: false,
    },
    {
      title: '25-30',
      linked: false,
    },
    {
      title: '30+',
      linked: false,
    },
  ],
}
export const country = {
  id: 7,
  title: 'Скажите, пожалуйста, в каком городе вы проживаете постоянно?',
  answers: [
    {
      title: 'Ташкент',
      linked: true,
    },
    {
      title: 'Самарканд',
      linked: true,
    },
    {
      title: 'Карши',
      linked: false,
    },
    {
      title: 'Ангрен',
      linked: false,
    },
    {
      title: 'Джизак',
      linked: false,
    },
    {
      title: 'Чирчик',
      linked: false,
    },
    {
      title: 'Ургенч',
      linked: false,
    },
    {
      title: 'Термез',
      linked: false,
    },
    {
      title: 'Алмалык',
      linked: false,
    },
    {
      title: 'Шахрисабз',
      linked: false,
    },
    {
      title: 'Другое',
      linked: true,
    },
  ],
}
export const district = {
  id: 8,
  multiple: true,
  title: 'Скажите, пожалуйста, в каком районе города вы проживаете?',
  answers: [
    {
      title: 'Алмазарский район (Собир Рахимовский район)',
      linked: false,
    },
    {
      title: 'Бектемирский район',
      linked: false,
    },
    {
      title: 'Сергелиский район',
      linked: false,
    },
    {
      title: 'Чиланзарский район',
      linked: false,
    },
    {
      title: 'Другое',
      linked: true,
    },
  ],
}
export const specialists = {
  id: 9,
  multiple: true,
  title:
    'Скажите, пожалуйста, вы сами, кто-нибудь из вашей семьи или близких друзей работают в следующих сферах деятельности?',
  answers: [
    {
      title: 'Маркетинг / маркетинговые исследования / PR',
      linked: false,
    },
    {
      title: 'Реклама',
      linked: false,
    },
    {
      title: 'Радио, пресса, телевидение',
      linked: false,
    },
    {
      title: 'Журналистика',
      linked: false,
    },
    {
      title:
        'Телевизионные коммуникации / предоставление услуг кабельной, спутниковой связи',
      linked: false,
    },
    {
      title: 'Не работает ни в одной из этих сфер деятельности',
      linked: true,
    },
  ],
}
export const permanentResidence = {
  id: 10,
  title:
    'Вы и ваша семья постоянно проживаете в этом городе и вашему адресу не менее полугода?',
  answers: [
    {
      title: 'Да',
      linked: true,
    },
    {
      title: 'Нет',
      linked: true,
    },
  ],
}
export const typeOfResidence = {
  id: 11,
  multiple: true,
  title: 'Вы живете в отдельной квартире, коммунальной или собственном доме?',
  answers: [
    {
      title: 'В отдельной квартире',
      linked: false,
    },
    {
      title: 'В коммунальной квартире',
      linked: false,
    },
    {
      title: 'В собственном доме',
      linked: false,
    },
    {
      title: 'В общежитии, в гостинице (Другое)',
      linked: true,
    },
  ],
}
export const howManyTVs = {
  id: 12,
  multiple: true,
  title:
    'Скажите, пожалуйста, сколько в целом телевизоров вы используете для просмотра телевидения в своем домохозяйстве?',
  answers: [
    {
      title: 'Один',
      linked: false,
    },
    {
      title: 'Два',
      linked: false,
    },
    {
      title: 'Три',
      linked: false,
    },
    {
      title: 'Четыре',
      linked: false,
    },
    {
      title: 'Пять и более',
      linked: false,
    },
    {
      title: 'Ни одного',
      linked: true,
    },
  ],
}
export const firstCondition = {
  id: 13,
  title: 'Если живет в Самарканде и один телевизор',
  conditions: [
    {
      first: 'Q7',
      second: '"Самарканд"',
      third: 'Q12',
      fourth: '"Один"',
      linked: false,
    },
  ],
}
export const typeOfAntenna = {
  id: 14,
  multiple: true,
  title:
    'Назовите, пожалуйста, тип доставки телевизионного сигнала, которым вы пользуетесь при просмотре телевизора дома: обычная антенна для приема эфирного тв, антенна для приема спутникового телевидения (тарелка), кабельная сеть, IP TV/интернет ТВ?',
  answers: [
    {
      title: 'Обычная антенна для приема эфирного ТВ',
      linked: false,
    },
    {
      title: 'Специальная антенна для спутникового телевидения',
      linked: false,
    },
    {
      title: 'Кабельная сеть',
      linked: false,
    },
    {
      title: 'IP TV / Интернет ТВ',
      linked: false,
    },
  ],
}
export const secondCondition = {
  id: 15,
  title: '',
  conditions: [
    {
      first: 'Q7',
      second: '"Термиз"',
      third: 'Q23',
      fourth: '"1, 2"',
      linked: false,
    },
  ],
}
