// Build base path to views
var path = require("path");  
var viewsPath = path.join(__dirname, '../views');

module.exports = function(server, express) {
    server.configure(function() {

        console.log('Base path for views: ' + viewsPath   );

        server.use(express.logger());
// JB: put css & images under public then set their location
//        server.use(express.static(__;dirname + '/public'));

		// server.register( '.html', require('jade'));
        server.set('views', viewsPath  );
        server.set('view engine', 'jade');
    });
    
    // JB: does this turn env into dev env?
//    server.set('NODE_ENV', 'development');

    //development configuration
    server.configure('development', function() {
        server.use(express.errorHandler({
            dumpExceptions: true,
            showStack: true
        }));
    });

    //production configuration
    server.configure('production', function() {
        server.use(express.errorHandler());
    });
};
