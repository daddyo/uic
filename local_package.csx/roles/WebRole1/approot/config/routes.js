
module.exports = function(server) {

    server.get('/', function(req, res) {
		res.send('Hello from express.get!');

        // res.render('default', {title: 'Home' } );
    });
    
    
    server.get('/default', function(req, res) {
		// res.send('express.get hdlr for /default');
		server.set("view options", {layout: false});
        res.render('default.html', {title: 'About' } );
    });


    server.get('/about', function(req, res) {
        res.render('about/about', {title: 'About' } );
    });


    server.get('/echo', function(req, res) {
        var msg = req.query;    
        res.send(msg);
    });

};
