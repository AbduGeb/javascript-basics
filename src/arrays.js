const getNthElement = (index, array) => {              //DONE
  return array[index%array.length];
};

const arrayToCSVString = array => {              //DONE
  return array.join(',');
};

const csvStringToArray = string => {              //DONE
  const aa = string;
  const aaa = aa.split(",");

  return [...aaa];
};

const addToArray = (element, array) => {
  array.push(element);
  return array;
};

const addToArray2 = (element, array) => {              //DONE
  return array.concat(element);
};

const removeNthElement = (index, array) => {              //DONE
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {              //DONE
const arrOfStr = numbers.map(numbers => {
  return String(numbers);
});
return arrOfStr;
};

const uppercaseWordsInArray = strings => {              //DONE
const words = strings;
const upperCas = words.map(strings => strings.toUpperCase());
return upperCas;
};

const reverseWordsInArray = strings => {              //DONE
    const newArrays = [strings[0].split("").reverse().join(""),
    strings[1].split("").reverse().join(""), 
    strings[2].split("").reverse().join("")];
    return newArrays;
  };

const onlyEven = numbers => {              //DONE
  const arrOfNum = numbers;
  const even = numbers.filter(arrOfNum => {
    return arrOfNum % 2 === 0;
  });
  return even;
};

const removeNthElement2 = (index, array) => {              //DONE
  const  original = array
  const deleteAt = index
  const newArray = [...original.slice(0,deleteAt), ...original.slice(deleteAt + 1)]
  return newArray;
};

const elementsStartingWithAVowel = strings => {              //DONE
  const vowels = /^[aeiou]/i;
  const vowelsArr = strings.filter(str => vowels.test(str));
  return vowelsArr;
};

const removeSpaces = string => {              //DONE
  return string.split(" ").join("");
};

const sumNumbers = numbers => {              //DONE
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

const sortByLastLetter = strings => {
  const newArr = [strings.sort((a, b) => a[a.length-1] - b[b.length-1])];
  return newArr;
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
