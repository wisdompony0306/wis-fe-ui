'use strict';
process.env.NODE_ENV = 'production';

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

console.log(chalk.cyan('start...\n'))

const webpack = require('webpack');
var merge = require('webpack-merge')
const config = require('../config');
const webpackConfig = require('./webpack.prod.conf');

console.log(chalk.cyan('searching packges...\n'))

const target = process.argv[2];
let entry;
if (target) {
    if (fs.readdirSync(path.resolve(__dirname, '../src')).includes(target)) {
        entry = [target];
        console.log(chalk.yellow('buiding: '+target+'...\n'));
    } else {
        console.log(chalk.red(target + ' is not found.\n'))
        process.exit(1)
    }
} else {
    entry = fs.readdirSync(path.resolve(__dirname, '../src'));
    console.log(chalk.yellow('buiding all...\n'));
}

entry.forEach((item, index, array) => {
    if(item=='common'){return;}
    const config = merge(webpackConfig, {
        entry: path.resolve(__dirname, '../src/' + item + '/src/index.js'),
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, '../lib/' + item),
            libraryTarget:'commonjs-module'
        }
    })
    build(item, config);
});

function build(itemName, config) {
    webpack(config, (err, stats) => {
        if (err) throw err
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false, // if you are using ts-loader, setting this to true will make tyescript errors show up during build
            chunks: false,
            chunkModules: false
        }) + '\n\n')

        if (stats.hasErrors()) {
            console.log(chalk.red(itemName + '  Build failed with errors.\n'))
            process.exit(1)
        }

        fs.writeFile(path.resolve(__dirname, '../lib/'+itemName+'/style.css'), '', { flag: 'wx' }, function (err) {});

        console.log(chalk.green(itemName + '  Build complete.\n'))
    })
}
