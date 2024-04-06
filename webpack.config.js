const path = require('path');

module.exports = {
    mode: 'development', // Define o modo de desenvolvimento para ativar certas funcionalidades, como source maps
    entry: './src/main.js',// Ponto de entrada para o webpack, onde começará a analisar o código
    output:{
        path: path.resolve(__dirname, 'public', 'assets', 'js'),// Diretório de saída para os arquivos gerados pelo webpack
        filename: 'bundle.js'// Nome do arquivo de saída após a construção
        
    },
    module: {
        rules: [{
            exclude:/node_modules/,
            test: /\.js$/,// Expressão regular para verificar quais arquivos devem ser processados pelo loader
            use: {
                loader: 'babel-loader', // Nome do loader que será utilizado
                options: {
                    presets: ['@babel/env'] // Opções de configuração para o Babel
                }
            }
        }]
    },
    devtool: 'source-map'
}