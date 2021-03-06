//http://sailsjs.org/documentation/concepts/testing#?bootstraptestjs
var sails = require('sails');
var Barrels = require('barrels');

before(function(done) {
  // Increase the Mocha timeout so that Sails has enough time to lift.
  // this.timeout(5000);

  sails.lift({
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

     // Populate the DB
     barrels.populate(function(err) {

      var data = barrels.data;
      // console.log(JSON.stringify(data));

      //creating test objects from `/test/fixtures/users.json`
      //waterline .create accepts array
      User.create(data.users).exec(function (err, res) {
        done(err,sails);
      });

     });

  });
});

after(function(done) {
  console.log(); // Skip a line before displaying Sails lowering logs
  console.log("Lowering sails");
  // here you can clear fixtures, etc.. not needed if using sails-memory(?)
  sails.lower(done);
});
