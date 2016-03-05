var request = require('supertest');
var api="/api/v1";

describe('UserController', function() {

  describe('#signup()', function() {
    it('should allow a user to sign up', function (done) {
      request(sails.hooks.http.app)
        .post(""+api+"/user/signup")
        .send({ name: 'TestUser', lastname:'TestLastName',email:'test@email.com', password: 'TestPswd' })
        .expect(201, done);
    });
  });





});
