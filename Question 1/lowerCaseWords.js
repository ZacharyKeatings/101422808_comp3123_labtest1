function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(mixedArray)) {
        reject('Input is not an array');
        return;
      }
  
      const stringArray = [];
  
      for (let i = 0; i < mixedArray.length; i++) {
        if (typeof mixedArray[i] === 'string') {
          stringArray.push(mixedArray[i].toLowerCase());
        }
      }
  
      resolve(stringArray);
    });
  }
  
  const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
  
  lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error));