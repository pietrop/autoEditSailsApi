/**
* ProjectController
*
* @description :: Server-side logic for managing projects
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/

module.exports = {
	foo: function(req, res) {
		if (!req.param('id')) {
			res.status(200);
			res.view('project/show', {
				project:{
					name: 'a test project name',
					date:"Today",
					description:"Some test description",
					papredits:[
						{
							name: "Test Paperedit",
							description: "Test Paperedit description",
							sections:[]
						},
						{
							name: "Test Paperedit2",
							description: "Test Paperedit2 description",
							sections:[]
						}
					],
					transcripts:[
						{
							name: "Test Transcript",
							description: "Test Transcript description",
							paragraph:[]
						},
						{
							name: "Test Transcript",
							description: "Test Transcript description",
							paragraph:[]
						}
					]
				}
			});
			// res.json({name: 'a project name'});
		}
	}

};
