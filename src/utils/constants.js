import mesto1 from '../images/mesto1.png';
import mesto2 from '../images/mesto2.png';
import movies1 from '../images/movies1.png';
import movies2 from '../images/movies2.png';
import poet1 from '../images/poet1.png';
import poet2 from '../images/poet2.png';
import turbina from '../images/turbina.png';
import travel1 from '../images/travel1.png';
import travel2 from '../images/travel2.png';
import life from '../images/life.png';
import memory from '../images/memory.png';
import simon from '../images/simon.png';
import trainer from '../images/trainer.png';

export const basicTechnologies = [
  'JavaScript',
  'React',
  'HTML',
  'CSS',
  'БЭМ',
  'Git',
  'Node.js',
  'mongoDB',
];
export const additionalTechnologies = [
  'TypeScript',
  'Redux',
  'Vue',
  'SASS',
  'SCSS',
  'Webpack',
  'socket.io',
];

export const colorsTechnology = [
  '#00FFFF',
  '#0000FF',
  '#FF00FF',
  '#808080',
  '#008000',
  '#00FF00',
  '#800000',
  '#000080',
  '#808000',
  '#FF0000',
  '#800080',
  '#FF0000',
  '#C0C0C0',
  '#008080',
  '#FFFF00',
];

export const MyProjects = [
  {
    id: 1,
    title: 'Mesto',
    description:
      'Инстаграмм на минималках. Место, где можно делиться фотографиями интересных мест. Есть авторизация',
    stack: 'React, NodeJS, Express, MongoDB',
    type: 'full',
    images: [mesto1, mesto2],
    repositoryLink: 'https://github.com/Murat29/react-mesto-api-full',
  },
  {
    id: 2,
    title: 'Movies explorer',
    description:
      'Поисковик фильмов, с возможность их сохранения. Есть авторизация',
    stack: 'React, NodeJS, Express, MongoDB',
    type: 'full',
    images: [movies1, movies2],
    repositoryLink: 'https://github.com/Murat29/movies-explorer-frontend',
  },
  {
    id: 3,
    title: 'Гражданин-поэт',
    description:
      'Прототип приложения для гражданских инициатив, в котором к рассмотрению принимаются только обращения, написанные цитатами поэтов-классиков.',
    stack: 'React, NodeJS',
    type: 'full',
    images: [poet1, poet2],
    repositoryLink: 'https://github.com/Murat29/hackathon-poems',
    projectLink: 'https://murat29.github.io/hackathon-poems',
  },
  {
    id: 4,
    title: 'Турбина',
    description:
      'Cайт для музыкального проекта детского книжного магазиа Маршак.',
    stack: 'HTML, CSS, JavaScript, React',
    type: 'front',
    images: [turbina],
    repositoryLink: 'https://github.com/Murat29/turbina',
    projectLink: 'https://murat29.github.io/turbina',
  },
  {
    id: 5,
    title: 'Путешествие по России',
    description: 'Сайт о путешествии, о том какие красоты есть в России',
    stack: 'HTML, CSS',
    type: 'front',
    images: [travel1, travel2],
    repositoryLink: 'https://github.com/Murat29/russian-travel',
    projectLink: 'https://murat29.github.io/russian-travel',
  },
  {
    id: 6,
    title: 'Жизнь',
    description:
      'Клеточный автомат, придуманный английским математиком Джоном Конвеем в 1970 году.',
    stack: 'HTML, CSS, TypeScript, React',
    type: 'game',
    images: [life],
    repositoryLink: 'https://github.com/Murat29/game-life',
    projectLink: 'https://murat29.github.io/game-life',
  },
  {
    id: 7,
    title: 'Память',
    description:
      'Перед вами карточки рубашками вверх. Вы можете переворачивать по две карточки. Вам нужно найти все пары.',
    stack: 'HTML, CSS, JavaScript, React, Redux',
    type: 'game',
    images: [memory],
    repositoryLink: 'https://github.com/Murat29/memory-game',
    projectLink: 'https://murat29.github.io/memory-game',
  },
  {
    id: 8,
    title: 'Саймон говорит',
    description:
      'Вам показывается последовательность кнопок. Вы должны повторить ее в правильном порядке.',
    stack: 'HTML, CSS, JavaScript, Vue',
    type: 'game',
    images: [simon],
    repositoryLink: 'https://github.com/Murat29/test-task-vue-simon',
    projectLink: 'https://murat29.github.io/test-task-vue-simon',
  },
  {
    id: 9,
    title: 'Тренажер печати',
    description:
      'Тренажер, который поможет вам улучшить скорость и точность печати. А так же научиться методу слепой печати.',
    stack: 'HTML, CSS, JavaScript, React',
    type: 'game',
    images: [trainer],
    repositoryLink: 'https://github.com/Murat29/touch-typing-trainer',
    projectLink: 'https://murat29.github.io/touch-typing-trainer',
  },
];
