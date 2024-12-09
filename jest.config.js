module.exports = {
    testEnvironment: 'jsdom',
    transform: {
            '^.+\\.js$': 'babel-jest',
    },
    moduleNameMapper: {
        "\\.css$": "identity-obj-proxy",
    },
};