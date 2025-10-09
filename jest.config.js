/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',            // Tells Jest to use ts-jest for .ts files
    testEnvironment: 'node',      // Usually node for backend; can be 'jsdom' for frontend
    roots: ['<rootDir>/tests'],   // Points Jest to your test folder(s)
    // transformIgnorePatterns: [] // Only needed if you're referencing code in node_modules that needs transforming
  };
  