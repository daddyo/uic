// Original from http://stackoverflow.com/questions/10216395/error-failed-to-lookup-view-in-express
var path = require("path");  
var fs = require('fs');

module.exports = function(app) {

    app.get('/', function(req, res) {
        res.sendfile( 'views/default.html');
//        res.render('default.html', {title: 'Home' } );
    });

    app.get('/views/*', function(req, res) {
        var filePath = path.join( __dirname, '/..' + req.url );
console.log('local filepath: ' + filePath);
        res.render(filePath); 
        // , function(err, htmlData) {
            // res.send(htmlData);
        // });
    });

    app.get('/about', function(req, res) {
        res.render('about/about', {title: 'About' } );
    });

    app.get('/dygraph1', function(req, res) {
        res.render('dygraph1', {title: 'Dygraph' } );
    });

    app.get('/echo', function(req, res) {
        var msg = req.query;
        res.send(msg);
    });

};
