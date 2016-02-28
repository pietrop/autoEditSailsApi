/**
 * TranscriptController
 *
 * @description :: Server-side logic for managing transcripts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	hi: function (req, res) {
	 return res.send("Hi there!");
 },

 /**
 * Returns transcription from route`get /project/:projectId/media/:mediaId/transcript`
 */
 show: function (req, res) {

	Media.findOne(req.param('mediaId'))
			.populate('transcript')
			.exec(function(err, m){
				return res.json(
					 m.transcript[0]
				);
			});

}

};
