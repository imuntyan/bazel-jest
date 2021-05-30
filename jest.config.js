const path = require('path');

module.exports = {
  testEnvironment: 'node',
  reporters: ['default', './jest-reporter'],
  transform: {},
  testMatch: ['**/*.spec.js']
};
