var spawn = require('child_process').spawn;

var models = ["project","user","media","transcript","annotation","speaker","paperedit","papercut"];


     for(var i=0; i<models.length; i++){
       spawn('ls', ['-l']);
      var command  = spawn('sails', ['generate', 'api', models[i]]);
             command.stdout.on('data', function (data) {
                     console.log(data);
              });
     }
