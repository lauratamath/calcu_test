module.exports = {
  setupFilesAfterEnv: [
    './jest.setup.js',
  ],
  moduleNameMapper: {
    '\\.css$': '<rootDir>/src/_mocks_/css.mock.js',
  },
}
