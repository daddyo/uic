// Original from http://stackoverflow.com/questions/10216395/error-failed-to-lookup-view-in-express
var express = require('express');
var app = module.exports = express.createServer();

require('./config/environment.js')(app, express);
require('./config/routes.js')(app);

app.listen(process.env.PORT);

console.log("Server listening on port " + process.env.PORT );
console.log("View engine: " + app.get("view engine") );
console.log("Views: " + app.get("views") );
