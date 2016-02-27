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
 show: function (req, res) {
	// return res.send("Project: "
	// +req.param('projectId')
	// +"  Media"
	// +req.param('mediaId')
	// +" Transcript"
	// +req.param('transcriptID'));

	//TODO: a query to fetch nested Project with ID, Media with ID, and transcript with Id. to then return transcript object as json.

	return res.json(
		{
			"projectId":req.param('projectId'),
			"mediaId":req.param('mediaId'),
			"transcriptId":req.param('transcriptID')
		}
	);


}

};
