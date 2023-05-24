module.exports = {
    testEnvironment: "jsdom",
    setupFiles: [require.resolve('whatwg-fetch')],
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
    transform: {
      '^.+\\.js?$': 'babel-jest',
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    moduleFileExtensions: ['js', 'jsx'],
  }