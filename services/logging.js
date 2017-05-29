'use strict';

const bunyan = require('bunyan');
const morgan = require('morgan');
const os = require('os');
const pkginfo = require('../package.json');
const process = require('process');

module.exports = exports = {};

/* Setup some custom tokens for morgan middleware */
morgan.token('hostname', function getHostname() {
    return os.hostname();
});

morgan.token('pid', function getPid() {
    return process.pid;
});

/**
 * Get logger instance.
 * @param name: String, logger name.
 * @param level: String. Optional. default is "info".
 *               options are ("info", "debug", "warn", "fatal", "error").
 * @returns: bunyan.Logger instance.
 */
const getLogger = exports.getLogger = (name, level) => bunyan.createLogger({
    name: name,
    level: level || "info"
});

/**
 * Express middleware for HTTP request JSON logging.
 *
 * Usage:
 *
 * > logging = require('./services/logging');
 * > app.use(logging.middleware());
 *
 * @returns {middleware}
 */
const middleware = exports.middleware = () => morgan((tokens, req, res) => JSON.stringify({
    'remote-address': tokens['remote-addr'](req, res),
    'time': tokens['date'](req, res, 'iso'),
    'method': tokens['method'](req, res),
    'url': tokens['url'](req, res),
    'http-version': tokens['http-version'](req, res),
    'status-code': tokens['status'](req, res),
    'content-length': tokens['res'](req, res, 'content-length'),
    'referrer': tokens['referrer'](req, res),
    'user-agent': tokens['user-agent'](req, res),
    'hostname': tokens['hostname'](req, res),
    'pid': tokens['pid'](req, res)
}));

/* capture console logging and call our logging service instead */
let defaultLogger = getLogger(pkginfo.name);

console.log = function() {
    defaultLogger.info.apply(defaultLogger, arguments);
};
console.info = function() {
    defaultLogger.info.apply(defaultLogger, arguments);
};
console.warn = function() {
    defaultLogger.warn.apply(defaultLogger, arguments);
};
console.error = function() {
    defaultLogger.error.apply(defaultLogger, arguments);
};
console.debug = function() {
    defaultLogger.debug.apply(defaultLogger, arguments);
};
