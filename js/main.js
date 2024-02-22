const commentAuthors = ["Алексей", "Владислав", "Серегей", "Александр", "Макар"];
const commentMessage = [
    "Всё отлично!",
    "В целом всё неплохо. Но не всё.",
    "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
    "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
    "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
    "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
];

const usedIdMessage = [];
const usedIdPhoto = [];
const usedIdComment = [];

const getRandomInteger = (a, b) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
  };

const createComment = () => {
    let id = getRandomInteger(1, 99999);
    let randomAuthor = getRandomInteger(0, commentAuthors.length - 1);
    let randomMessage = getRandomInteger(0, commentMessage.length - 1);

    function comment () {
        if (id in usedIdComment) {
            comment();
        } else {
            return {
                id: id, // no-repeat
                avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
                message: commentMessage[randomMessage],
                name: commentAuthors[randomAuthor],
            };
        };
    };
    return comment();
}

function createPost () {
    let id = getRandomInteger(1, 25);
    let url = getRandomInteger(1, 25);

    function post () {
        if ((id in usedIdMessage && url in usedIdPhoto)) {
            post();
        } else {
            usedIdMessage.push(id);
            usedIdPhoto.push(id);
            return {
                id: id,
                url: `photos/${url}.jpg`, // no-repeat
                likes: getRandomInteger(15, 200), // 15 to 200
                description: 'Невероятная фотография! Только посмотрите.',
                comments: Array.from({length: getRandomInteger(0, 30)}, createComment),
            };};};
        return post();
        }

console.table(createPost().comments)
