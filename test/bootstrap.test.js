//http://sailsjs.org/documentation/concepts/testing#?bootstraptestjs
var sails = require('sails');

before(function(done) {

  // Increase the Mocha timeout so that Sails has enough time to lift.
  this.timeout(5000);

  sails.lift({
    // configuration for testing purposes
    //CONFIG
    environment: 'test',
    port: 9999,
    log: {
        level: 'error'
    },
    connections: {
        testDB: {
            adapter: 'sails-memory'
        }
    },
    connection: 'testDB',

    //wipe/drop ALL my data and rebuild models every time
    migrate: 'drop'
    //END CONFIG
  }, function(err, server) {
    if (err) return done(err);
    // here you can load fixtures, etc.
    var mockUser = {"name":"TestUser2"};

    User.create(mockUser).exec(function (err, res) {
      // We also could have just used `Kitten.find().exec(...)`
      // if we'd left the global variable exposed.
    });

    done(err, sails);
  });
});

after(function(done) {
  // here you can clear fixtures, etc.
  sails.lower(done);
});
