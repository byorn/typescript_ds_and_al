module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ["**/__tests__/**/*.+(js|ts|tsx)"],
    setupFilesAfterEnv: ['./setupTest.js'],
  };