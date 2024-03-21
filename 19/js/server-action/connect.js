
const getServerData = (onSuccess) => fetch('https://31.javascript.htmlacademy.pro/kekstagram/data').then((response) => response.json()).then((data) => onSuccess(data));

export { getServerData };
