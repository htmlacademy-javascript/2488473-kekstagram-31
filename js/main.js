
import { createPictures } from './render.js';

createPictures();
const commentAuthors = ["Алексей", "Владислав", "Серегей", "Александр", "Макар"];
const commentMessage = [
    "Всё отлично!",
    "В целом всё неплохо. Но не всё.",
    "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
    "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
    "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
    "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
];

const getRandomInteger = (a, b) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
  };

  function getUniqueRandomNumber (a, b) {
    let usedNumbers = [];

    const getRandomNumber = () => {
        const lower = Math.ceil(Math.min(a, b));
        const upper = Math.floor(Math.max(a, b));
        const result = Math.floor(Math.random() * (upper - lower + 1) + lower);

        if (result in usedNumbers) {
            return getRandomNumber();
        } else {
            usedNumbers.push(result);
            return result;
        };
    };
    return getRandomNumber();
}

const createComment = () => {
    return {
        id: getUniqueRandomNumber(1, 99999), // no-repeat
        avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
        message: commentMessage[getRandomInteger(0, commentMessage.length - 1)],
        name: commentAuthors[getRandomInteger(0, commentAuthors.length - 1)],
    };
}

function createPost () {
    return {
        id: getUniqueRandomNumber(1, 25),
        url: 'photos/' + getUniqueRandomNumber(1, 25) + '.jpg', // no-repeat
        likes: getRandomInteger(15, 200), // 15 to 200
        description: 'Невероятная фотография! Только посмотрите.',
        comments: Array.from({length: getRandomInteger(0, 30)}, createComment)
    };
};
