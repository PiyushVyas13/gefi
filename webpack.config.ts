import webpack from "webpack"

const config: webpack.Configuration = {
    target: ['web', 'es6'],
    experiments: {
        asyncWebAssembly: true,
    },
    output: {
        environment: {
            asyncFunction: true,
        }
    }
}

export default config;