/**
 * AnnotationController
 *
 * @description :: Server-side logic for managing annotations
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

 /*===================================================================================================================
 =  'POST /user/:userId/project/:projectId/transcript/:transcriptId/annotation'        :                  create     =
 /*=================================================================================================================**/
 
 create: function (req, res) {
	 return res.ok("created");
 },
 
 /*=====  End of create  ======*/

 /*===================================================================================================================
 =  'GET /user/:userId/project/:projectId/annotation'                                               :    findAll     =
 /*=================================================================================================================**/
 
 findAll: function (req, res) {
	 return res.ok("listed");
 },
 
 /*=====  End of findAll  ======*/

 /*===================================================================================================================
 =  GET /user/:userId/project/:projectId/transcript/:transcriptId/annotation/:annoatationId'        :    findOne     =
 ===================================================================================================================**/
 
 findOne: function (req, res) {
	 return res.ok("listed");
 },
 
 /*=====  End of findOne  ======*/

 /*===================================================================================================================
 =  'PUT /user/:userId/project/:projectId/transcript/:transcriptId/annotation/:annotationId'        :     update     =
 ===================================================================================================================**/
 
 update: function (req, res) {
	 return res.ok("updated");
 },
 
 
 /*=====  End of update  ======*/

 /*===================================================================================================================
 =  'DELETE /user/:userId/project/:projectId/transcript/:transcriptId/annotation/:annotationId'		: 	  delete 	 =
 ====================================================================================================================**/
 
 delete: function (req, res) {
	 return res.ok("deleted");
 }

 /*=====  End of delete  ======*/
 

};

