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
  * `UserController.findOne()`
  */
  findOne: function (req, res) {

    User.findOne({
     id : req.body._id
}).exec(function (err, account){
  if (err) {
    return res.negotiate(err);
  }
  if (!account) {
    return res.notFound('Could not find the user, sorry.');
  }

  sails.log('Found "%s"', account.email);
  return res.json(account);
});

return res.json({
  success: 'found users'
});
  },

  /**
  * `UserController.findAll()`
  */
  findAll: function (req, res) {

    User.find().exec(function (err, users){
  if (err) {
    return res.negotiate(err);
  }
  if (!users) {
    return res.notFound('Could not find any user, sorry.');
  }

  sails.log('Found "%s"', users.email);
  return res.json(users);
});

return res.json({
  success: 'found users'
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
      success: 'user created'
    });
  },


  /**
  * `UserController.delete()`
  */
  destroy: function (req, res) {

    User.destroy({
        id: req.body.id
      }).exec(function (err){
        if (err) {
  return res.negotiate(err);
}
sails.log('Deleted user, if it existed.');
return res.json({
  success: 'Deleted user, if it existed.'
});

});
}



});
