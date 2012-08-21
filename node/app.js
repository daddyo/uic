// Original from http://stackoverflow.com/questions/10216395/error-failed-to-lookup-view-in-express
var express = require('express');
var app = module.exports = express();

require('./config/environment.js')(app, express);
require('./config/routes.js')(app);

var port = process.env.PORT || 7466;
app.listen(port);

console.log("Server listening on port " + port );
console.log("View engine: " + app.get("view engine") );
console.log("Views: " + app.get("views") );
