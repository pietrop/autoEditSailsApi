var request = require('supertest');

describe('UserController', function() {

  describe('#login()', function() {
    it('should redirect to /user/:userId/project', function (done) {
      request(sails.hooks.http.app)
        .post('/users/login')
        .send({ name: 'Test User', password: 'TestPswd' })
        // .expect(302, {
        //   id: 'some fixed id',
        //   name: 'TOBI'
        // }, done);
        .expect('location','/user/:userId/project', done);
    });

    it('should send sucesfull confirmation json', function (done) {
      request(sails.hooks.http.app)
        .post('/users/login')
        .set('Accept', 'application/json')
        .expect(function(res) {
          res.body.id = 1;
          res.body.name = res.body.name.toUpperCase();
        })
        .expect(200, {
          id: 1,
          name: 'TOBI'
        }, done);
    });




  });

});
