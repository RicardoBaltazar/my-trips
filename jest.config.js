// // criando essas configuraçõs manualmente, podeos colocar apenas o que precisamos
// module.exports = {
//   testEnvironment: 'jsdom',
//   testPathIgnorePatterns: ['/node_modules/', '/.next/'], //ignorar pastas
//   collectCoverage: true,
//   collectCoverageFrom: ['src/**/*.ts(x)'], //cobrir quais arquivos em qual pasta
//   setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
// }

module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
