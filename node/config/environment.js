// Build base path to views
var path = require("path");  
var viewsPath = path.join(__dirname, '../views');

// Original from http://stackoverflow.com/questions/10216395/error-failed-to-lookup-view-in-express
module.exports = function(app, express) {
    app.configure(function() {

        console.log('Base path for views: ' + viewsPath   );

        app.use(express.logger());
// JB: put css & images under public then set their location
//        app.use(express.static(__;dirname + '/public'));
        app.set('views', viewsPath  );
        app.set('view engine', 'ejs');
//        app.set('view options', { layout: false } );
    });
    
    // JB: does this turn env into dev env?
//    app.set('NODE_ENV', 'development');

    //development configuration
    app.configure('development', function() {
        app.use(express.errorHandler({
            dumpExceptions: true,
            showStack: true
        }));
    });

    //production configuration
    app.configure('production', function() {
        app.use(express.errorHandler());
    });
};
