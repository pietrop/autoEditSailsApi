// /**
// * Integration tests for Transcript Controller
// * Will need user autenthication added before API call
// * once user auth has been implemented
// */
// var request = require('supertest');
// var should = require('should');
// var api="/api/v1";
//
// describe('TranscriptController', function() {
//   //Project Panel Page - Transcript list component
//   //Paperedit Page - Transcript list/Show component
//   //so that can load all transcripts on page load, so that switching between transcripts doesn't trigger an API call to load the page
//   describe('#readIndex()', function() {
//     it('it should return a list of transcripts(with associated media object and hypertranscript attribute?) associated with a proejct, provided a user and project id');
//
//   });
//
//   //Project Panel Page - Transcript list component
//   describe('#readShow()', function() {
//     it('it should return a transcript(with associated media object), provided, user, project, and transcript Id');
//
//   });
//
//   describe('#update()', function() {
//     it('it should update a transcript, provided, user, project, and transcript Id');
//
//   });
//
//   //When deleting a transcript it should see if it is associated with any paperedit, and not allow for it to be deleted if it is (?)
//   //coz if you delete a transcript, associated media is deleted, and this means that the paperedit papercuts would not able to be previewed anymore.
//   describe('#delete()', function() {
//     it('it should destroy a transcript and associated media, provided, user, project, and transcript Id');
//
//   });
//
// });
