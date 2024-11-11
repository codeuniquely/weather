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

  // '\\.(jpg|jpeg|png)$': `${__dirname}/mock-module.js`,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png)$': '<rootDir>/mock-module.js',
    'src/(.*)$': '<rootDir>/src/$1',
    'mocks/(.*)$': '<rootDir>/src/mocks/$1',
  },

  preset: 'jest-preset-angular',

  // reporters: [
  //   'default',
  //   // [
  //   //   '@casualbot/jest-sonar-reporter',
  //   //   {
  //   //     relativePaths: true,
  //   //     outputName: 'sonar-report.xml',
  //   //     outputDirectory: 'coverage/spec',
  //   //   },
  //   // ],
  // ],

  setupFilesAfterEnv: ['<rootDir>/jest.spec.setup.ts'],

  testEnvironment: 'jsdom',

  testEnvironmentOptions: {
    customExportConditions: [''],
  },

  testMatch: ['**/src/**/*.spec.[tj]s?(x)'],
};

export default config;
