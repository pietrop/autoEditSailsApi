var request = require('supertest');
var should = require('should');


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

var mockUserRegister = {
  "firstname": "John",
  "lastname": "Armstrong",
  "email": "John@Armstrong.com",
  "password": "MoonLanding"
}


describe('UserController', function() {

  // find one

  describe('#findOne()', function() {
    it('login', loginUser());

    it('should read the user details if logged in', function(done) {
      request.agent(sails.hooks.http.app)
        .get("/user")
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          console.log(res.body);
          done();
        });
    });
  });


  function loginUser() {
    return function(done) {
      request.agent(sails.hooks.http.app)
        .post("/auth/login")
        .send(mockUserRegister)
        .expect(200)
        .end(onResponse);

      function onResponse(err, res) {
        if (err) return done(err);
        return done();
      }

    };

  }

});
// describe('#findOne()', function() {
//   it('should read the user details if logged in', function(done) {
//     request.agent(sails.hooks.http.app)
//       .get("/user")
//       .send(mockUserRegister)
//       .expect(403)
//       .end(function(err, res) {
//         //console.log(err, res)
//         done(err)
//       });
//   });
// });


// ===============
// var token = null;
//
//   before(function(done) {
//     request(url)
//       .post('/user/token')
//       .send({ _id: user1._id, password: user1.password })
//       .end(function(err, res) {
//         token = res.body.token; // Or something
//         done();
//       });
//   });
//
//   it('should get a valid token for user: user1', function(done) {
//     request('/get/user')
//       .set('Authorization', token)
//       .expect(200, done);
//   });



//   //User profile/account page
//   describe('#read()', function() {
//     it('should get a user object provided the user id');
//
//   });
//
//   describe('#update()', function() {
//     it('should update a user details provided the user id');
//
//   });
//
//User delete
// describe('#delete()', function() {
//   it('should delete the user', function(done) {
//     request(sails.hooks.http.app)
//       .post("/auth/login")
//       .send(fakeMockUserLogin)
//       .expect(200)
//       .end(function(err, res) {
//         request(sails.hooks.http.app)
//           .del("/user")
//           .send(fakeMockUserLogin)
//           .expect(200)
//           .end(function(err, res) {
//             done(err)
//           });
//
//
//         done(err)
//       });
//   });
//
// });
//
//
// });





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