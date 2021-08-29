module.exports = {    
    testEnvironment: 'node',    
    collectCoverage: true,
    collectCoverageFrom: ['src/__test__/*.js'],
    coverageThreshold: {
        global: {
            branches: 50,
            functions: 50,
            lines: 50,
            statements: 50
        }
    },
    testPathIgnorePatterns: ['/node_modules/'],
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.js']    
}