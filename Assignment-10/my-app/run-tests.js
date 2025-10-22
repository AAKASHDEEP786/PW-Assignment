// run-tests.js
require('dotenv').config({ path: '.env.test' });
const jest = require('jest');

jest.run([
  '--runInBand',
  '--detectOpenHandles',
  'tests/integration'
]);
