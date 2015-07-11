'use strict';

var numberIsInteger = require('number-is-integer');
var isSquare = require('is-square');

function isTriangular (n) {
  if ( isSquare( 8*n + 1 ) ) {
    return true;
  }
  else {
    return false;
  }
}

module.exports = function (n) {
  if (typeof n !== 'number') {
    throw new TypeError('Expected a number');
  }
  if(n<=0) {
    throw new Error('The number must be a positive integer');
  }
  if(!numberIsInteger(n)){
    throw new Error('The number must be a integer');
  }
  return isTriangular(n);
};
