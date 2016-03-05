var request = require('supertest');
var should = require('should');


var api="/api/v1";

var mockUserOne = {
                    name: 'TestUser',
                    lastname:'TestLastName',
                    email:'test@email.com',
                    password: 'TestPswd'
                  };


describe('UserController', function() {

//POST
  describe('#signup()', function() {
    
    it('should allow a user to sign up providing name,lastname, email and pswd', function (done) {
      request(sails.hooks.http.app)
        .post(""+api+"/user/signup")
        .send(mockUserOne)
        .expect(201, done);
    });
  });

//GET (?)
  describe('#signin()', function() {
    //TODO: add before where you create a new user
    it('should sign in an existing user', function (done) {
      request(sails.hooks.http.app)
        .post(""+api+"/user/signin")
        .send({ email:mockUserOne.email, password: mockUserOne.password })
        .expect(200, done);
    });
  });

//GET
//TODO: there needs to be a policy to authenticate users before get, update, delete. perhaps using passportjs with sails and policies(?)
//http://sailsjs.org/documentation/concepts/policies/sails-passport
//
//https://github.com/tjwebb/sails-auth
  describe('#findOne()', function() {
    //TODO: add before where you put a new user and get id.
    it('should find a user by id', function (done) {
      request(sails.hooks.http.app)
      //TODO: check if there is an other way to deal with user id number so that is more programmatic and not hard coded.
        .get(""+api+"/user/1")
        .expect(200, done)
        .expect(function(res) {
        // res.body.id = 'some fixed id';
        // res.body.name = res.body.name.toUpperCase();
        should(res.body.name).be.exactly(mockUserOne.name);
        should(res.body.lastname).be.exactly(mockUserOne.lastname);
        should(res.body.email).be.exactly(mockUserOne.email);
        // console.log(res.body);
      });
    });
  });

//PUT
  describe('#update()', function() {
    var userId;

      before(function() {
      // runs before all tests in this block
      //TODO: setup update test, but creating a user, grabbing userId so that it can be used in the retoute to update.
      console.log("BEFORE")
    });


    it('should update a user s attributes', function (done) {
      //mockuser to use to update attributes of old one
      var mockUserOneUpdated = {
                          name: 'Jack',
                          lastname:'Hart'
                        };

      request(sails.hooks.http.app)
      .post(""+api+"/user/1")
      .send(mockUserOneUpdated)
        .expect(200, done)
        .expect(function(res) {
        // res.body.id = 'some fixed id';
        // res.body.name = res.body.name.toUpperCase();
        should(res.body.name).be.exactly(mockUserOneUpdated.name);
        should(res.body.lastname).be.exactly(mockUserOneUpdated.lastname);
        // console.log(res.body);
      });
    });
  });

  // describe('#delete()', function() {
  //   it('should update a user s attributes', function (done) {
  //     //mockuser to use to update attributes of old one
  //     var mockUserOneUpdated = {
  //                         name: 'Jack',
  //                         lastname:'Hart'
  //                       };
  //
  //     request(sails.hooks.http.app)
  //     .delete(""+api+"/user/1")
  //     // .send(mockUserOneUpdated)
  //       .expect(200, done)
  //       .expect(function(res) {
  //       // When deleting an object sails blueprint returns the object being deleted
  //       //TODO: perhaps to be changed with a response sucesfull instead?
  //       should(res.body.name).be.exactly(mockUserOneUpdated.name);
  //       should(res.body.lastname).be.exactly(mockUserOneUpdated.lastname);
  //       // console.log(res.body);
  //     });
  //   });
  // });



});
