/**
* Integration tests for Paperedit Controller
* Will need user autenthication added before API call
* once user auth has been implemented
*/
var request = require('supertest');
var should = require('should');
var api="/api/v1";

describe('PapereditController', function() {
  //Project Panel Page - Paperedit list component
  describe('#readIndex()', function() {
    it('it should return a list of paperedits associated with a proejct (main details only, no associated models like paper cut, it s for project panel page), provided a user and project id');

  });

  describe('#readShow()', function() {
    it('it should return a paperedit (with associated papercuts for paperedit show page), provided, user, project, and paperedit Id');

  });

  describe('#updatePapercuts()', function() {
    it('it should update a paperedit provided, user, project, and paperedit Id');

  });

  //TODO: decide how to update paperedit details vs update paperedit papercuts. an API end point for each, or a separate API end point for both?

  // describe('#updatePapereditDetails()', function() {
  //   it('it should update a paperedit (details) provided, user, project, and paperedit Id');
  //
  // });

  // describe('#updatePapercuts()', function() {
  //   it('it should update a paperedit s associated papercuts ( while we figured out a more granular way of doing so) provided, user, project, and paperedit Id');
  //
  // });

  describe('#delete()', function() {
    it('it should destroy a paperedit, provided, user, project, and paperedit Id');

  });


  describe('#create()', function() {
    it('it should create a paperedit provided, user, project Id');

  });




});
