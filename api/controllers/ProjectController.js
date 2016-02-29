/**
 * ProjectController
 *
 * @description :: Server-side logic for managing projects
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	show:  function (req, res) {

	Media.find().populate('transcript')
			.exec(function(err, m){
				return res.json(m);
				
			});

}
};

