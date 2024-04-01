
const testArray = [1, 2, 3, 4, 1, 3, 2, 5, 6, 19, 1, 3, 7, 42, 18, 42, 3, 8];

function arrayFilter(array) {
  let filteredArray = Array.from(new Set(array));
  for (let i = filteredArray.length - 1; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      if (filteredArray[i] < filteredArray[j]) {
        let temp = filteredArray[i];
        filteredArray[i] = filteredArray[j];
        filteredArray[j] = temp;
      };
    };
  };
  return filteredArray;
}
arrayFilter(testArray);

