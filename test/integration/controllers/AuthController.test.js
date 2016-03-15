var request = require('supertest');
var should = require('should');

var users = require("../../fixtures/users.json")

var mockUserLogin = users[0];

//Uses credentials of user object in fxture folder tha thave been seeded in the database using test bootstrap file
var mockUserLoginCredentials = {
   "email":"LongJon@Silver.com",
   "password":"TreasureIsland"
 }

var mockUserRegister = {
  "lastname":"Sparrow",
  "email":"Jack@sparrow.com"
}

var fakeMockUserLogin = {
  "email": "fake@fake.com",
  "password": "FakeUserPswd"
};

var mockUserRegister = {
  "firstname": "John",
  "lastname": "Armstrong",
  "email": "John@Armstrong.com",
  "password": "MoonLanding"
}

describe('AuthController', function() {
  describe('#register()', function() {
    it('should allow a user to register providing name, lastname, email and pswd', function(done) {
      request.agent(sails.hooks.http.app)
        .post("/auth/register")
        .send(mockUserRegister)
        .expect(200)
        .end(function(err, res) {
          //console.log(err, res)
          done(err)
        });
    });

  });

  // User sign/signup/login Page
  describe('#login()', function() {
    it('should allow a user to login up providing  email and pswd', function(done) {
      request(sails.hooks.http.app)
        .post("/auth/login")
        .send(mockUserRegister)
        .expect(200)
        .end(function(err, res) {
          // console.log(res.body.token)
          // console.log(res.body.expires)
          should(res.body.token).be.type('string');///.with.lengthOf(4)
          should(res.body.expires).be.type('number');
          done(err)
        });
    });

    it('should NOT allow a user to login providing FAKE email and pswd', function(done) {
      request(sails.hooks.http.app)
        .post("/auth/login")
        .send(mockUserLoginCredentials)
        .expect(403)
        .end(function(err, res) {
          // console.log(res.body)
          should(res.body.error).be.exactly('user not found');
          done(err)
        });
    });

  });


});




// it('should not allow a user to register not providing all required details', function (done) {
//     request(sails.hooks.http.app)
//     .post("/auth/register")
//     .send(mockUserRegister)
//     .expect(200)
//     .end(function(err, res){
//       //console.log(err, res)
//       done(err)
//     });
//   });
