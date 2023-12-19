/*  Helper object. Input text can contain numbers spelled by letter. 
    Required for Part Two */
const spelledWithLetters = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
};

/* Expects a single char code, returns boolean
  It returns true if the char is a number: 0-9 */
function isNumberByCharCode(code) {
  if (code >= 48 && code <= 57) {
    return true;
  }
  return false;
}

/* Expects a string, and locate numbers spelled by letters 
  Returns an array of arrays.  */
function isNumberByLetters(text) {
  let textNum,
    textNumLast,
    isContain,
    isContainLast,
    indexOfTextNum,
    indexOfTextNumLast;

  const positionContainer = [];

  Object.entries(spelledWithLetters).map((key, val) => {
    isContain = text.indexOf(key[1]) === -1 ? false : true;
    isContainLast = text.lastIndexOf(key[1]) === -1 ? false : true;

    if (isContain) {
      textNum = key[0];
      indexOfTextNum = text.indexOf(key[1]);
      positionContainer.push([text, indexOfTextNum, textNum]);
    }

    if (isContainLast) {
      textNumLast = key[0];
      indexOfTextNumLast = text.lastIndexOf(key[1]);

      positionContainer.push([text, indexOfTextNumLast, textNumLast]);
    }
    return positionContainer;
  });
  return positionContainer;
}

export { isNumberByCharCode, isNumberByLetters };
