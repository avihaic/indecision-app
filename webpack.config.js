const path = require('path');

module.exports = {
entry: './src/app.js',
output:{
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
    },
    module:{
       rules:[{
           loader: 'babel-loader',
           test: /\.js$/,
           exclude:/node_modules/
<<<<<<< HEAD
       },{
           test: /\.scss$/,
           use:[
              'style-loader',
              'css-loader',
              'sass-loader' 
           ]
=======
>>>>>>> a0125bf22fd19283106fe8a53a58a14587993d64
       }] 
    },
    devtool: 'cheap-module-eval-source-map',
    devServer:{
        contentBase: path.join(__dirname, 'public')
    }
};

//loader
