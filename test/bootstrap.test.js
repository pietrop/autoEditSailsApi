//http://sailsjs.org/documentation/concepts/testing#?bootstraptestjs
var Sails = require('sails');
var Barrels = require('barrels');


// Increase the Mocha timeout so that Sails has enough time to lift.
// this.timeout(5000);
// Global before hook
before(function(done) {
  Sails.lift({
      // configuration for testing purposes
      //CONFIG START
      environment: 'test',
      port: 9999,
      log: {
        level: 'error'
      },
      models: {
        //connects to test db (sails-memory)
        connection: 'test',
        //wipe/drop ALL my data and rebuild models every time
        migrate: 'drop'
      }
      //END CONFIG
    },
    function(err, server) {
      if (err) return done(err);
      // here you can load fixtures, etc.
      // Load fixtures
      var barrels = new Barrels();

      // Save original objects in `fixtures` variable
      fixtures = barrels.data;

      // Populate the DB
      barrels.populate(function(err) {

        var data = barrels.data;
        // console.log(JSON.stringify(data));

        //  for(var i=0; i<data.users.length; i++){
        //creating test objects from `/test/fixtures/users.json`
        User.create(data.users).exec(function(err, res) {
          //  console.log("Created Mock User "+JSON.stringify(res)+"\n");
        });
        //  }

        done(err, server);
      });

    });
});

// Global after hook
after(function(done) {
  console.log(); // Skip a line before displaying Sails lowering logs
  console.log("Lowering sails");
  // here you can clear fixtures, etc.. not needed if using sails-memory(?)
  sails.lower(done);
});
