// /**
// * Integration tests for Project Controller
// * Will need user autenthication added before API call
// * once user auth has been implemented
// */
//
// var request = require('supertest');
//
// var api="api/v1/";
//
// // describe('ProjectController', function() {
// //
// //   describe('#projectIndex()', function() {
// //     it('should redirect to /user/:userId/project', function (done) {
// //       request(sails.hooks.http.app)
// //         .set('Accept', 'application/json')
// //         .post(''+api+'/user/:userId/project')
// //         .send({ name: 'Test Project', description: 'Test Description' })
// //         .expect(202)
// //         .expect('location','/user/:userId/project/:projectId', done);
// //     });
// //   });
// //
// // });
//
// describe('GET /project', function(){
//   it('get project controller', function(done){
//     request(sails.hooks.http.app)
//       .get('/api/v1/project/2')
//       .end(function(err, result) {
//         assert.equal(result.body.name, 'Test p');
//         done();
//     });
//
//
//   });
// });
