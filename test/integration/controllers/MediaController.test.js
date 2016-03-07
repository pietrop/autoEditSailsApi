/**
* Integration tests for Media Controller
* Will need user autenthication added before API call
* once user auth has been implemented
*/
var request = require('supertest');
var should = require('should');
var api="/api/v1";

describe('MediaController', function() {
  //Upload New Media - page
  describe('#create()', function() {
    it('it should create a media associated with a proejct, with a multipart form request with video or audio associated with it, provided a user and media id');

  });

  describe('#createWithSrt()', function() {
    it('it should create a media associated with a proejct, with a multipart form request with video or audio associated with it, with a corresponding srt file provided by the user, provided a user and media id');

  });
  //Another page
  describe('#update()', function() {
    it('it should update a media associated with a proejct and a transcript,provided a user, project, transcript and media id');

  });
  //No delete method as delete method is implemented at transcript level. when deleting a transcript corresponding media is deleted as well.


});
