/**
 * AuthController.test.js
 *
 * @module      :: Controller Testing
 * @description ::  Tests the Auth Controller
 *
 */

var request = require('supertest');
var should = require('should');
// var users = require("../../fixtures/users.json")
// var mockUserLogin = users[0];

var mockUserRegister = {
  "firstname": "John",
  "lastname": "Armstrong",
  "email": "John@Armstrong.com",
  "password": "MoonLanding"
}

var wrongMockUserRegister = {
  "firstname": "",
  "lastname": "Armstrong",
  "email": "John@Armstrong.com",
  "password": "MoonLanding"
}

var fakeMockUserLogin = {
  "email": "John@Armstrong.com",
  "password": "MoonLanding"
};

var wrongMockUserLogin = {
  "email": "John@Armstrong.com",
  "password": "M00nL2nd1n6"
};

var wrongMockUserLoginPwd = {
  "email": "John@Armstrong.com",
  "password": "M00nL2nd1n6"
};

var wrongMockUserLoginEmail = {
  "email": "J0hn@Armstr0n6.c0m",
  "password": "MoonLanding"
};



describe('AuthController', function() {

  /**
   * Testing for register
   */
  describe('#register()', function() {

    it('should allow a user to register providing name, lastname, email and pswd', function(done) {
      request.agent(sails.hooks.http.app)
        .post("/auth/register")
        .send(mockUserRegister)
        .expect(200)
        .end(function(err, res) {
          done(err)
        });
    });

    it('should not allow a user to register not providing all required details', function(done) {
      request.agent(sails.hooks.http.app)
        .post("/auth/register")
        .send(wrongMockUserRegister)
        .expect(401)
        .end(function(err, res) {

          console.log(res.body.success) // { success: false }
          done(err)
        });
    });

    // it('should not register the same user twice', function(done) {
    //   request.agent(sails.hooks.http.app)
    //     .post("/auth/register")
    //     .send(mockUserRegister)
    //     .expect(401)
    //     .end(function(err, res) {
    //       done(err)
    //     });
    // });

  });

  /**
   * Auth sign/signup/login Page
   */
  describe('#login()', function() {
    it('should allow a user to login up providing  email and pswd', function(done) {
      request.agent(sails.hooks.http.app)
        .post("/auth/login")
        .send(fakeMockUserLogin)
        .expect(200)
        .end(function(err, res) {
          done(err)
        });
    });

    it('shouldn\'t allow a user to login providing wrong pswd', function(done) {
      request.agent(sails.hooks.http.app)
        .post("/auth/login")
        .send(wrongMockUserLoginPwd)
        .expect(403)
        .end(function(err, res) {
          done(err)
        });
    });

    it('shouldn\'t allow a user to login providing wrong email', function(done) {
      request.agent(sails.hooks.http.app)
        .post("/auth/login")
        .send(wrongMockUserLoginEmail)
        .expect(403)
        .end(function(err, res) {
          done(err)
        });
    });

  });

  /**
   * Auth logout
   */
  describe('#logout()', function() {
    it('should logout the user', function(done) {
      request.agent(sails.hooks.http.app)
        .post("/auth/logout")
        .send(fakeMockUserLogin)
        .expect(200)
        .end(function(err, res) {
          done(err)
        });
    });
  });

});
