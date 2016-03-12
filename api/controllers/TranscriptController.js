/**
 * TranscriptController
 *
 * @description :: Server-side logic for managing transcripts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
 
 /*============================
 =            Test            =
 ============================*/

 ping: function (req, res) {
	 return res.send("pong!");
 },

 /**
 * Returns transcription from route`get /project/:projectId/media/:mediaId/transcript`
 */
//  show: function (req, res) {

// 	Media.findOne(req.param('mediaId'))
// 			.populate('transcript')
// 			.exec(function(err, m){
// 				return res.json(
// 					 m.transcript[0]
// 				);
// 			});

// },

 /*=====  End of Test  ======*/

/*====================================================================================== 
=  'POST /user/:userId/project/:projectId/transcript'   :                    create    =
=======================================================================================*/

create: function(req, res){
	return res.ok('Transcript created');
},

/*=====  End of create  ======*/

/*=======================================================================================
=   'GET /user/:userId/project/:projectId/transcript/'   :                   findAll    =
========================================================================================*/

findAll: function(req, res){
	return res.ok('All Transcripts listed');
},

/*=====  End of findAll  ======*/

/*=======================================================================================
=  'GET /user/:userId/project/:projectId/transcript/:transcriptId'      :    findOne    =
========================================================================================*/

findOne: function(req, res){
	return res.ok('Transcript listed');
},

/*=====  End of findOne  ======*/

/*=======================================================================================
=  'PUT /user/:userId/project/:projectId/transcript/:transcriptId'      :     update    =
========================================================================================*/

update: function(req, res){
	return res.ok('Transcript updated');
},

/*=====  End of update  ======*/

/*=======================================================================================
=  'DELETE /user/:userId/project/:projectId/transcript/:transcriptId'   :     delete    =
========================================================================================*/

delete: function(req, res){
	return res.ok('Transcript deleted');
}

/*=====  End of delete  ======*/



};
