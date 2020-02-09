import lodash from 'lodash';

import { f1 } from './test';

console.log('hi');

f1();

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = lodash.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());