const fs = require('fs');
const path = require('path');
const env = process.env.NODE_ENV || 'development';
const knexfile = require('../config/knexfile');
const knex = require('knex')(knexfile[env]);
const bookshelf = require('bookshelf')(knex);

function capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
}

function trimExtension(filename) {
    return filename && path.basename(filename, path.extname(filename));
}

let models = {};

fs.readdirSync(__dirname).forEach(fileOrDirectory => {
    let lstat;
    let model;
    const name = capitalize(trimExtension(fileOrDirectory));
    abspath = path.join(__dirname, fileOrDirectory);

    if (abspath == __filename) {
        return;
    }

    lstat = fs.lstatSync(abspath);

    if (lstat.isFile(abspath) && path.extname(abspath) == '.js') {
        try {
            console.log(`[*] Loading model: ${name}`);
            model = require(abspath)(bookshelf);
            models[name] = model;
        } catch (e) {
            console.error(e);
        }
    }
});

module.exports = models;
