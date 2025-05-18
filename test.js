const assert = require('assert');
const { getVersion } = require('./index');
const pkg = require('./package.json');

assert.strictEqual(getVersion(), pkg.version);
console.log('All tests passed.');
