/**
 * MediaController
 *
 * @description :: Server-side logic for managing media
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

 /*============================
 =            Test            =
 ============================*/

 ping: function (req, res) {
	 return res.send("pong!");
 },

 /*=====  End of Test  ======*/


/*===============================================================
=   'POST /user/:userId/project/:projectId/media' :   upload    =
================================================================*/

upload: function(req, res){
	return res.ok('media uploaded');
}

/*=====  End of upload  ======*/




};
