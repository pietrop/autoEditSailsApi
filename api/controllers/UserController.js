/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = require('waterlock').actions.user({

  /**
   * `UserController.create()`
   */
  create: function (req, res) {

		User.create({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password
		}).exec(function(err, msg){
			sails.log(msg);
		});

		return res.json({
      success: 'user created'
    });
  },


  /**
   * `UserController.update()`
   */
  update: function (req, res) {

		User.update({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password
			 }).exec(function (err, updated){

  		 	if (err) {
    		// handle error here- e.g. `res.serverError(err);`
    		return;
  			}

  		console.log('Updated user to have name ' + updated[0].name);
		});

    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `UserController.delete()`
   */
  delete: function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  }
});
