var request = require('supertest');
var should = require('should');

var users = require("../../fixtures/users.json")

var mockUserLogin = users[0];

var fakeMockUserLogin = {
  "email": "John@Armstrong.com",
  "password": "MoonLanding"
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

  // Auth sign/signup/login Page
  describe('#login()', function() {
    it('should allow a user to login up providing  email and pswd', function(done) {
      request(sails.hooks.http.app)
        .post("/auth/login")
        .send(fakeMockUserLogin)
        .expect(200)
        .end(function(err, res) {
          // should(res.body.auth.email).be.exactly(mockUserLogin.email);
          done(err)
        });
    });

  });

  // Auth logout
describe('#logout()', function(){
  it('should logout the user', function(done){
    request(sails.hooks.http.app)
      .post("/auth/logout")
      .send(fakeMockUserLogin)
      .expect(200)
      .end(function(err, res) {
        done(err)
      });
  });
});

});





// ================================================
  // //User delete
  // describe('#delete()', function() {
  //   it('should delete the user', function(done) {
  //     // request(sails.hooks.http.app)
  //     //   .post("/auth/login")
  //     //   .send(fakeMockUserLogin)
  //     //   .expect(200)
  //     //   .end(function(err, res) {
  //         request(sails.hooks.http.app)
  //         .del("/user")
  //           .send(fakeMockUserLogin)
  //           .expect(200)
  //           .end(function(err, res) {
  //             done(err)
  //           });
  //         // done(err)
  //       // });
  //   });
  //
  // });



  // describe('#delete()', function(){
  //   it('should delete the user', function(done){
  //     request(sails.hooks.http.app)
  //     .delete("/user")
  //     .send(fakeMockUserLogin)
  //     .expect(200)
  //     .end(function(err, res) {
  //       // should(res.body.auth.email).be.exactly(mockUserLogin.email);
  //       done(err)
  //     });
  //   });
  // });

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
