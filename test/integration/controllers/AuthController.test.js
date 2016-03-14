var request = require('supertest');
var should = require('should');
// var agent = request.agent(sails.hooks.http.app);
// var superagent = require('superagent');
// var agent = superagent.agent();

var users = require("../../fixtures/users.json")
var agent;
var mockUserLogin = users[0];
// var mockUserLogin ={
//    "firstname":"LongJon",
//    "lastname":"Silver",
//    "email":"LongJon@Silver.com",
//    "password":"TreasureIsland",
//    "username": "Test2"
//  };

var mockUserLogin ={
   "email":"LongJown@Silver.com",
   "password":"TreasureIsland"
 };


var fakeMockUserLogin = {
  "email":'Jaasasdck@sparrow.com',
  "password": 'Carribean'
};

var mockUserRegister = {
   "firstname":"David",
   "lastname":"Gordon",
   "email":"David@gordon.com",
   "password":"jazzGordonSuperDude",
   "username": "davidGordonUser"
 }

 var mockUserRegisterMissingDetails = {
    "firstname":"David",
    "lastname":"Gordon",
    "email":"",
    "password":"jazzGordonSuperDude",
    "username": "davidGordonUser"
  }


describe('AuthController', function() {


  describe('#register()', function() {
    //BASE CASE, when it works
      // it('should allow a user to register providing name, lastname, username, email and pswd', function (done) {
      //   agent = request.agent(sails.hooks.http.app);
      //     agent
      //     .post("/auth/register")
      //     .send(mockUserRegister)
      //     .expect(200)
      //     .end(function(err, res){
      //       //console.log(err, res)
      //       if(err) return done(err);
      //       done(err)
      //     });
        // });


      // it('should not allow a user to register not providing all required details', function (done) {
      //     request(sails.hooks.http.app)
      //     // agent
      //     .post("/auth/register")
      //     .send(mockUserRegisterMissingDetails)
      //     .expect(401)
      //     .end(function(err, res){
      //       //console.log(err, res)
      //       done(err)
      //     });
      //   });

      // it('should not allow a user to register with details of an existing user', function (done) {
      //     // request(sails.hooks.http.app)
      //     agent
      //     .post("/auth/register")
      //     .send(mockUserLogin)
      //     .expect(401)
      //     .end(function(err, res){
      //       //console.log(err, res)
      //       done(err)
      //     });
      //   });

  });


// User sign/signup/login Page
  describe('#login()', function() {

    var agent;

  // before(function (done) {
  //   login.login(request, function (loginAgent) {
  //     agent = loginAgent;
  //     done();
  //   });
  // });

    it('should allow a user to login providing  email and pswd', function (done) {
      // var agent = request.agent(sails.hooks.http.app)


      request.agent(sails.hooks.http.app)
        .post("/auth/login")

        .set('Accept', 'text/plain')
    // .expect('Content-Type', 'text/plain', done)
        .send(mockUserLogin)
        .expect(200)
        .end(function(err, res) {
            if(err)
              throw(err);
console.log(res);
              // agent.saveCookies(res);
            // done(agent);

        })

    });

    // it('should not allow a user to login up providing fake credentials', function (done) {
    //   request(sails.hooks.http.app)
    //     .post("/auth/login")
    //     .send(fakeMockUserLogin)
    //     .expect(401)
    //     .end(function(err, res){
    //       //console.log(err, res)
    //       done(err)
    //     });
    // });

  });







});
