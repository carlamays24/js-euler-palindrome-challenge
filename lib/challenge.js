'use strict';

module.exports = () => {
  return true;
};

let y = 0;
let x = 0;

while (x < 1000000) {

if ((x.toString(2) === (x.toString(2)).split('').reverse().join('')) && (x.toString(10) === (x.toString(10)).split('').reverse().join('')))

{
y = y + x;
x = x + 1;
}
}

console.log(y);
