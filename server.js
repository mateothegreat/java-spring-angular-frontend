/*
 * server.js is used for Heroku to start a web server.
 * In the package.json file specify the start script:
 *
 *      "scripts": {
 *          ..
 *          "start": "node server.js",
 *          ..
 *      },
 *
 * You'll need to `npm install express` before launching
 * on Heroku.
 *
 */
const express = require('express');
const path = require('path');

const app = express();

/*
*
* This will serve the static files from the dist directory.
*
* When Heroku builds your repository it will run the
* postinstall package.json script which will build the dist
* distribution.
*
*/
app.use(express.static(__dirname + '/dist'));
app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/index.html'));

});

/*
 * Heroku will listen map requests to port 8080 by default.
 *
 * Alternatively, the port can be passed by an environment
 * variable.
 *
 */
app.listen(process.env.PORT || 8080);
