/**
 * PapereditController
 *
 * @description :: Server-side logic for managing paperedits
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

/*============================
 =            Test           =
 ============================*/

 ping: function (req, res) {
	 return res.send("pong!");
 },

 /*=====  End of Test  ======*/

/*=======================================================================================
=  'POST /user/:userId/project/:projectId/paperedit'         :             create       =
========================================================================================*/

 create: function (req, res) {
	 return res.ok("created");
 },

/*=====  End of create  ======*/

/*=======================================================================================
=  'GET /user/:userId/project/:projectId/paperedit'            :           findAll      =
========================================================================================*/

findAll: function (req, res) {
	 return res.ok("listed");
 },

/*=====  End of findAll  ======*/

/*=======================================================================================
=  'GET /user/:userId/project/:projectId/paperedit/:papereditId'    :      findOne      =
========================================================================================*/

findOne: function (req, res) {
	 return res.ok("listed");
 },

/*=====  End of findOne  ======*/

/*=======================================================================================
=  'PUT /user/:userId/project/:projectId/paperedit/:papereditId'    :       update      =
========================================================================================*/

update: function (req, res) {
	 return res.ok("updated");
 },

/*=====  End of update  ======*/

/*=======================================================================================
=  'DELETE /user/:userId/project/:projectId/paperedit/:papereditId'    :     delete     =
========================================================================================*/

delete: function (req, res) {
	 return res.ok("deleted");
 }

/*=====  End of delete  ======*/


};
