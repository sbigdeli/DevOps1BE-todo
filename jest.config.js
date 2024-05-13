module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testRegex: '(/tests/.*|(\\.|/)(spec))\\.ts?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}