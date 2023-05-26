module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  setupFiles: [require.resolve('whatwg-fetch')],
}
