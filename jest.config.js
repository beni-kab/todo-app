module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules/(?!(sucrase)/)'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
    '^@/constants(.*)$': '<rootDir>/constants/$1',
    '^@/components(.*)$': '<rootDir>/components/$1',
  },
  // ...the rest of your config
};
