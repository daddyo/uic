// Original from http://stackoverflow.com/questions/10216395/error-failed-to-lookup-view-in-express

module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('default', {title: 'Home' } );
    });
    
    
    app.get('/about', function(req, res) {
        res.render('about/about', {title: 'About' } );
    });


    app.get('/echo', function(req, res) {
        var msg = req.query;    
        res.send(msg);
    });

};
