export const shuffle = (array) => {
  const shuffledArray = [];
  while (array.length) {
    const random = Math.floor(Math.random() * array.length);
    const splicedValue = array.splice(random, 1)[0];
    shuffledArray.push(splicedValue);
  }
  return shuffledArray;
};
