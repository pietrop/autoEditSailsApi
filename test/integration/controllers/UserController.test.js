// var request = require('supertest');
// var should = require('should');
//
//
// describe('UserController', function() {
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
