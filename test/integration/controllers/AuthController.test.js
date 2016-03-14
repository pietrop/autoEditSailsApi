var request = require('supertest');
var should = require('should');
// var agent = request.agent(sails.hooks.http.app);

var users = require("../../fixtures/users.json")
var agent;
// var mockUserLogin = users[0];
var mockUserLogin ={
   "email":"LongJon@Silver.com",
   "password":"TreasureIsland"
 };

var fakeMockUserLogin = {
  "email":'Jaasasdck@sparrow.com',
  "password": 'Carribean',
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

  // describe('#register()', function() {
  //   //BASE CASE, when it works
  //     it('should allow a user to register providing name, lastname, username, email and pswd', function (done) {
  //       // console.log(sails.hooks.http.app)
  //       agent = request.agent(sails.hooks.http.app);
  //         agent
  //         .post("/auth/register")
  //         .send(mockUserRegister)
  //         .expect(200)
  //         .end(function(err, res){
  //           //console.log(err, res)
  //           if(err) return done(err);
  //           done(err)
  //         });
  //       });
  //
  //
  //       it('should allow a user to logout', function (done) {
  //         // console.log(sails.hooks.http.app)
  //         // agent = request.agent(sails.hooks.http.app);
  //           agent
  //           .post("/auth/logout")
  //           .expect(200)
  //           .end(function(err, res){
  //             //console.log(err, res)
  //             if(err) return done(err);
  //             done(err)
  //           });
  //         });
  //
  //
  //     // it('should not allow a user to register not providing all required details', function (done) {
  //     //     request(sails.hooks.http.app)
  //     //     // agent
  //     //     .post("/auth/register")
  //     //     .send(mockUserRegisterMissingDetails)
  //     //     .expect(401)
  //     //     .end(function(err, res){
  //     //       //console.log(err, res)
  //     //       done(err)
  //     //     });
  //     //   });
  //
  //     // it('should not allow a user to register with details of an existing user', function (done) {
  //     //     // request(sails.hooks.http.app)
  //     //     agent
  //     //     .post("/auth/register")
  //     //     .send(mockUserLogin)
  //     //     .expect(401)
  //     //     .end(function(err, res){
  //     //       //console.log(err, res)
  //     //       done(err)
  //     //     });
  //     //   });
  //
  // });


// User sign/signup/login Page
  describe('#login()', function() {
    it('should allow a user to login providing  email and pswd', function (done) {
      // var agent = request.agent(sails.hooks.http.app)
      request.agent(sails.hooks.http.app)
      // agent
        .post("/auth/login")
        // .set('Accept', 'text/plain')
        .send(mockUserLogin)
        .expect(200)
        // .expect('Content-Type', 'application/json')
        .end(function(err, res) {
          console.log("res: "+JSON.stringify(res));
          // console.log(mockUserLogin)
          // console.log(res)
            // should(res.body.email).be.exactly(mockUserLogin.email);
            return done(err)
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
