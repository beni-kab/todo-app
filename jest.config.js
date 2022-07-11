module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules/(?!(sucrase)/)/.next'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
    '^@/constants(.*)$': '<rootDir>/constants/$1',
    '^@/components(.*)$': '<rootDir>/components/$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/.next/'],
  // ...the rest of your config
};
