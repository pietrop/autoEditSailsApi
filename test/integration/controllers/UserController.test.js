var request = require('supertest');
var should = require('should');


describe('UserController', function() {
  //User profile/account page
  describe('#read()', function() {
    it('should get a user object provided the user id', function (done) {
      request(sails.hooks.http.app)
        .get('/user/1')
        // .expect(function(res) {
        // console.log(res.body)
          // should(res.body).be.exactly({});
        // })
        .expect(200,done);
    });


    it('should return a no user found message if id doesn\'t have a match');

  });

  describe('#update()', function() {
    it('should update a user details provided the user id');

    it('should return a no user found message if id doesn\'t have a match');

  });

  describe('#delete()', function() {
    it('should dalete a user provided the user id');

    it('should return a no user found message if id doesn\'t have a match');

  });


});
