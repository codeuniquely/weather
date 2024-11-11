const config = {
  clearMocks: true,

  collectCoverageFrom: ['src/**/*.ts'],

  collectCoverage: true,

  coverageDirectory: 'coverage/spec',

  coveragePathIgnorePatterns: [
    'node_modules',
    '<rootDir>/src/mocks',
    '__spec__',
    '__test__',
    'interfaces.ts',
    'main.ts',
    'app.config.ts',
  ],

  coverageProvider: 'v8',

  moduleNameMapper: {
    '\\.(jpg|jpeg|png)$': '<rootDir>/mock-module.js',
    'src/(.*)$': '<rootDir>/src/$1',
    'mocks/(.*)$': '<rootDir>/src/mocks/$1',
  },

  preset: 'jest-preset-angular',

  setupFilesAfterEnv: ['<rootDir>/jest.spec.setup.ts'],

  testEnvironment: 'jsdom',

  testEnvironmentOptions: {
    customExportConditions: [''],
  },

  testMatch: ['**/src/**/*.spec.[tj]s?(x)'],
};

export default config;
