/**
 * ProjectController
 *
 * @description :: Server-side logic for managing projects
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getMedia:  function (req, res) {

	Media.find().populate('clip')
			.exec(function(err, m){
				return res.json(m);
				
			});

},
	getUsers:  function (req, res) {

	User.find().populate('account')
			.exec(function(err, m){
				return res.json(m);
				
			});

}



};

