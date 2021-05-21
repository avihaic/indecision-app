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
           test: /\.s?css$/,
=======
<<<<<<< HEAD
       },{
           test: /\.scss$/,
>>>>>>> 16e8a4196b07b767a52224560fac187fdd9e9b17
           use:[
              'style-loader',
              'css-loader',
              'sass-loader' 
           ]
<<<<<<< HEAD
=======
=======
>>>>>>> a0125bf22fd19283106fe8a53a58a14587993d64
>>>>>>> 16e8a4196b07b767a52224560fac187fdd9e9b17
       }] 
    },
    devtool: 'cheap-module-eval-source-map',
    devServer:{
        contentBase: path.join(__dirname, 'public')
    }
};

//loader
