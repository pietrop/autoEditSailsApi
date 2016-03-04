/**
* Integration tests for Project Controller
* Will need user autenthication added before API call
* once user auth has been implemented
*/

var request = require('supertest');

describe('ProjectController', function() {

  describe('#projectIndex()', function() {
    it('should redirect to /user/:userId/project', function (done) {
      request(sails.hooks.http.app)
        .post('/user/:userId/project')
        .send({ name: 'Test Project', description: 'Test Description' })
        .expect(302)
        .expect('location','/user/:userId/project/:projectId', done);
    });
  });

});
