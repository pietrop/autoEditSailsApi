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
    // var mockUser = {"name":"TestUser2"};
    //
    // User.create(mockUser).exec(function (err, res) {
    //   // We also could have just used `Kitten.find().exec(...)`
    //   // if we'd left the global variable exposed.
    // });

    // Load fixtures
     var barrels = new Barrels();

     // Populate the DB
     barrels.populate(function(err) {

      //  var data =  {"users":[{"id":1,"name":"Herman","lastname":"Melville","email":"herman@melville.com","password":"MobyDick"}]};
      var data = barrels.data;
      console.log(JSON.stringify(data));

       for(var i=0; i<data.users.length; i++){
         //creating test objects from `/test/fixtures/users.json`
         User.create(data.users[i]).exec(function (err, res) {
           console.log("Created Mock User "+JSON.stringify(res)+"\n");
         });
       }

      // populateDB(data, function(){
        done(err,sails);
      // });



     });



    // done(err, sails);

  });
});

after(function(done) {
  console.log(); // Skip a line before displaying Sails lowering logs
  console.log("Lowering sails");
  // here you can clear fixtures, etc.. not needed if using sails-memory(?)
  sails.lower(done);
});


//
// function populateDB(data,cb){
//   //Loop through modesl
//   // for(var j=0; j<data.length; j++){
//     for (var j in data) {
//       console.log("data[j]")
//       console.log(data[j])
//     // upcase and remove trailing s
//     var modelNameS = data[j];
//     var modelNameUpcase = j.capitalize().replace(/s+$/, "");
//     modelNameUpcase.create(data[j]).exec(function (err, res) {
//       console.log("Created  "+modelName+JSON.stringify(res)+"\n");
//     });
//   }
//
//   if(cb){cb()};
// }
//
//
// String.prototype.capitalize = function() {
//     return this.charAt(0).toUpperCase() + this.slice(1);
// }
