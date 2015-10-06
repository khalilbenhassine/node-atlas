/*------------------------------------*\
    $%NODE MODULES
\*------------------------------------*/
/* jslint node: true */

/**
 * Add native node.js modules to `NA#modules`.
 * @private
 * @function loadListOfNativeModules
 * @memberOf NA#
 */
exports.loadListOfNativeModules = function () {
    var NA = this,
        modules = {};

    /**
     * Allow you to create children process.
     * @public
     * @alias child_process
     * @type {Object}
     * @memberOf NA#modules
     * @see {@link http://nodejs.org/api/child_process.html Child Process}
     */
    modules.child_process = require('child_process');

    /**
     * Allow you to manage read/write on files.
     * @public
     * @alias fs
     * @type {Object}
     * @memberOf NA#modules
     * @see {@link http://nodejs.org/api/fs.html File System}
     */
    modules.fs = require('fs');

    /**
     * Allow you to handle and to transform file paths.
     * @public
     * @alias path
     * @type {Object}
     * @memberOf NA#modules
     * @see {@link http://nodejs.org/api/path.html Path}
     */
    modules.path = require('path');

    /**
     * Allow you to use many features of the HTTP protocol.
     * @public
     * @alias http
     * @type {Object}
     * @memberOf NA#modules
     * @see {@link http://nodejs.org/api/http.html HTTP}
     */
    modules.http = require('http');

    /**
     * Allow you to use many features of the HTTPs protocol.
     * @public
     * @alias http
     * @type {Object}
     * @memberOf NA#modules
     * @see {@link http://nodejs.org/api/https.html HTTPs}
     */
    modules.https = require('https');

    /**
     * List of modules callable into NodeAtlas and website NodeAtlas-based.
     * @namespace modules
     * @public
     * @type {Object}
     * @alias modules
     * @memberOf NA#
     */
    NA.modules = modules;
};

/**
 * Add npm modules to run a Server web.
 * @private
 * @function loadServerModules
 * @memberOf NA#
 */
exports.loadServerModules = function () {
    var NA = this;

    /**
     * An advanced web server.
     * @public
     * @function express
     * @memberOf NA#modules
     * @see {@link http://expressjs.com/ Express.js}
     */
    NA.modules.express = require('express');

    /**
     * Manage session of the server.
     * @public
     * @function session
     * @memberOf NA#modules
     * @see {@link https://github.com/expressjs/session express-session}
     */
    NA.modules.session = require('express-session');

    /**
     * Parse HTML for POST methods.
     * @public
     * @function bodyParser
     * @memberOf NA#modules
     * @see {@link https://github.com/expressjs/body-parser body-parser}
     */
    NA.modules.bodyParser = require('body-parser');

    /**
     * Parse Cookies for keep connection.
     * @public
     * @function cookieParser
     * @memberOf NA#modules
     * @see {@link https://github.com/expressjs/cookie-parser cookie-parser}
     */
    NA.modules.cookieParser = require('cookie-parser');

    /**
     * A command tool for run NodeAtlas as CLI.
     * @public
     * @alias commander
     * @type {Object}
     * @memberOf NA#modules
     * @see {@link https://github.com/tj/commander.js commander.js}
     */
    NA.modules.commander = require('commander');

    /**
     * Redirects any requests to a default domain.
     * @public
     * @function forceDomain
     * @memberOf NA#modules
     * @see {@link https://www.npmjs.org/package/forcedomain forcedomain}
     */
    NA.modules.forceDomain = require('forcedomain');
};

/**
 * Add npm modules to manipulate HTML render.
 * @private
 * @function loadTemplatingModules
 * @memberOf NA#
 */
exports.loadTemplatingModules = function () {
    var NA = this;

    /**
     * EJS cleans the HTML out of your JavaScript with client side templates.
     * @public
     * @alias ejs
     * @type {Object}
     * @memberOf NA#modules
     * @see {@link http://www.embeddedjs.com/ EJS}
     */
    NA.modules.ejs = require('ejs');

    /**
     * Tiny, fast, and elegant implementation of core jQuery designed specifically for the server.
     * @public
     * @function cheerio
     * @memberOf NA#modules
     * @see {@link https://www.npmjs.org/package/cheerio cheerio}
     */
    NA.modules.cheerio = require('cheerio');
};

/**
 * Add npm modules to enhance NodeAtlas.
 * @private
 * @function loadUtilsModules
 * @memberOf NA#
 */
exports.loadUtilsModules = function () {
    var NA = this;

    /**
     * Higher-order functions and common patterns for asynchronous code.
     * @public
     * @alias async
     * @type {Object}
     * @memberOf NA#modules
     * @see {@link https://www.npmjs.com/package/async async}
     */
    NA.modules.async = require('async');

    /**
     * An implementation of heritage.
     * @public
     * @function extend
     * @memberOf NA#modules
     * @see {@link https://www.npmjs.org/package/extend extend}
     */
    NA.modules.extend = require('extend');

    /**
     * Open a file or url in the user's preferred application.
     * @public
     * @function open
     * @memberOf NA#modules
     * @see {@link https://www.npmjs.org/package/open open}
     */
    NA.modules.open = require('open');

    /**
     * Make all directories in a path, like mkdir -p.
     * @public
     * @function mkpath
     * @memberOf NA#modules
     * @see {@link https://www.npmjs.org/package/mkpath mkpath}
     */
    NA.modules.mkpath = require('mkpath');

    /**
     * Clone directories using copy/symlink.
     * @public
     * @function traverseDirectory
     * @memberOf NA#modules
     * @see {@link https://www.npmjs.com/package/traverse-directory traverse-directory}
     */
    NA.modules.traverseDirectory = require('traverse-directory');
};

/**
 * Add npm modules for minification, obfuscation, compression, optimization and transformation.
 * @private
 * @function loadProcessModules
 * @memberOf NA#
 */
exports.loadProcessModules = function () {
    var NA = this;

    /**
     * Minify GIF, JPEG and PNG images.
     * @public
     * @function imagemin
     * @memberOf NA#modules
     * @see {@link https://www.npmjs.com/package/imagemin imagemin}
     */
    NA.modules.imagemin = require('imagemin');

    /**
     * Compress code before send it to the client.
     * @public
     * @function compress
     * @memberOf NA#modules
     * @see {@link https://github.com/expressjs/compression compression}
     */
    NA.modules.compress = require('compression');

    /**
     * CSS parser.
     * @public
     * @function cssParse
     * @memberOf NA#modules
     * @see {@link https://www.npmjs.com/package/css-parse css-parse}
     */
    NA.modules.cssParse = require('css-parse');

    /**
     * UglifyJS is a JavaScript parser, minifier, compressor or beautifier toolkit.
     * @public
     * @alias uglifyJs
     * @type {Object}
     * @memberOf NA#modules
     * @see {@link https://github.com/mishoo/UglifyJS2 UglifyJS2}
     */
    NA.modules.uglifyJs = require('uglify-js');

    /**
     * A fast, efficient, and well tested CSS minifier for node.js.
     * @public
     * @function cleanCss
     * @memberOf NA#modules
     * @see {@link https://github.com/jakubpawlowicz/clean-css clean-css}
     */
    NA.modules.cleanCss = require('clean-css');

    /**
     * The dynamic stylesheet language. http://lesscss.org.
     * @public
     * @alias less
     * @type {Object}
     * @memberOf NA#modules
     * @see {@link https://www.npmjs.com/package/less less}
     */
    NA.modules.less = require('less');

    /**
     * LESS.js middleware for connect.
     * @public
     * @alias lessMiddleware
     * @type {Object}
     * @memberOf NA#modules
     * @see {@link https://www.npmjs.com/package/less-middleware less-middleware}
     */
    NA.modules.lessMiddleware = require('less-middleware');
    NA.modules.lessMiddlewareUtilities = require('less-middleware/lib/utilities');
};

/**
 * Add all modules loaded from npm to `NA#modules`.
 * @private
 * @function loadListOfRequiredNpmModules
 * @memberOf NA#
 */
exports.loadListOfRequiredNpmModules = function () {
    var NA = this;

    /* Load all modules. */
    NA.loadServerModules();
    NA.loadTemplatingModules();
    NA.loadUtilsModules();
    NA.loadProcessModules();
};

/**
 * Download all packet like `npm install` based on package.json if a module is not found.
 * @private
 * @function downloadAllModule
 * @memberOf NA#
 * @param {Object} exception Allow to know if a module isn't found.
 */
exports.downloadAllModule = function (exception) {
    var NA = this,
        execute = NA.modules.child_process.exec;

    /* Test if package.json is present for obtain list of module and version. */
    NA.ifFileExist(NA.serverPhysicalPath, 'package.json', function () {
        NA.log(NA.appLabels.downloadAllModule.moduleNotExist + " " + NA.appLabels.downloadAllModule.downloadStarting + "(" + exception + ")");

        /* Execute an npm command to install all modules not founded. */
        execute('npm --prefix ' + NA.serverPhysicalPath + ' install -l', function (error) {
            if (!error) {
                NA.log(NA.appLabels.downloadAllModule.installationDone + " " + NA.appLabels.downloadAllModule.restartRequired);
                /** It's ok, killing process and restarting manually now. */
                process.kill(process.pid);
            } else {
                /** It's not ok explain the error. */
                NA.log(error);
            }
        });
    }, function () {
        /* No package.json ? We kill the process. */
        process.kill(process.pid);
    });
};

/**
 * Load modules or install modules.
 * @private
 * @function moduleRequired
 * @memberOf NA#
 * @param {moduleRequired~callback} callback Run next steps if all module are correctly loaded.
 */
exports.moduleRequired = function (callback) {
    var NA = this;

    try {
        NA.loadListOfRequiredNpmModules();

        /**
         * Next step after loading of modules.
         * @callback moduleRequired~callback
         */
        callback();
    } catch (exception) {
        if (exception.code === 'MODULE_NOT_FOUND') {
            /** If a module is not found, download it */
            NA.downloadAllModule(exception);
        } else {
            NA.log(exception);
        }
    }
};