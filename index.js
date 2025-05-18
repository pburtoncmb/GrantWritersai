function getVersion() {
  const { version } = require('./package.json');
  return version;
}

module.exports = { getVersion };
