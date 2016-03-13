var request = require('supertest');
var should = require('should');

var users = require("../../fixtures/users.json")

var mockUserLogin = users[0];

var fakeMockUserLogin = {
  "email":'Jaasasdck@sparrow.com',
  "password": 'Carribean',
};

var mockUserRegister = {
  "name":"John",
  "lastname":"Armstrong",
  "email":"John@Armstrong.com",
  "password":"Moon"
}

describe('AuthController', function() {

// User sign/signup/login Page
  describe('#login()', function() {
    it('should allow a user to login up providing  email and pswd', function (done) {
      request(sails.hooks.http.app)
        .post("/auth/login")
        .send(mockUserLogin)
        .expect(200)
        .end(function(err, res) {
            should(res.body.auth.email).be.exactly(mockUserLogin.email);
            done(err)
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

  describe('#register()', function() {
      it('should allow a user to register providing name, lastname, email and pswd', function (done) {
          request(sails.hooks.http.app)
          .post("/auth/register")
          .send(mockUserRegister)
          .expect(200)
          .end(function(err, res){
            //console.log(err, res)
            done(err)
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

  });






});
