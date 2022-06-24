function negate(a) {              //DONE
  return !a
};

function both(a, b) {              //DONE
  if (a === true && b === true) {
    return true
  } else {
    return false
  }
}

function either(a, b) {              //DONE
  if (a === true || b === true) {
    return true
  } else {
    return false
  }
};

function none(a, b) {              //DONE
  if ( a === false && b === false) {
    return true
  } else {
    return false
  }
};

function one(a, b) {              //DONE
  if ( a !== b ) {
    return true
  } else {
    return false
  }
};

function truthiness(a) {

return !!a
};

function isEqual(a, b) {              //DONE
  if (a === b) {
    return true
  } else {
    return false
  }
};

function isGreaterThan(a, b) {              //DONE
  if ( a > b ) {
    return true
  } else {
    return false
  }
};

function isLessThanOrEqualTo(a, b) {              //DONE
  if ( a <= b ) {
    return true
  } else {
    return false
  }
};

function isOdd(a) {              //DONE
  if ( a % 2 === 1 ) {
    return true
  } else {
    return false
  }
};

function isEven(a) {              //DONE
  if ( a % 2 === 0 ) {
    return true
  } else {
    return false
  }};

function isSquare(a) {              //DONE
  if ( a === 0 || a > 0 && Math.sqrt(a) % 1 === 0) {
    return true 
  } else {
    return false
  }
};

function startsWith(char, string) {              //DONE
  if ( char === string.charAt(0)) {
    return true
  } else {
    return false
  }
};

function containsVowels(string) {              //DONE
  let pattern = /[aeiou]/i;
  if ( string.match(pattern)) {
    return true
  } else {
    return false
  }
};

function isLowerCase(string) {              //DONE
  const word = string;
  if ( word === word.toLowerCase()) {
    return true;
  }  else { 
    return false;
  }
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
